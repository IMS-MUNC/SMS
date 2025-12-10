import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Badge, Button, Form, Card } from "react-bootstrap";
import * as d3 from "d3";
import { FaPlus } from "react-icons/fa6";
import multibook from "../../assets/images/colorbooks.png";
import scale from "../../assets/images/scale.png";
import openbook from "../../assets/images/openbook.png";
import teacher from "../../assets/images/teacher.png";
import chart from "../../assets/images/chart.png";
import { TfiFilter } from "react-icons/tfi";
import { LuCloudDownload } from "react-icons/lu";
import { TiPlus } from "react-icons/ti";
import { PiDotsThreeVertical } from "react-icons/pi";
import img1 from "../../assets/images/house.png";
import img2 from "../../assets/images/classroom.png";
import img3 from "../../assets/images/subject.png";
import img4 from "../../assets/images/table.png";
import img5 from "../../assets/images/campus.png";
import img6 from "../../assets/images/moniter.png";
import student from "../../assets/images/libraryImg.png";
import jitu from "../../assets/images/jitu.jpg";
import eva from "../../assets/images/eva.jpg";
import girl from "../../assets/images/girl.jpg";
import man from "../../assets/images/man.jpg";
import lady from "../../assets/images/lady.jpg";
import { GoArrowRight } from "react-icons/go";

