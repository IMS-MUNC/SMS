import React, { useEffect, useRef } from "react";
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

const AcademicSetup = () => {
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

  const cadrDummyData = [
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

  const slotColors = {
    Full: { color: "#D32F2F" }, // red theme
    Available: { color: "#2E7D32" }, // green theme
  };

  {/* <=============================== Speed meter ============================> */}

  const gaugeRef = useRef();
  const percentage = 40; // CHANGE VALUE HERE

  useEffect(() => {
    drawGauge(percentage);
  }, [percentage]);

  const drawGauge = (value) => {
    const width = 500;
    const height = 160;

    const svgEl = d3.select(gaugeRef.current);
    svgEl.selectAll("*").remove();

    const svg = svgEl
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height * 0.75})`);

    const radius = 120;

    const angleScale = d3
      .scaleLinear()
      .domain([0, 100])
      .range([-Math.PI / 2, Math.PI / 2]); // -90deg to +90deg

    // Background arc (light gray)
    const backgroundArc = d3
      .arc()
      .innerRadius(radius - 20)
      .outerRadius(radius)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2);

    svg.append("path").attr("d", backgroundArc).attr("fill", "#E6E8EB");

    // Filled blue arc
    const filledArc = d3
      .arc()
      .innerRadius(radius - 20)
      .outerRadius(radius)
      .startAngle(-Math.PI / 2)
      .endAngle(angleScale(value));

    svg.append("path").attr("d", filledArc).attr("fill", "#366BFF");

    // Needle
    const angle = angleScale(value);
    svg
      .append("line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", (radius - 30) * Math.cos(angle))
      .attr("y2", (radius - 30) * Math.sin(angle))
      .attr("stroke", "#366BFF")
      .attr("stroke-width", 3);

    svg.append("circle").attr("r", 4).attr("fill", "#366BFF");
  };

  const getStatusText = (val) => {
    if (val < 40) return "Low Coverage";
    if (val < 70) return "Partial Coverage";
    return "Good Coverage";
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
          {/* Active Year Card */}
          <div
            className="bg-white d-flex justify-content-between align-items-center p-3 rounded shadow flex-wrap"
            style={{
              width: "240px",
              height: "134px",
              flex: "0 0 auto",
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
          {cadrDummyData.map((item, index) => (
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
          <div className="d-flex gap-4">
            {/* TABLE AREA */}
            <div className="w-75">
              <div className="bg-white p-4 rounded shadow">
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
                  <div className="table-resposive">
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

              {/* <--------------------------------------------- 4 graph -------------------------------------------> */}
              <div className="mt-3">
                <div className="four-graph bg-white rounded">
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4>Subject Coverage Status</h4>

                    {/* GAUGE */}
                    <svg ref={gaugeRef}></svg>

                    {/* % VALUE */}
                    <h2 className="text-center mt-2">{percentage}%</h2>

                    {/* STATUS */}
                    <p className="text-center fw-bold text-secondary mt-2">
                      {getStatusText(percentage)}
                    </p>

                    {/* SUBJECT TABS */}
                    <div className="d-flex justify-content-between px-5 mt-3">
                      <span>Maths</span>
                      <span>Arts</span>
                      <span className="text-primary fw-bold">English</span>
                      <span>History</span>
                      <span>Biology</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GRAPH AREA */}
            <div className="w-25">
              <div className="bg-white p-4 rounded shadow">graph</div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AcademicSetup;