const AcademicSetup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const subjectData = {
    Maths: 40,
    Arts: 55,
    English: 75,
    History: 20,
    Biology: 90,
  };
  const [selectedSubject, setSelectedSubject] = useState("Maths");
  const [percentage, setPercentage] = useState(subjectData["Maths"]);

  const date = new Date();
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const cardDummyData = [
    {
      title: "Total Class",
      number: "15",
      status: "2 Not registered",
      img: multibook,
    },
    {
      title: "Total Section",
      number: "65",
      status: "3 special Sections",
      img: scale,
    },
    {
      title: "Total Subject",
      number: "45",
      status: "10 New additions",
      img: openbook,
    },
    {
      title: "Unassigned Teacher",
      number: "50",
      status: "5 Part-Time",
      img: teacher,
    },

    {
      title: "Unassigned classes",
      number: "8",
      status: "3 ongoing",
      img: chart,
    },
    {
      title: "Time table Not Assigned",
      number: "8",
      status: "2 Subject Not Assigned",
      img: chart,
    },
    {
      title: "Total Section",
      number: "65",
      status: "3 special Sections",
      img: chart,
    },
    {
      title: "Pending Promotions",
      number: "125",
      status: "Student",
      img: chart,
    },
    {
      title: "Classes With No Exam Pattern",
      number: "8",
      status: "3 clases missing",
      img: chart,
    },
  ];

  const classTeacherAssigned = [
    {
      id: "TCH101",
      name: "Amar",
      class: "10- List of Classes",
      totalSubject: "4- List of Suibject",
      avrageLoad: "5 Classes/Week",
      slot: "Available",
      load: "85%",
    },
    {
      id: "TCH105",
      name: "Roy",
      class: "10- List of Classes",
      totalSubject: "4- List of Suibject",
      avrageLoad: "5 Classes/Week",
      slot: "Full",
      load: "100%",
    },
    {
      id: "TCH111",
      name: "Chatni",
      class: "9- List of Classes",
      totalSubject: "2- List of Suibject",
      avrageLoad: "4 Classes/Week",
      slot: "Available",
      load: "80%",
    },
    {
      id: "TCH154",
      name: "Samosha",
      class: "9- List of Classes",
      totalSubject: "2- List of Suibject",
      avrageLoad: "4 Classes/Week",
      slot: "Available",
      load: "80%",
    },
    {
      id: "TCH156",
      name: "maggie",
      class: "9- List of Classes",
      totalSubject: "2- List of Suibject",
      avrageLoad: "4 Classes/Week",
      slot: "Available",
      load: "80%",
    },
    {
      id: "TCH152",
      name: "pulti",
      class: "9- List of Classes",
      totalSubject: "2- List of Suibject",
      avrageLoad: "4 Classes/Week",
      slot: "Available",
      load: "80%",
    },
    {
      id: "TCH180",
      name: "Ram",
      class: "9- List of Classes",
      totalSubject: "2- List of Suibject",
      avrageLoad: "4 Classes/Week",
      slot: "Available",
      load: "80%",
    },
    {
      id: "TCH159",
      name: "Raj",
      class: "9- List of Classes",
      totalSubject: "2- List of Suibject",
      avrageLoad: "4 Classes/Week",
      slot: "Available",
      load: "80%",
    },
  ];

  const acedemicModules = [
    {
      img: student,
      title: "Class & Section Setup",
      des: "staff- 20",
    },
    {
      img: student,
      title: "Subject Setup",
      des: "staff- 20",
    },
    {
      img: student,
      title: "Timetable Setup",
      des: "staff- 20",
    },
    {
      img: student,
      title: "Exam Pattern Setup",
      des: "staff- 20",
    },
    {
      img: student,
      title: "Grading System Setup",
      des: "staff- 20",
    },
  ];

  const slotColors = {
    Full: { color: "#D32F2F" }, // red theme
    Available: { color: "#2E7D32" }, // green theme
  };

  {
    /* <------------------------------------- Highlight of Timetable ---------------------------> */
  }

  const highlightsOfTimetable = [
    {
      img: jitu,
      highlights: "Class 7B has only 4 periods on Tuesday",
      status: "Mr.sunita has 40% of Workload",
    },
    {
      img: eva,
      highlights: "Class 7B has only 4 periods on Tuesday",
      status: "Mr.sunita has 40% of Workload",
    },
    {
      img: girl,
      highlights: "Class 7B has only 4 periods on Tuesday & monday",
      status: "Mr.sunita has 40% of Workload",
    },
    {
      img: man,
      highlights: "Class 7B has only 4 periods on Tuesday",
      status: "Mr.sunita has 40% of Workload",
    },
    {
      img: lady,
      highlights: "Class 7B has only 4 periods on Tuesday",
      status: "Mr.sunita has 40% of Workload",
    },
  ];

  {
    /* <=============================== Speed meter ============================> */
  }

  const gaugeRef = useRef();

  useEffect(() => {
    const handleResize = () => drawGauge(percentage);
    window.addEventListener("resize", handleResize);

    drawGauge(percentage);

    return () => window.removeEventListener("resize", handleResize);
  }, [percentage]);

  const drawGauge = (value) => {
    const container = gaugeRef.current.parentElement;
    const containerWidth = container.offsetWidth;

    const width = containerWidth; // Full responsive width
    const height = containerWidth * 0.35; // Scale height proportionally

    const svgEl = d3.select(gaugeRef.current);
    svgEl.selectAll("*").remove();

    const svg = svgEl
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height * 0.8})`);

    const radius = width * 0.25; // Dynamic radius

    const angleScale = d3
      .scaleLinear()
      .domain([0, 100])
      .range([-Math.PI / 2, Math.PI / 2]);

    const backgroundArc = d3
      .arc()
      .innerRadius(radius - radius * 0.2)
      .outerRadius(radius)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2);

    svg.append("path").attr("d", backgroundArc).attr("fill", "#E6E8EB");

    const filledArc = d3
      .arc()
      .innerRadius(radius - radius * 0.2)
      .outerRadius(radius)
      .startAngle(-Math.PI / 2)
      .endAngle(angleScale(value));

    svg.append("path").attr("d", filledArc).attr("fill", "#366BFF");

    const midAngle = (-Math.PI / 2 + angleScale(value)) / 2;
    const textRadius = radius * 0.45;

    svg
      .append("text")
      .attr("x", textRadius * Math.cos(midAngle) - 15)
      .attr("y", textRadius * Math.sin(midAngle) + 25)
      .attr("text-anchor", "middle")
      .attr("font-size", width * 0.1) // Responsive text size
      .attr("font-weight", "700")
      .attr("fill", "#404040")
      .text(value + "%");
  };

  const getStatusText = (val) => {
    if (val < 40) return "Low Coverage";
    if (val < 70) return "Partial Coverage";
    return "Good Coverage";
  };

  {
    /* <-------------------------------------------- pipe Graph -----------------------------------------------> */
  }

  const chartRef = useRef();

  const data = [
    { name: "1st", gpa: 30, marks: 20, grade: 20 },
    { name: "2nd", gpa: 20, marks: 35, grade: 30 },
    { name: "3rd", gpa: 25, marks: 55, grade: 20 },
    { name: "4th", gpa: 30, marks: 50, grade: 20 },
    { name: "5th", gpa: 28, marks: 10, grade: 60 },
    { name: "6th", gpa: 27, marks: 13, grade: 40 },
    { name: "7th", gpa: 29, marks: 20, grade: 40 },
    { name: "8th", gpa: 10, marks: 40, grade: 40 },
    { name: "9th", gpa: 26, marks: 4, grade: 40 },
    { name: "10th", gpa: 50, marks: 20, grade: 30 },
    { name: "11th", gpa: 28, marks: 12, grade: 40 },
    { name: "12th", gpa: 27, marks: 53, grade: 10 },
  ];

  const keys = ["grade", "marks", "gpa"];

  useEffect(() => {
    drawChart();

    const handleResize = () => drawChart();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const drawChart = () => {
    const container = chartRef.current.parentElement;
    const containerWidth = container.offsetWidth;

    const width = containerWidth; // Responsive width
    const height = 300;
    const margin = { top: 30, right: 20, bottom: 60, left: 40 };

    const svgEl = d3.select(chartRef.current);
    svgEl.selectAll("*").remove();

    const svg = svgEl.attr("width", width).attr("height", height);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([margin.left, width - margin.right])
      .padding(0.55);

    const y = d3
      .scaleLinear()
      .domain([0, 100])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const color = {
      grade: "#F39C12",
      marks: "#F8BBD0",
      gpa: "#276EF1",
    };

    const stackedData = d3.stack().keys(keys)(data);

    // Draw stacks
    svg
      .selectAll("g.layer")
      .data(stackedData)
      .join("g")
      .attr("class", "layer")
      .attr("fill", (d) => color[d.key])
      .selectAll("rect")
      .data((d) => d)
      .join("rect")
      .attr("x", (d) => x(d.data.name))
      .attr("y", (d) => y(d[1]))
      .attr("height", (d) => y(d[0]) - y(d[1]))
      .attr("width", x.bandwidth());

    // X-axis
    svg
      .append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSize(0).tickPadding(10))
      .selectAll("text")
      .attr("font-size", width * 0.025); // Responsive font size

    // Y-axis
    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y).ticks(5).tickSize(0))
      .selectAll("text")
      .attr("font-size", width * 0.022);

    svg.selectAll(".domain").remove();

    // Legend
    const legend = svg
      .append("g")
      .attr("transform", `translate(${width * 0.25}, ${height - 25})`);

    const legendItems = [
      { label: "GPA", color: "#344BFD" },
      { label: "Marks", color: "#F4A1AF" },
      { label: "Grade", color: "#EE902C" },
    ];

    legendItems.forEach((item, i) => {
      const spacing = width * 0.15;

      legend
        .append("circle")
        .attr("cx", i * spacing)
        .attr("cy", 6)
        .attr("r", width * 0.012)
        .attr("fill", item.color);

      legend
        .append("text")
        .attr("x", i * spacing + 15)
        .attr("y", 10)
        .text(item.label)
        .attr("font-size", width * 0.022)
        .attr("fill", "#767676");
    });
  };

  {
    /* <-------------------------------------------------------- tree -------------------------------------------------------------> */
  }

  const scheduleRef = useRef();

  const timetableData = [
    {
      className: "1st Class",
      schedule: [
        [1, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 0, 1, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [1, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0],
      ],
    },
    {
      className: "2nd Class",
      schedule: [
        [1, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 0, 1, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [1, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0],
      ],
    },
    {
      className: "3rd Class",
      schedule: [
        [1, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 0, 1, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [1, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0],
      ],
    },
    {
      className: "4th Class",
      schedule: [
        [1, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 0, 1, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [1, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0],
      ],
    },
    {
      className: "5st Class",
      schedule: [
        [1, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 0, 1, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [1, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0],
      ],
    },
    {
      className: "6st Class",
      schedule: [
        [1, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 0, 1, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [1, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0],
      ],
    },
    {
      className: "7st Class",
      schedule: [
        [1, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 0, 1, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [1, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0],
      ],
    },
    {
      className: "8st Class",
      schedule: [
        [1, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 0, 1, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [1, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0],
      ],
    },
    {
      className: "9st Class",
      schedule: [
        [1, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 0, 1, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [1, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0],
      ],
    },
    {
      className: "10st Class",
      schedule: [
        [1, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 0, 1, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [1, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0],
      ],
    },
    {
      className: "11st Class",
      schedule: [
        [1, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 0, 1, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [1, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0],
      ],
    },
    {
      className: "12st Class",
      schedule: [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1],
      ],
    },
  ];

  useEffect(() => {
    drawGrid();
  }, []);

  const drawGrid = () => {
    const svgEl = d3.select(scheduleRef.current);
    svgEl.selectAll("*").remove();

    const width = 1100;
    const height = 500;
    const cellSize = 18;
    const rowHeight = 200;
    const days = ["M", "T", "W", "T", "F", "S", "S"];

    const svg = svgEl.attr("width", width).attr("height", height);

    // ⭐ Draw day labels for each row
    for (let row = 0; row < 2; row++) {
      days.forEach((d, i) => {
        svg
          .append("text")
          .attr("x", 20)
          .attr("y", 65 + row * rowHeight + i * 23)
          .attr("text-anchor", "middle")
          .attr("font-size", "15px")
          .attr("fill", "#1C212D")
          .attr("font-weight", 400)
          .text(d);
      });
    }

    // ⭐ Draw class grids
    timetableData.forEach((cls, idx) => {
      const gridX = (idx % 6) * 170 + 40;
      const gridY = Math.floor(idx / 6) * rowHeight + 50;

      // Class title
      svg
        .append("text")
        .attr("x", gridX + 80)
        .attr("y", gridY - 12)
        .attr("text-anchor", "middle")
        .attr("font-size", "14px")
        .attr("font-weight", "600")
        .text(cls.className);

      // Grid cells
      cls.schedule.forEach((row, r) => {
        row.forEach((value, c) => {
          svg
            .append("rect")
            .attr("x", gridX + c * (cellSize + 5))
            .attr("y", gridY + r * (cellSize + 5))
            .attr("width", 20)
            .attr("height", 20)
            .attr("rx", 3)
            .attr("ry", 3)
            .attr("fill", value === 1 ? "#F49092" : "#C4EBD0");
        });
      });
    });

    // Legend
    svg
      .append("rect")
      .attr("x", 930)
      .attr("y", height - 30)
      .attr("width", 20)
      .attr("height", 20)
      .attr("fill", "#CDEECC")
      .attr("rx", 4)
      .attr("ry", 4);

    svg
      .append("text")
      .attr("x", 960)
      .attr("y", height - 15)
      .text("Available")
      .attr("font-size", "15px")
      .attr("fill", "#1C212D");

    svg
      .append("rect")
      .attr("x", 900)
      .attr("y", height - 30)
      .attr("width", 20)
      .attr("height", 20)
      .attr("fill", "#F49092")
      .attr("rx", 4)
      .attr("ry", 4);
    svg
      .append("text")
      .attr("x", 840)
      .attr("y", height - 15)
      .text("Booked")
      .attr("font-size", "15px")
      .attr("fill", "#1C212D");
  };

  {
    /* <---------------------------------------------------- Progress Bar -------------------------------------------------------------> */
  }

  const svgRef = useRef();

  const progressData = [
    { label: "Academic Session Created", value: 10, img: img1 },
    { label: "Classes & Sections Added", value: 10, img: img2 },
    { label: "Subjects Assigned", value: 10, img: img3 },
    { label: "Examinations Scheduled", value: 80, img: img4 },
    { label: "Student Enrollment Completed", value: 10, img: img5 },
    { label: "Teachers Mapped", value: 10, img: img6 },
    { label: "Curriculum Updated", value: 10, img: img4 },
    { label: "Timetable Defined", value: 10, img: img4 },
  ];

  useEffect(() => {
    drawProgress();

    const handleResize = () => drawProgress();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const drawProgress = () => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const container = svgRef.current.parentElement;
    const containerWidth = container.offsetWidth;

    const width = containerWidth; // Responsive width
    const rowHeight = 53; // Keep same height
    const barWidth = width * 0.55; // Bar scales with container width
    const barHeight = 6;
    const startY = 30;

    svg.attr("width", width).attr("height", progressData.length * rowHeight);

    progressData.forEach((d, i) => {
      const y = startY + i * rowHeight;

      // Icon
      svg
        .append("image")
        .attr("href", d.img)
        .attr("x", 1)
        .attr("y", y - 15)
        .attr("width", 40)
        .attr("height", 32);

      // Label
      svg
        .append("text")
        .attr("x", 50)
        .attr("y", y)
        .attr("font-size", "14px")
        .attr("fill", "#AEAEAE")
        .text(d.label);

      // Percentage text
      svg
        .append("text")
        .attr("x", width - 70) // Adjusts based on width
        .attr("y", y)
        .attr("font-size", "16px")
        .attr("fill", "#000")
        .text(d.value + "%");

      // Background bar
      svg
        .append("rect")
        .attr("x", 50)
        .attr("y", y + 10)
        .attr("width", barWidth)
        .attr("height", barHeight)
        .attr("fill", "#F4F9FC")
        .attr("rx", 3);

      // Progress bar
      svg
        .append("rect")
        .attr("x", 50)
        .attr("y", y + 10)
        .attr("width", (barWidth * d.value) / 100)
        .attr("height", barHeight)
        .attr("fill", "#007aff")
        .attr("rx", 3);
    });
  };

  return (
    <div className="">
      <div className="d-flex justify-content-between p-3 align-items-center mb-2">
        <h3>Academic Overview</h3>
        <button className="btn bg-primary p-2 text-white border-rounded">
          <FaPlus className="text-white" /> &nbsp; Add
        </button>
      </div>
      {/* <==================================================== scroll Card ======================================================> */}
      <Card.Body>
        <div
          className="d-flex gap-4 overflow-auto hide-scrollbar flex-nowrap"
          style={{ zIndex: "999999", padding: "0px 0px 25px 0px" }}
        >
          {/* <-------------------------------------------------- Active Year Card ------------------------------------------------> */}
          <div
            onClick={() => setShowPopup(true)}
            className="bg-white d-flex justify-content-between align-items-center p-3 rounded shadow flex-wrap"
            style={{
              width: "240px",
              height: "134px",
              flex: "0 0 auto",
              cursor: "pointer",
            }}
          >
            <div className="w-75 d-flex flex-column flex-wrap">
              <span className="academic-header d-flex flex-wrap">
                Active Academic <br /> Year
              </span>
              <h4 className="active-academic-year-">2024-2025</h4>
            </div>

            {/* Calendar Icon */}
            <div
              className="d-flex flex-column text-center shadow-sm overflow-hidden"
              style={{ width: "42px", height: "52px", fontFamily: "Arial" }}
            >
              <div
                className="text-white fw-bold py-1"
                style={{ backgroundColor: "#a64f4f", fontSize: "9px" }}
              >
                {months[date.getMonth()]}
              </div>

              <div
                className="fw-bold d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#f3f3f3",
                  fontSize: "20px",
                  color: "#1C212D",
                  height: "100%",
                }}
              >
                {date.getDate()}
              </div>
            </div>
          </div>

          {/* MAPPED CARDS */}
          {cardDummyData.map((item, index) => (
            <div key={index} className="bg-white p-3 rounded shadow card-item">
              {/* LEFT SIDE */}
              <div className="w-75 d-flex flex-column">
                <span className="academic-header">{item.title}</span>

                <div className="d-flex flex-column mt-1">
                  <span className="academic-number">{item.number}</span>
                  <span className="academic-bottom-card">{item.status}</span>
                </div>
              </div>

              {/* RIGHT SIDE IMAGE */}
              <div
                className="d-flex justify-content-end"
                style={{ width: "25%" }}
              >
                <img src={item.img} alt="icon" style={{ width: "40px" }} />
              </div>
            </div>
          ))}
        </div>
      </Card.Body>

      {/* <======================================== Left Side code ====================================> */}
      <Card className="border-0 shadow-none bg-transparent">
        <Card.Body className="bg-transparent p-3">
          <div className="academic-left-right gap-4 ">
            {/* TABLE AREA */}
            <div className="">
              <div className=" bg-white p-4 rounded shadow mt-3">
                <div className="table-header-book d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <span className="return-issued">
                      Teacher-Class Assigned
                    </span>
                  </div>
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <Button
                        className="rounded-3 "
                        variant="outline-secondary"
                        size="sm"
                        style={{
                          padding: "4px 14px",
                          border: "1px solid #1C1C1C29",
                        }}
                      >
                        <TfiFilter className="fw-semibold fs-5" /> &nbsp; Filter
                      </Button>
                    </div>
                    <div>
                      <Button
                        className="rounded-3 "
                        variant="outline-secondary"
                        size="sm"
                        style={{
                          padding: "4px 14px",
                          border: "1px solid #1C1C1C29",
                        }}
                      >
                        <LuCloudDownload
                          className=" fs-5"
                          style={{ transform: "rotate(180deg)" }}
                        />
                        &nbsp; Export
                      </Button>
                    </div>
                    <div>
                      <Button
                        className="rounded-3 bg-primary"
                        size="sm"
                        style={{
                          padding: "4px 14px",
                          border: "1px solid #1C1C1C29",
                        }}
                      >
                        <TiPlus
                          className=" fs-5"
                          style={{ transform: "rotate(180deg)" }}
                        />
                        &nbsp; Add
                      </Button>
                    </div>
                  </div>
                </div>
                {/* <-------------------------------------- Table ------------------------------------> */}
                <Card.Body>
                  <div className="table-responsive">
                    <Table hover responsive className="align-middle mb-0">
                      <thead>
                        <tr className="library-table-head-color">
                          <th></th>
                          <th>S.N.</th>
                          <th>Teacher Name</th>
                          <th>Teacher Id</th>
                          <th>Total No.of Class & Section Assigned </th>
                          <th>Total Subjects</th>
                          <th>Average Load</th>
                          <th>Slots</th>
                          <th>Load %</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {classTeacherAssigned.map((item, index) => (
                          <tr key={item.id}>
                            <td>
                              <input type="checkbox" name="" id="" />
                            </td>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.id}</td>
                            <td>{item.class}</td>
                            <td>{item.totalSubject}</td>
                            <td>{item.avrageLoad}</td>
                            <td>
                              <span
                                style={{
                                  backgroundColor: slotColors[item.slot]?.bg,
                                  color: slotColors[item.slot]?.color,
                                  borderRadius: "20px",
                                  padding: "4px 12px",
                                  fontWeight: 600,
                                  fontSize: "13px",
                                }}
                              >
                                {item.slot}
                              </span>
                            </td>

                            <td>{item.load}</td>
                            <td className="position-relative">
                              <div className="dropdown ">
                                <PiDotsThreeVertical
                                  className="cursor-pointer"
                                  data-bs-toggle="dropdown"
                                  style={{ cursor: "pointer" }}
                                />

                                <ul
                                  className="dropdown-menu shadow-sm border-0"
                                  style={{
                                    borderRadius: "8px",
                                    minWidth: "80px",
                                  }}
                                >
                                  <li>
                                    <button
                                      className="dropdown-item"
                                      style={{ borderRadius: "6px" }}
                                      onMouseEnter={(e) =>
                                        (e.target.style.background = "#cfe2ff")
                                      }
                                      onMouseLeave={(e) =>
                                        (e.target.style.background =
                                          "transparent")
                                      }
                                      onMouseDown={(e) =>
                                        (e.target.style.background = "#cfe2ff")
                                      }
                                    >
                                      Edit
                                    </button>
                                  </li>

                                  <li>
                                    <button
                                      className="dropdown-item"
                                      style={{ borderRadius: "6px" }}
                                      onMouseEnter={(e) =>
                                        (e.target.style.background = "#cfe2ff")
                                      }
                                      onMouseLeave={(e) =>
                                        (e.target.style.background =
                                          "transparent")
                                      }
                                      onMouseDown={(e) =>
                                        (e.target.style.background = "#cfe2ff")
                                      }
                                    >
                                      Delete
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
              </div>

              {/* <--------------------------------------------- 2 graph -------------------------------------------> */}
              <div className="speed-pipe mt-2">
                {/* <---------------------------------------------- speed meter graph ----------------------------------------> */}
                <div className="top-two-library w-100 bg-white rounded p-4 shadow mt-3">
                  <h4>Subject Coverage Status</h4>

                  {/* Responsive container */}
                  <div
                    style={{ width: "100%", height: "auto", marginTop: "50px" }}
                  >
                    <svg
                      ref={gaugeRef}
                      style={{ width: "100%", height: "100%" }}
                    ></svg>
                  </div>

                  <p className="pecentage-text text-center mt-2">
                    {getStatusText(percentage)}
                  </p>

                  <div className="d-flex justify-content-between px-3 mt-4 flex-wrap">
                    {Object.keys(subjectData).map((sub) => (
                      <span
                        key={sub}
                        onClick={() => {
                          setSelectedSubject(sub);
                          setPercentage(subjectData[sub]);
                        }}
                        style={{
                          cursor: "pointer",
                          fontWeight: selectedSubject === sub ? "700" : "400",
                          color:
                            selectedSubject === sub ? "#007AFF" : "#717376",
                          fontSize: "15px",
                          margin: "6px 10px",
                        }}
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* <--------------------------------------------pipe graph ---------------------------------------------> */}
                <div className="top-two-library w-100 bg-white rounded p-4 shadow mt-3">
                  <div>
                    <h4>Grade Performance Distribution</h4>
                  </div>

                  <div
                    style={{
                      width: "100%",
                      overflowX: "auto",
                      marginTop: "12px",
                    }}
                  >
                    <svg
                      ref={chartRef}
                      style={{ width: "100%", height: "100%" }}
                    ></svg>
                  </div>
                </div>
              </div>

              {/* <----------------------------------- git hub tree design -----------------------------------------> */}
              <div className="tree-highlights bg-white rounded shadow mt-4 p-4">
                <div>
                  <h4>Time Table Coverage</h4>
                </div>
                <div
                  style={{
                    width: "100%",
                    overflow: "auto",
                    marginTop: "12px",
                  }}
                >
                  <svg ref={scheduleRef}></svg>
                </div>
              </div>
            </div>

            {/* <----------------------------------------------------- GRAPH AREA -------------------------------------------------> */}
            <div className=" mt-3">
              <div className="table-left-progress-bar bg-white p-4 rounded shadow">
                <h4>Setup Progress</h4>

                <div style={{ width: "100%", overflowX: "auto" }}>
                  <svg ref={svgRef} style={{ width: "100%" }}></svg>
                </div>
              </div>

              {/* <============================================== Other Acedmic modules ====================================================> */}
              <div className="top-two-library bg-white rounded mt-4 p-4 shadow">
                <h4 className="other-library">Other Acedemic Modules</h4>
                {acedemicModules.map((item, index) => (
                  <div
                    key={index}
                    className="mt-4 d-flex justify-content-between align-items-center"
                  >
                    <div className="d-flex gap-2">
                      <div className="image">
                        <img src={item.img} alt="" className="img-student" />
                      </div>
                      <div className="d-flex flex-column">
                        <label className="return-issue">{item.title}</label>
                        <span className="staff">{item.des}</span>
                      </div>
                    </div>
                    <div>
                      <span className="staff-arrow">
                        <GoArrowRight />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {/* <============================================== Highlight of Timetable ===================================================> */}
              <div className="tree-highlights bg-white rounded mt-4 p-4 shadow">
                <h4>Highlight Of Timetable</h4>
                <div className="mt-4">
                  {highlightsOfTimetable.map((time, index) => (
                    <div className="d-flex align-items-center" key={index}>
                      <div className="w-25 px-2 py-2">
                        <img
                          src={time.img}
                          className="rounded-circle"
                          alt=""
                          style={{ width: "64px", height: "64px" }}
                        />
                      </div>

                      <div className="w-75 d-flex justify-content-between">
                        <div className="d-flex flex-column">
                          <b className="student-name">{time.highlights}</b>
                          <span>{time.status}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>

      {showPopup && (
        <div
          className=""
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            className="popup-box bg-white p-5 rounded shadow"
            style={{
              width: "771px",
              animation: "fadeIn 0.3s ease",
            }}
          >
            <h4 className="">Academic Year Details 2024-25</h4>
            <div className="d-flex gap-5 align-items-center justify-content-center mt-4">
              <div className="d-flex flex-column w-50  justify-content-center px-5">
                <span className="popup-title">Starting Date</span>
                <span>1st April 2024</span>
              </div>
              <div className="d-flex flex-column w-50 justify-content-center  ">
                <span className="popup-title">End Date</span>
                <span>1st March 2025</span>
              </div>
            </div>

            <div className="d-flex gap-5 align-items-center justify-content-center mt-4">
              <div className="d-flex flex-column w-50  justify-content-center px-5">
                <span className="popup-title">Duration</span>
                <span>1st April 2024</span>
              </div>
              <div className="d-flex flex-column w-50 justify-content-center  ">
                <span className="popup-title">Status</span>
                <span>Active</span>
              </div>
            </div>


            <div className="d-flex justify-content-end mt-4">
              <button
                onClick={() => setShowPopup(false)}
                className="btn btn-primary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AcademicSetup;
