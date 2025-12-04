import { useEffect, useRef, useState } from "react";
import {
  Table,
  Button,
  Badge,
  Card,
  ListGroup,
  ProgressBar,
} from "react-bootstrap";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { LuCloudDownload } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
import { MdDelete, MdOutlineDownload } from "react-icons/md";
import AcadmicPerformace from "../../assets/images/Acadamicperfromace.png";
import { PiBuildingLight } from "react-icons/pi";
import { FaSchool } from "react-icons/fa";

import { Smile } from "lucide-react";
import { Form } from "react-bootstrap";
import { FaStar, FaUserFriends, FaUserTie } from "react-icons/fa";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { MdOutlineCalendarMonth } from "react-icons/md";

const TeacherProfile = () => {
  const [selectedSection, setSelectedSection] = useState(
    "Basic & Contact Details"
  );

  const [currentDate, setCurrentDate] = useState(new Date(2019, 9, 25)); // Default: Oct 2019

  // Mini Popup State (Integrated)
  const [showPopup, setShowPopup] = useState(false);
  const [popupViewDate, setPopupViewDate] = useState(new Date(2025, 1, 1)); // Default: Feb 2025
  const [selectedPopupDate, setSelectedPopupDate] = useState(
    new Date(2025, 1, 14)
  );
  const [btnLabel, setBtnLabel] = useState("Jan'25");

  // Ref for clicking outside to close popup
  const popupRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ------- Main Content Renderer -------
  const renderContent = () => {
    switch (selectedSection) {
      case "Basic & Contact Details":
        return (
          <>
            {/* MAIN INFORMATION */}
            <div className="d-flex  justify-content-between gap-4 ">
              <div className="w-100">
                <Card className="shadow border-0 rounded-4 p-4 h-auto ">
                  <div>
                    <Card className=" border-0  rounded-4 p-2 ms-2">
                      <h5 className="fw-semibold mb-4 ">
                        Basic & Contact Details
                      </h5>{" "}
                      <div className="ms-4">
                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Gender</p>
                            <p className="text-secondary">Male</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Date of Birth</p>
                            <p className="text-secondary">16th March 2000</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Blood Group</p>
                            <p className="text-secondary">B+</p>
                          </div>
                        </div>

                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Nationality</p>
                            <p className="text-secondary">Indian</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Religion</p>
                            <p className="text-secondary">Hinduism</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Category / Caste</p>
                            <p className="text-secondary">OBC</p>
                          </div>
                        </div>

                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Aadhar Number</p>
                            <p className="text-secondary">222555555555</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Age</p>
                            <p className="text-secondary">43</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Place Of Birth</p>
                            <p className="text-secondary">Allahabad</p>
                          </div>
                        </div>

                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Mother Tongue</p>
                            <p className="text-secondary">Hindi</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              Medical Conditions
                            </p>
                            <p className="text-secondary">No/Yes eg., asthma</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Disability</p>
                            <p className="text-secondary">Yes/no</p>
                          </div>
                        </div>
                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              Current Residential Address
                            </p>
                            <p className="text-secondary">House No.327</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Area</p>
                            <p className="text-secondary">Civil Lines</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">City</p>
                            <p className="text-secondary">Allahbad</p>
                          </div>
                        </div>
                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">State</p>
                            <p className="text-secondary">UP</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Country</p>
                            <p className="text-secondary">India</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Pincode</p>
                            <p className="text-secondary">254254</p>
                          </div>
                        </div>
                        <div className="row mb-0">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              Permanent Residential Address(if Different)
                            </p>
                            <p className="text-secondary">House No.327</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Area</p>
                            <p className="text-secondary">Civil Lines</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">City</p>
                            <p className="text-secondary">Allahabad</p>
                          </div>
                        </div>
                        <div className="row ">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">State</p>
                            <p className="text-secondary">UP</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Country</p>
                            <p className="text-secondary">India</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Pincode</p>
                            <p className="text-secondary">254254</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Card>
              </div>
              <div className="w-30">
                <Card className="shadow border-0 rounded-4 p-3 text-center ">
                  <div>
                    <img
                      src="https://i.pravatar.cc/200?img=11"
                      className=" mb-3 mt-1 p-3 "
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <h5 className="fw-bold fs-4">Mr. Sumit Sharma</h5>
                  <p className="text-secondary">Employee ID : ST65432</p>

                  <div className="text-start  px-3">
                    <p className="fw-semibold text-dark mb-1">E-Mail ID</p>
                    <p className="text-secondary">Sumit.Sharma@DPS.com</p>

                    <p className="fw-semibold text-dark mb-1">Designation</p>
                    <p className="text-secondary">
                      Subject or class Teacher or Coordination
                    </p>
                    <p className="fw-semibold text-dark mb-1">Department</p>
                    <p className="text-secondary">
                      English / Science / Mathematics etc.
                    </p>

                    <p className="fw-semibold text-dark mb-1">Contact No.</p>
                    <p className="text-secondary">+91 8765 765 765</p>
                  </div>
                </Card>
              </div>
            </div>
          </>
        );

      case "Employment Details":
        return (
          <>
            {/* MAIN INFORMATION */}
            <div className="d-flex  justify-content-between gap-4 ">
              <div className="w-100">
                <Card className="shadow border-0 rounded-4 p-4 h-100 ">
                  <div>
                    <Card className=" border-0  rounded-4 p-2 ms-2">
                      <h5 className="fw-semibold mb-4 ">Employment Details</h5>{" "}
                      <div className="ms-4">
                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Joining Date</p>
                            <p className="text-secondary">
                              Date of joining school
                            </p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Employment Type</p>
                            <p className="text-secondary">
                              Full-Time / Part-Time / Contractual
                            </p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Reporting To</p>
                            <p className="text-secondary">Principal/HOD</p>
                          </div>
                        </div>

                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              Subject(s) Assigned
                            </p>
                            <p className="text-secondary">e.g.,Physics,Maths</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Class Teacher Of</p>
                            <p className="text-secondary">e.g., Class 10A</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Assigned Classes</p>
                            <p className="text-secondary">
                              List of classes & subjects handled
                            </p>
                          </div>
                        </div>

                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Exam Duties</p>
                            <p className="text-secondary">
                              Invigilation/Paper Setting
                            </p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Assigned Events</p>
                            <p className="text-secondary">
                              Annual Day, Science Fair , etc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Card>
              </div>
              <div className="w-30">
                <Card className="shadow border-0 rounded-4 p-3 text-center ">
                  <div>
                    <img
                      src="https://i.pravatar.cc/200?img=11"
                      className=" mb-3 mt-1 p-3 "
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <h5 className="fw-bold fs-4">Mr. Sumit Sharma</h5>
                  <p className="text-secondary">Employee ID : ST65432</p>

                  <div className="text-start  px-3">
                    <p className="fw-semibold text-dark mb-1">E-Mail ID</p>
                    <p className="text-secondary">Sumit.Sharma@DPS.com</p>

                    <p className="fw-semibold text-dark mb-1">Designation</p>
                    <p className="text-secondary">
                      Subject or class Teacher or Coordination
                    </p>
                    <p className="fw-semibold text-dark mb-1">Department</p>
                    <p className="text-secondary">
                      English / Science / Mathematics etc.
                    </p>

                    <p className="fw-semibold text-dark mb-1">Contact No.</p>
                    <p className="text-secondary">+91 8765 765 765</p>
                  </div>
                </Card>
              </div>
            </div>
          </>
        );

      case "Academic Details":
        return (
          <>
            {/* MAIN INFORMATION */}
            <div className="d-flex  justify-content-between gap-4 ">
              <div className="w-100">
                <Card className="shadow border-0 rounded-4 p-4 h-100 ">
                  <div>
                    <Card className=" border-0  rounded-4 p-2 ms-2">
                      <h5 className="fw-semibold mb-4 ">Academic Details</h5>{" "}
                      <div className="ms-4">
                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              Total Working Experience
                            </p>
                            <p className="text-secondary">10 Yrs</p>
                          </div>
                        </div>

                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              School/College Name
                            </p>
                            <p className="text-secondary">XYZ School</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Experience Years</p>
                            <p className="text-secondary">5 yrs</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">From - To</p>
                            <p className="text-secondary">2015-17</p>
                          </div>
                        </div>
                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              School/College Name
                            </p>
                            <p className="text-secondary">XYZ School</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Experience Years</p>
                            <p className="text-secondary">5 yrs</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">From - To</p>
                            <p className="text-secondary">2015-17</p>
                          </div>
                        </div>

                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Quailification</p>
                            <p className="text-secondary">
                              e.g.,B.Ed,M.Sc,Ph.D
                            </p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">University</p>
                            <p className="text-secondary">ABC University</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Year</p>
                            <p className="text-secondary">2015-17</p>
                          </div>
                        </div>
                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Masters</p>
                            <p className="text-secondary">
                              e.g.,B.Ed,M.Sc,Ph.D
                            </p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">University</p>
                            <p className="text-secondary">ABC University</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Year</p>
                            <p className="text-secondary">2015-17</p>
                          </div>
                        </div>
                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Bachelors</p>
                            <p className="text-secondary">
                              e.g.,B.Ed,M.Sc,Ph.D
                            </p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">University</p>
                            <p className="text-secondary">ABC University</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Year</p>
                            <p className="text-secondary">2015-17</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Card>
              </div>
              <div className="w-30">
                <Card className="shadow border-0 rounded-4 p-3 text-center ">
                  <div>
                    <img
                      src="https://i.pravatar.cc/200?img=11"
                      className=" mb-3 mt-1 p-3 "
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <h5 className="fw-bold fs-4">Mr. Sumit Sharma</h5>
                  <p className="text-secondary">Employee ID : ST65432</p>

                  <div className="text-start  px-3">
                    <p className="fw-semibold text-dark mb-1">E-Mail ID</p>
                    <p className="text-secondary">Sumit.Sharma@DPS.com</p>

                    <p className="fw-semibold text-dark mb-1">Designation</p>
                    <p className="text-secondary ">
                      Subject or class Teacher or Coordinator
                    </p>
                    <p className="fw-semibold text-dark mb-1">Department</p>
                    <p className="text-secondary">
                      English / Science / Mathematics etc.
                    </p>

                    <p className="fw-semibold text-dark mb-1">Contact No.</p>
                    <p className="text-secondary">+91 8765 765 765</p>
                  </div>
                </Card>
              </div>
            </div>
          </>
        );

      case "Attendance & Leaves":
        const generateMainGrid = () => {
          const year = currentDate.getFullYear();
          const month = currentDate.getMonth();

          // Always start at 25 of the previous month
          const startDate = new Date(year, month - 1, 25);

          const grid = [];

          for (let i = 0; i < 42; i++) {
            const d = new Date(startDate);
            d.setDate(startDate.getDate() + i);

            let type = "current";
            if (d.getMonth() < month) type = "prev";
            else if (d.getMonth() > month) type = "next";

            grid.push({
              date: d,
              dayNum: d.getDate(),
              type,
            });
          }

          return grid;
        };

        // --- Mini Popup Grid Logic ---
        const generateMiniGrid = () => {
          const year = popupViewDate.getFullYear();
          const month = popupViewDate.getMonth();
          const daysInMonth = new Date(year, month + 1, 0).getDate();
          const startDayIndex = new Date(year, month, 1).getDay(); // Sun=0

          const grid = [];
          for (let i = 0; i < startDayIndex; i++) grid.push(null);
          for (let i = 1; i <= daysInMonth; i++)
            grid.push(new Date(year, month, i));
          return grid;
        };

        // --- Events Data ---
        const events = [
          { date: "2019-10-03", title: "Subtitution", type: "substitution" },
          { date: "2019-10-16", title: "On leave", type: "leave" },
          { date: "2019-10-20", title: "", type: "exam-start" },
          {
            date: "2019-10-21",
            title: "Exam Invigilator",
            type: "exam-middle",
          },
          { date: "2019-10-22", title: "", type: "exam-end" },
          { date: "2019-10-25", title: "Substitution", type: "substitution" },
        ];

        const getEvent = (d) => {
          const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
            2,
            "0"
          )}-${String(d.getDate()).padStart(2, "0")}`;
          return events.find((e) => e.date === iso);
        };

        // ==============================
        // 3. STYLES & HANDLERS
        // ==============================

        // Colors
        const colors2 = {
          header: "#e0e0e0",
          stripe: "#f8f9fa",
          purple: { bg: "#dcd6fc", text: "#5c4de4" },
          red: { bg: "#f7d4d4", text: "#c01818" },
          orange: { bg: "#ffe8d6", text: "#ff8c42" },
        };

        // Handlers
        const handleMainNav = (offset) =>
          setCurrentDate(
            new Date(
              currentDate.getFullYear(),
              currentDate.getMonth() + offset,
              25
            )
          );

        const handlePopupNav = (offset) =>
          setPopupViewDate(
            new Date(
              popupViewDate.getFullYear(),
              popupViewDate.getMonth() + offset,
              1
            )
          );
        const handleApply = () => {
          setBtnLabel(
            selectedPopupDate
              .toLocaleDateString("en-US", { month: "short", year: "2-digit" })
              .replace(" ", "'")
          );
          setShowPopup(false);
        };

        // Event Styling
        const getEventStyle = (type) => {
          const base = {
            position: "absolute",
            bottom: "10px",
            fontSize: "0.75rem",
            fontWeight: "700",
            padding: "4px 8px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            height: "24px",
            lineHeight: "16px",
          };
          switch (type) {
            case "substitution":
              return {
                ...base,
                backgroundColor: colors2.purple.bg,
                color: colors2.purple.text,
                borderLeft: `4px solid ${colors2.purple.text}`,
                left: "5%",
                width: "90%",
              };
            case "leave":
              return {
                ...base,
                backgroundColor: colors2.red.bg,
                color: colors2.red.text,
                borderLeft: `4px solid ${colors2.red.text}`,
                left: "0",
                width: "100%",
              };
            case "exam-start":
              return {
                ...base,
                backgroundColor: colors2.orange.bg,
                color: "transparent",
                borderLeft: `4px solid ${colors2.orange.text}`,
                left: "0",
                width: "102%",
                zIndex: 10,
              };
            case "exam-middle":
              return {
                ...base,
                backgroundColor: colors2.orange.bg,
                color: colors2.orange.text,
                left: "-2%",
                width: "104%",
                textAlign: "center",
                zIndex: 9,
              };
            case "exam-end":
              return {
                ...base,
                backgroundColor: colors2.orange.bg,
                color: "transparent",
                left: "-2%",
                width: "102%",
                zIndex: 8,
              };
            default:
              return {};
          }
        };

        const cardStyles = {
          width: "181px",
          height: "106px",
          minWidth: "175px",
        };
        const leaveData = [
          { sn: 1, type: "CL", available: 12, taken: 5, remaining: 7 },
          { sn: 2, type: "SL", available: 10, taken: 5, remaining: 5 },
          { sn: 3, type: "EL", available: 15, taken: 5, remaining: 10 },
        ];

        return (
          <>
            {/* MAIN INFORMATION */}
            <div className="d-flex  justify-content-between gap-4 ">
              <div className="w-100">
                <div className="container-fluid bg-light p-0">
                  <div className="d-flex flex-wrap gap-3">
                    {/* --- CARD 1: OVER ALL RATING --- */}
                    <div
                      className="card border-0 shadow-sm rounded-3 p-3"
                      style={cardStyles}
                    >
                      <div className="d-flex justify-content-between align-items-center h-100">
                        <div>
                          <div
                            className="fw-semibold text-dark "
                            style={{ fontSize: "13px" }}
                          >
                            Total Working Days
                          </div>
                          <div
                            className="fw-bolder text-dark"
                            style={{ fontSize: "24px", lineHeight: "1.1" }}
                          >
                            365
                          </div>
                          <div
                            className="mt-2"
                            style={{
                              width: "38px",
                              height: "3px",
                              backgroundColor: "#FDC987",
                            }}
                          ></div>
                        </div>
                        <div
                          className=" ps-3"
                          style={{
                            borderLeft: "2px solid #A1A1A1",
                            height: "43px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <FaSchool size={28} color="#FDC987" />
                        </div>
                      </div>
                    </div>
                    {/* --- CARD 2: LAST EVALUATION SCORE --- */}
                    <div
                      className="card border-0 shadow-sm rounded-3 p-3"
                      style={cardStyles}
                    >
                      <div className="d-flex justify-content-between align-items-center h-100">
                        <div>
                          <div
                            className="fw-semibold text-dark "
                            style={{ fontSize: "13px" }}
                          >
                            Days Present
                          </div>
                          <div
                            className="fw-bolder  text-dark mt-2"
                            style={{ fontSize: "22px", lineHeight: "1.2" }}
                          >
                            256
                          </div>
                          <div
                            className="mt-1"
                            style={{
                              width: "38px",
                              height: "3px",
                              backgroundColor: "#FFD700",
                            }}
                          ></div>
                        </div>
                        <div
                          className=" ps-3"
                          style={{
                            borderLeft: "2px solid #A1A1A1",
                            height: "43px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <FaStar
                            size={25}
                            color="#FFD700"
                            style={{
                              filter:
                                "drop-shadow(0px 7px 1px rgba(0,0,0,0.2))",
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* --- CARD 3: STUDENT FEEDBACK --- */}
                    <div
                      className="card border-0 shadow-sm rounded-3 p-3"
                      style={cardStyles}
                    >
                      <div className="d-flex justify-content-between align-items-center h-100">
                        <div>
                          <div
                            className="fw-semibold text-dark "
                            style={{ fontSize: "13px" }}
                          >
                            Days Absent
                          </div>
                          <div
                            className="fw-bolder text-dark "
                            style={{ fontSize: "24px", lineHeight: "1.1" }}
                          >
                            29
                          </div>

                          <div
                            className="mt-2"
                            style={{
                              width: "38px",
                              height: "3px",
                              backgroundColor: "#82C96D",
                            }}
                          ></div>
                        </div>
                        <div
                          className=" ps-3  d-flex flex-column align-items-center "
                          style={{
                            borderLeft: "2px solid #A1A1A1",
                            height: "49px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <FaSchool size={30} color="#82C96D" />
                          <span
                            className="badge mt-2 text-dark p-1 "
                            style={{
                              backgroundColor: "rgba(232, 251, 226, 1)",
                              color: "#dafbdaff",
                              fontSize: "12px",
                            }}
                          >
                            20% ↑
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* --- CARD 4: RESPONSES --- */}
                    <div
                      className="card border-0 shadow-sm rounded-3 p-3"
                      style={cardStyles}
                    >
                      <div className="d-flex justify-content-between align-items-center h-100">
                        <div>
                          <div
                            className="fw-semibold text-dark  "
                            style={{ fontSize: "13px" }}
                          >
                            Student Feedback
                          </div>
                          <div
                            className="fw-bolder text-dark mt-2"
                            style={{ fontSize: "22px", lineHeight: "1.2" }}
                          >
                            4.3/5
                          </div>
                          <div
                            className="mt-1"
                            style={{
                              width: "38px",
                              height: "3.2px",
                              backgroundColor: "#FFD700",
                            }}
                          ></div>
                        </div>
                        <div
                          className=" ps-3"
                          style={{
                            borderLeft: "2px solid #A1A1A1",
                            height: "43px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <FaStar
                            size={25}
                            color="#FFD700"
                            style={{
                              filter:
                                "drop-shadow(0px 7px 1px rgba(0,0,0,0.2))",
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* --- CARD 5: ATTENDANCE SCORE --- */}
                    <div
                      className="card border-0 shadow-sm rounded-3 p-2"
                      style={cardStyles}
                    >
                      <div className="d-flex align-items-center h-100">
                        <div className="w-100 ms-2">
                          <div
                            className="fw-bold text-dark mb-2"
                            style={{ fontSize: "13px" }}
                          >
                            Today's Status
                          </div>

                          <div className="d-flex align-items-center ">
                            <span
                              className="fw-bold text-dark "
                              style={{ fontSize: "20px" }}
                            >
                              Present
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-fluid bg-light  p-0 mt-4">
                  {/* Main Card */}
                  <div
                    className="card border-0 shadow-sm w-100"
                    style={{ width: "100%", borderRadius: "8px" }}
                  >
                    <div className="card-body p-4">
                      {/* Header Section */}
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5
                          className="mb-0 text-dark "
                          style={{ fontSize: "1.25rem" }}
                        >
                          Leave Balance Tracker
                        </h5>
                        {/* Date Button */}
                        <button
                          className="btn border d-flex align-items-center gap-2 bg-white text-secondary"
                          style={{ borderRadius: "8px", padding: "6px 12px" }}
                        >
                          <MdOutlineCalendarMonth />
                          <span style={{ fontSize: "0.9rem" }}>Jan'25</span>
                        </button>
                      </div>

                      {/* Table Section */}
                      <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                          {/* Table Header */}
                          <thead className=" border-bottom">
                            <tr className="bg-light">
                              <th
                                className="py-3 ps-4 border-bottom-0 text-dark"
                                style={{
                                  width: "80px",
                                  fontSize: "0.85rem",
                                  fontWeight: "700",
                                }}
                              >
                                S.N
                              </th>
                              <th
                                className="py-3  border-bottom-0 text-dark"
                                style={{
                                  width: "25%",
                                  fontSize: "1rem",
                                  fontWeight: "700",
                                }}
                              >
                                Leave Type
                              </th>
                              <th
                                className="py-3 border-bottom-0 text-dark"
                                style={{
                                  fontSize: "1rem",
                                  fontWeight: "700",
                                }}
                              >
                                Available
                              </th>
                              <th
                                className="py-3 border-bottom-0 text-dark"
                                style={{
                                  fontSize: "1rem",
                                  fontWeight: "700",
                                }}
                              >
                                Taken
                              </th>
                              <th
                                className="py-3 border-bottom-0 text-dark"
                                style={{
                                  fontSize: "1rem",
                                  fontWeight: "700",
                                }}
                              >
                                Remaining
                              </th>
                              <th
                                className="py-3 border-bottom-0"
                                style={{ width: "50px" }}
                              ></th>
                            </tr>
                          </thead>

                          {/* Table Body */}
                          <tbody>
                            {leaveData.map((row) => (
                              <tr key={row.sn}>
                                <td
                                  className="py-3 ps-4 text-secondary"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  {row.sn}
                                </td>
                                <td
                                  className="py-3 text-dark fw-medium"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  {row.type}
                                </td>
                                <td
                                  className="py-3 text-secondary"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  {row.available}
                                </td>
                                <td
                                  className="py-3 text-secondary"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  {row.taken}
                                </td>
                                <td
                                  className="py-3 text-secondary"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  {row.remaining}
                                </td>

                                {/* Action Menu (Three dots) */}
                                <td className="py-3 text-end pe-3">
                                  <a
                                    href="#"
                                    className="text-secondary text-decoration-none"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      className="bi bi-three-dots-vertical"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                    </svg>
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-fluid bg-white min-vh-100 mt-4 mt-0 p-5 rounded-3 shadow-sm">
                  <div className="w-100" style={{ maxWidth: "1000px" }}>
                    {/* --- HEADER SECTION --- */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h4
                        className="mb-0 text-dark fw-normal"
                        style={{ letterSpacing: "-0.5px" }}
                      >
                        Attendance Heatmap Calendar
                      </h4>

                      {/* Main Navigation */}
                      <div className="d-flex align-items-center gap-4">
                        <button
                          onClick={() => handleMainNav(-1)}
                          className="btn btn-link text-dark text-decoration-none fs-4 fw-bold p-0"
                        >
                          &lt;
                        </button>
                        <span
                          className="fs-3 fw-bold text-dark"
                          style={{ letterSpacing: "-0.5px" }}
                        >
                          {currentDate.toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <button
                          onClick={() => handleMainNav(1)}
                          className="btn btn-link text-dark text-decoration-none fs-4 fw-bold p-0"
                        >
                          &gt;
                        </button>
                      </div>

                      {/* Popup Button Wrapper */}
                      <div className="position-relative" ref={popupRef}>
                        <button
                          className="btn bg-white border d-flex align-items-center gap-2 text-secondary px-3 py-2 shadow-sm"
                          style={{ borderRadius: "8px", fontSize: "0.9rem" }}
                          onClick={() => setShowPopup(!showPopup)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                          </svg>
                          {btnLabel}
                        </button>

                        {/* --- INLINE MINI DATEPICKER POPUP --- */}
                        {showPopup && (
                          <div
                            className="bg-white shadow-lg rounded p-3 position-absolute end-0 mt-2"
                            style={{
                              width: "320px",
                              zIndex: 1050,
                              border: "1px solid #e9ecef",
                            }}
                          >
                            {/* Popup Header */}
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <span
                                className="fw-bold text-dark"
                                style={{ fontSize: "0.95rem" }}
                              >
                                {popupViewDate.toLocaleDateString("en-US", {
                                  month: "long",
                                  year: "numeric",
                                })}
                              </span>
                              <div className="d-flex gap-1">
                                <button
                                  onClick={() => handlePopupNav(-1)}
                                  className="btn btn-sm btn-light text-secondary px-2 border-0"
                                  style={{ backgroundColor: "#f8f9fa" }}
                                >
                                  &lt;
                                </button>
                                <button
                                  onClick={() => handlePopupNav(1)}
                                  className="btn btn-sm btn-light text-secondary px-2 border-0"
                                  style={{ backgroundColor: "#f8f9fa" }}
                                >
                                  &gt;
                                </button>
                              </div>
                            </div>
                            {/* Popup Weekdays */}
                            <div
                              className="d-grid mb-2"
                              style={{ gridTemplateColumns: "repeat(7, 1fr)" }}
                            >
                              {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                                <div
                                  key={d}
                                  className="text-center text-secondary fw-bold small opacity-75"
                                >
                                  {d}
                                </div>
                              ))}
                            </div>
                            {/* Popup Grid */}
                            <div
                              className="d-grid mb-3"
                              style={{
                                gridTemplateColumns: "repeat(7, 1fr)",
                                rowGap: "8px",
                              }}
                            >
                              {generateMiniGrid().map((date, i) => {
                                if (!date) return <div key={i}></div>;
                                const isSelected =
                                  selectedPopupDate &&
                                  date.toDateString() ===
                                    selectedPopupDate.toDateString();
                                return (
                                  <div
                                    key={i}
                                    className="d-flex justify-content-center"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setSelectedPopupDate(date)}
                                  >
                                    <div
                                      className={`d-flex justify-content-center align-items-center rounded ${
                                        isSelected
                                          ? "bg-primary text-white"
                                          : "text-dark"
                                      }`}
                                      style={{
                                        width: "32px",
                                        height: "32px",
                                        fontSize: "0.85rem",
                                        fontWeight: isSelected ? "600" : "400",
                                      }}
                                    >
                                      {date.getDate()}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            {/* Popup Footer */}
                            <div className="border-top pt-3">
                              <p
                                className="text-muted mb-2"
                                style={{ fontSize: "0.7rem" }}
                              >
                                *You can choose multiple date
                              </p>
                              <button
                                className="btn btn-primary w-100 py-2 btn-sm fw-bold"
                                onClick={handleApply}
                              >
                                Apply Now
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* --- MAIN HEATMAP GRID --- */}
                    <div className="shadow-sm rounded overflow-hidden border">
                      {/* Weekday Headers */}
                      <div
                        className="d-grid"
                        style={{
                          gridTemplateColumns: "repeat(7, 1fr)",
                          backgroundColor: colors2.header,
                        }}
                      >
                        {["MON", "TUE", "WED", "THE", "FRI", "SAT", "SUN"].map(
                          (day) => (
                            <div
                              key={day}
                              className="text-center py-3 fw-bold text-secondary"
                              style={{
                                fontSize: "0.8rem",
                                letterSpacing: "0.5px",
                              }}
                            >
                              {day}
                            </div>
                          )
                        )}
                      </div>
                      {/* Days */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(7, 1fr)",
                        }}
                      >
                        {generateMainGrid().map((cell, idx) => {
                          const event = getEvent(cell.date);
                          const isCurrent = cell.type === "current";
                          // Styling logic
                          const bgStyle = isCurrent
                            ? { backgroundColor: "#fff" }
                            : {
                                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, ${colors2.stripe} 10px, ${colors2.stripe} 11px)`,
                                color: "#adb5bd",
                              };

                          return (
                            <div
                              key={idx}
                              className="position-relative"
                              style={{
                                minHeight: "120px",
                                borderRight: "1px solid #dee2e6",
                                borderBottom: "1px solid #dee2e6",
                                ...bgStyle,
                              }}
                            >
                              <span
                                style={{
                                  position: "absolute",
                                  top: "10px",
                                  right: "15px",
                                  fontSize: "0.9rem",
                                  fontWeight: cell.dayNum === 1 ? "700" : "500",
                                  color: isCurrent ? "#333" : "#adb5bd",
                                }}
                              >
                                {cell.dayNum}
                              </span>
                              {event && (
                                <div style={getEventStyle(event.type)}>
                                  {event.title}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-30">
                <Card className="shadow border-0 rounded-4 p-3 text-center ">
                  <div>
                    <img
                      src="https://i.pravatar.cc/200?img=11"
                      className=" mb-3 mt-1 p-3 "
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <h5 className="fw-bold fs-4">Mr. Sumit Sharma</h5>
                  <p className="text-secondary">Employee ID : ST65432</p>

                  <div className="text-start  px-3">
                    <p className="fw-semibold text-dark mb-1">E-Mail ID</p>
                    <p className="text-secondary">Sumit.Sharma@DPS.com</p>

                    <p className="fw-semibold text-dark mb-1">Designation</p>
                    <p className="text-secondary">
                      Subject or class Teacher or Coordination
                    </p>
                    <p className="fw-semibold text-dark mb-1">Department</p>
                    <p className="text-secondary ">
                      English / Science / Mathematics etc.
                    </p>

                    <p className="fw-semibold text-dark mb-1">Contact No.</p>
                    <p className="text-secondary">+91 8765 765 765</p>
                  </div>
                </Card>
              </div>
            </div>
          </>
        );

      case "Performace & Feedback":
        const cardStyle = {
          width: "183px",
          height: "106px",
          minWidth: "175px",
        };

        const data = [
          { name: "Jan", value: 68 },
          { name: "Feb", value: 45 },
          { name: "Mar", value: 52 },
          { name: "Apr", value: 90, specialLabel: "Best Teacher Award" },
          { name: "May", value: 72 },
          { name: "Jun", value: 56 },
          { name: "Jul", value: 74 },
          { name: "Aug", value: 40 },
          { name: "Sep", value: 32 },
          { name: "Oct", value: 50 },
          { name: "Nov", value: 30 },
          { name: "Dec", value: 24 },
        ];

        // Custom Label Component for "Best Teacher Award"
        const CustomLabel = (props) => {
          const { x, y, value, index } = props;
          // Only render for the data point that has the specialLabel (April)
          if (data[index].specialLabel) {
            return (
              <g transform={`translate(${x},${y})`}>
                {/* Blue Bubble Background */}
                <path
                  d="M -60 -45 L 60 -45 L 60 -15 L 5 -15 L 0 -5 L -5 -15 L -60 -15 Z"
                  fill="#007bff"
                />
                {/* Text */}
                <text
                  x={0}
                  y={-30}
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="12px"
                  fontWeight="500"
                  dy={4}
                >
                  {data[index].specialLabel}
                </text>
              </g>
            );
          }
          return null;
        };

        // Custom Dot Component
        const CustomDot = (props) => {
          const { cx, cy, stroke, payload } = props;

          if (payload.name === "May") return null;

          return (
            <circle
              cx={cx}
              cy={cy}
              r={5}
              stroke="green"
              strokeWidth={2}
              fill="white"
            />
          );
        };
        const rows = [
          {
            date: "12-May-25",
            note: "Late syllabus update",
            issued: "Vice Principal",
            type: "Memo",
          },
          {
            date: "05-Jun-25",
            note: "Excellent class handling",
            issued: "HOD - Science",
            type: "Praise",
          },
          {
            date: "05-Jun-25",
            note: "Excellent class handling",
            issued: "HOD - Science",
            type: "Praise",
          },
          {
            date: "05-Jun-25",
            note: "Excellent class handling",
            issued: "HOD - Science",
            type: "Praise",
          },
          {
            date: "05-Jun-25",
            note: "Excellent class handling",
            issued: "HOD - Science",
            type: "Praise",
          },
          {
            date: "05-Jun-25",
            note: "Excellent class handling",
            issued: "HOD - Science",
            type: "Praise",
          },
          {
            date: "05-Jun-25",
            note: "Excellent class handling",
            issued: "HOD - Science",
            type: "Praise",
          },
          {
            date: "05-Jun-25",
            note: "Excellent class handling",
            issued: "HOD - Science",
            type: "Praise",
          },
        ];

        const colors = {
          blue: "#4d5bf9",
          teal: "#00ccb1",
          pink: "#ff5da6",
          yellow: "#ffb546",
        };

        const datano = [
          { label: "Subject Expertise", value: "89%", color: colors.blue },
          { label: "Classroom Management", value: "80%", color: colors.teal },
          { label: "Student Engagement", value: "40%", color: colors.pink },
          {
            label: "Timely Submission of Work",
            value: "15%",
            color: colors.yellow,
          },
          { label: "Team Collaboration", value: "15%", color: colors.yellow },
        ];

        // Inline styles for the custom chart
        // We use a conic-gradient to create the donut segments
        const chartStyle = {
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          position: "relative",
          background: `conic-gradient(
      ${colors.teal} 0deg 100deg, 
      ${colors.yellow} 100deg 145deg, 
      ${colors.blue} 145deg 220deg, 
      ${colors.pink} 220deg 360deg
    )`,
        };

        const holeStyle = {
          width: "140px",
          height: "140px",
          backgroundColor: "#fff",
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        };

        return (
          <>
            <div className="d-flex  justify-content-between gap-3 ">
              <div className="container-fluid p-0  ">
                {/* ====== SUMMARY CARDS ====== */}

                <div className="container-fluid bg-light p-0">
                  <div className="d-flex flex-wrap gap-3">
                    {/* --- CARD 1: OVER ALL RATING --- */}
                    <div
                      className="card border-0 shadow-sm rounded-3 p-3"
                      style={cardStyle}
                    >
                      <div className="d-flex justify-content-between align-items-center h-100">
                        <div>
                          <div
                            className="fw-bold text-dark text-nowrap "
                            style={{ fontSize: "13px" }}
                          >
                            Over All Rating
                          </div>
                          <div
                            className="fw-bolder text-dark mt-2"
                            style={{ fontSize: "22px", lineHeight: "1.2" }}
                          >
                            4.5/5
                          </div>
                          <div
                            className="mt-1"
                            style={{
                              width: "38px",
                              height: "3.2px",
                              backgroundColor: "#FFD700",
                            }}
                          ></div>
                        </div>
                        <div
                          className=" ps-3"
                          style={{
                            borderLeft: "2px solid #A1A1A1",
                            height: "43px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <FaStar
                            size={25}
                            color="#FFD700"
                            style={{
                              filter:
                                "drop-shadow(0px 7px 1px rgba(0,0,0,0.2))",
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* --- CARD 2: LAST EVALUATION SCORE --- */}
                    <div
                      className="card border-0 shadow-sm rounded-3 p-3"
                      style={cardStyle}
                    >
                      <div className="d-flex justify-content-between align-items-center h-100">
                        <div>
                          <div
                            className="fw-semibold text-dark text-nowrap"
                            style={{ fontSize: "12px" }}
                          >
                            Last Evaluation Score
                          </div>
                          <div
                            className="fw-bolder text-dark mt-2"
                            style={{ fontSize: "22px", lineHeight: "1.2" }}
                          >
                            89%
                          </div>
                          <div
                            className="text-secondary fw-bold"
                            style={{ fontSize: "11px" }}
                          >
                            (Dec 2025)
                          </div>
                          <div
                            className="mt-1"
                            style={{
                              width: "38px",
                              height: "3px",
                              backgroundColor: "#82C96D",
                            }}
                          ></div>
                        </div>
                        <div
                          className=" ps-3  d-flex flex-column align-items-center"
                          style={{
                            borderLeft: "2px solid #A1A1A1",
                            height: "43px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <FaSchool size={30} color="#82C96D" />
                          <span
                            className="badge mt-2 text-dark p-1 "
                            style={{
                              backgroundColor: "#DFFFD6",
                              color: "#0C7C0C",
                              fontSize: "10px",
                            }}
                          >
                            20% ↑
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* --- CARD 3: STUDENT FEEDBACK --- */}
                    <div
                      className="card border-0 shadow-sm rounded-3 p-3"
                      style={cardStyle}
                    >
                      <div className="d-flex justify-content-between align-items-center h-100">
                        <div>
                          <div
                            className="fw-bold text-dark text-nowrap "
                            style={{ fontSize: "13px" }}
                          >
                            Student Feedback
                          </div>
                          <div
                            className="fw-bolder text-dark mt-2"
                            style={{ fontSize: "22px", lineHeight: "1.2" }}
                          >
                            4.3/5
                          </div>
                          <div
                            className="mt-1"
                            style={{
                              width: "38px",
                              height: "3.2px",
                              backgroundColor: "#FFD700",
                            }}
                          ></div>
                        </div>
                        <div
                          className=" ps-3"
                          style={{
                            borderLeft: "2px solid #A1A1A1",
                            height: "43px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <FaStar
                            size={25}
                            color="#FFD700"
                            style={{
                              filter:
                                "drop-shadow(0px 7px 1px rgba(0,0,0,0.2))",
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* --- CARD 4: RESPONSES --- */}
                    <div
                      className="card border-0 shadow-sm rounded-3 p-2"
                      style={cardStyle}
                    >
                      <div className="d-flex align-items-center h-100">
                        <div className="w-100">
                          <div
                            className="fw-bold text-dark mb-2"
                            style={{ fontSize: "13px" }}
                          >
                            Responses
                          </div>

                          <div className="d-flex align-items-center mb-1 ">
                            <FaUserFriends
                              className="text-secondary me-1"
                              size={14}
                            />
                            <span
                              className="fw-bold text-dark text-nowrap"
                              style={{ fontSize: "13px" }}
                            >
                              125 Student Responses
                            </span>
                          </div>

                          <div className="d-flex align-items-center">
                            <FaUserTie
                              className="text-warning me-1"
                              size={14}
                            />
                            <span
                              className="fw-bold text-dark text-nowrap"
                              style={{ fontSize: "13px" }}
                            >
                              2 Admin Reviews
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* --- CARD 5: ATTENDANCE SCORE --- */}
                    <div
                      className="card border-0 shadow-sm rounded-3 p-3"
                      style={cardStyle}
                    >
                      <div className="d-flex justify-content-between align-items-center h-100">
                        <div>
                          <div
                            className="fw-bold text-dark text-nowrap mb-2"
                            style={{ fontSize: "13px" }}
                          >
                            Attendance Score
                          </div>
                          <div
                            className="fw-bolder text-dark"
                            style={{ fontSize: "24px", lineHeight: "1.2" }}
                          >
                            89%
                          </div>
                          <div
                            className="mt-2"
                            style={{
                              width: "38px",
                              height: "3px",
                              backgroundColor: "#FDC987",
                            }}
                          ></div>
                        </div>
                        <div
                          className=" ps-3"
                          style={{
                            borderLeft: "2px solid #A1A1A1",
                            height: "43px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <FaSchool size={28} color="#FDC987" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container-fluid p-0  mt-3">
                  <div
                    className="card shadow-sm border-0 rounded-3 bg-white mx-auto"
                    style={{ width: "100%", maxWidth: "978px" }}
                  >
                    <div className="card-body p-0 p-md-4">
                      {/* Header Section - Responsive Flex wrap */}
                      <div className="d-flex  flex-wrap justify-content-between align-items-center mb-4 gap-3">
                        <h4 className="m-0 fw-normal text-dark">
                          Evaluation Timeline
                        </h4>

                        <div className="btn-group" role="group">
                          <button
                            type="button"
                            className="btn btn-link text-decoration-none text-muted px-2 px-md-3"
                          >
                            3 Months
                          </button>
                          <button
                            type="button"
                            className="btn btn-link text-decoration-none text-muted px-2 px-md-3"
                          >
                            6 Months
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-primary rounded-pill px-3 px-md-4 py-1"
                            style={{ fontWeight: "500" }}
                          >
                            12 Months
                          </button>
                        </div>
                      </div>

                      {/* Chart Section - Fixed Height, Fluid Width */}
                      <div style={{ width: "100%", height: "358px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart
                            data={data}
                            margin={{
                              top: 40,
                              right: 10,
                              left: -20,
                              bottom: 10,
                            }}
                          >
                            <defs>
                              <linearGradient
                                id="colorValue"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="5%"
                                  stopColor="#e6f2ff"
                                  stopOpacity={0.8}
                                />
                                <stop
                                  offset="95%"
                                  stopColor="#e6f2ff"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                            </defs>

                            <CartesianGrid
                              vertical={false}
                              strokeDasharray="3 3"
                              stroke="#e0e0e0"
                            />

                            <XAxis
                              padding={{ left: 35, right: 35 }}
                              dataKey="name"
                              axisLine={false}
                              tickLine={false}
                              tick={{ fill: "#333", fontSize: 12 }}
                              dy={10}
                              interval="preserveStartEnd" // Helps prevent overlapping text on mobile
                            />

                            <YAxis
                              axisLine={false}
                              tickLine={false}
                              ticks={[0, 20, 40, 60, 80, 100]}
                              tick={{ fill: "#333", fontSize: 12 }}
                            />

                            <Tooltip />

                            <Area
                              type="linear"
                              dataKey="value"
                              stroke="green"
                              strokeWidth={2.5}
                              fillOpacity={1}
                              fill="url(#colorValue)"
                              dot={<CustomDot />}
                            >
                              <LabelList content={<CustomLabel />} />
                            </Area>
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
                <Card className="shadow-sm border-0 p-3 rounded-4 mt-4 ">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-semibold mb-0">Admin Notes & Memos</h5>

                    <div className="d-flex gap-3">
                      <Button variant="light" className="border rounded-3 px-3">
                        <FiFilter size={16} className="me-1" /> Filter
                      </Button>
                      <Button
                        variant="secondary"
                        className="border rounded-3 px-4"
                      >
                        View All
                      </Button>
                    </div>
                  </div>

                  <div className="table-responsive mb-5">
                    <Table hover className="align-middle">
                      <thead>
                        <tr
                          className="text-secondary"
                          style={{ fontSize: "14px" }}
                        >
                          <th>S.N</th>
                          <th>Date</th>
                          <th>Note / Warning</th>
                          <th>Issued By</th>
                          <th>Type</th>

                          <th></th>
                        </tr>
                      </thead>

                      <tbody>
                        {rows.map((r, i) => (
                          <tr key={i} style={{ fontSize: "14px" }}>
                            <td>{i + 1}</td>
                            <td>{r.date}</td>
                            <td className="text-secondary">{r.note}</td>

                            <td className="text-secondary">{r.issued}</td>
                            <td className="text-secondary">{r.type}</td>
                            <td>
                              <BsThreeDotsVertical
                                size={18}
                                className="text-secondary"
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Card>
              </div>
              <div className="w-30  gap-2">
                <div>
                  <Card className="shadow border-0 rounded-4 p-3 text-center ">
                    <div>
                      <img
                        src="https://i.pravatar.cc/200?img=11"
                        className=" mb-3 mt-1 p-3 "
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <h5 className="fw-bold fs-4">Mr. Sumit Sharma</h5>
                    <p className="text-secondary">Employee ID : ST65432</p>

                    <div className="text-start  px-3">
                      <p className="fw-semibold text-dark mb-1">E-Mail ID</p>
                      <p className="text-secondary">Sumit.Sharma@DPS.com</p>

                      <p className="fw-semibold text-dark mb-1">Designation</p>
                      <p className="text-secondary ">
                        Subject or class Teacher or Coordinator
                      </p>
                      <p className="fw-semibold text-dark mb-1">Department</p>
                      <p className="text-secondary">
                        English / Science / Mathematics etc.
                      </p>

                      <p className="fw-semibold text-dark mb-1">Contact No.</p>
                      <p className="text-secondary">+91 8765 765 765</p>
                    </div>
                  </Card>
                </div>

                {/* Card Wrapper */}
                <div
                  className="card border-0 shadow-sm mt-4 "
                  style={{ width: "255px", borderRadius: "15px" }}
                >
                  <div className="card-body">
                    {/* Header */}
                    <h5
                      className="card-title text-center mb-4 text-dark fs-4"
                      style={{ fontWeight: 400 }}
                    >
                      Performance Rating
                    </h5>

                    {/* Donut Chart */}
                    <div className="d-flex justify-content-center mb-5">
                      <div style={chartStyle}>
                        {/* The inner white circle creates the donut look */}
                        <div style={holeStyle}></div>
                      </div>
                    </div>

                    {/* Legend List */}
                    <div className="d-flex flex-column gap-3">
                      {datano.map((item, index) => (
                        <div
                          key={index}
                          className="d-flex justify-content-between align-items-center"
                        >
                          {/* Left: Dot + Label */}
                          <div className="d-flex align-items-center">
                            <span
                              className="rounded-circle d-inline-block me-3"
                              style={{
                                width: "12px",
                                height: "12px",
                                backgroundColor: item.color,
                              }}
                            ></span>
                            <span
                              className="text-secondary fw-normal"
                              style={{ fontSize: "15px" }}
                            >
                              {item.label}
                            </span>
                          </div>

                          {/* Right: Percentage */}
                          <div className="fw-bold text-dark text-opacity-75">
                            {item.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case "Salary & Bank Details":
        return (
          <>
            <div className="d-flex  justify-content-between gap-4 ">
              <div className="w-100">
                <Card className="shadow border-0 rounded-4 p-4 h-100 ">
                  <div>
                    <Card className=" border-0  rounded-4 p-2 ms-2">
                      <h5 className="fw-semibold mb-4 ">Bank Information</h5>{" "}
                      <div className="ms-4">
                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              Bank Account Holder Name
                            </p>
                            <p className="text-secondary">Sumit Sharma</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Account Number</p>
                            <p className="text-secondary">
                              The Salary account number
                            </p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Bank Name</p>
                            <p className="text-secondary">
                              e.g., State Bank of India
                            </p>
                          </div>
                        </div>

                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">IFSC Code</p>
                            <p className="text-secondary">
                              Used for NEFT/RTGS transactions
                            </p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Branch Name</p>
                            <p className="text-secondary">
                              e.g., MG Road , Indore
                            </p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Account Type</p>
                            <p className="text-secondary">Savings / Current</p>
                          </div>
                        </div>

                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              School/College Name
                            </p>
                            <p className="text-secondary">XYZ School</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Experience Years</p>
                            <p className="text-secondary">5 yrs</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">From - To</p>
                            <p className="text-secondary">2015-17</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div>
                    <Card className=" border-0  rounded-4 p-2 ms-2">
                      <h5 className="fw-semibold mb-4 ">
                        Statutory & Payroll IDs
                      </h5>{" "}
                      <div className="ms-4">
                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">PAN Number</p>
                            <p className="text-secondary">For tax filing</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Aadhaar Number</p>
                            <p className="text-secondary">
                              Identity & compliance
                            </p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              UAN(Universal Account Number)
                            </p>
                            <p className="text-secondary">
                              For PF (Provident Fund)
                            </p>
                          </div>
                        </div>

                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              PF Account Number
                            </p>
                            <p className="text-secondary">
                              If enrolled in PF system
                            </p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Tax Regime</p>
                            <p className="text-secondary">
                              Old Regime / New Regime selection
                            </p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">TDS Applicable</p>
                            <p className="text-secondary">
                              Yes/No, with % deduction details if yes
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div>
                    <Card className=" border-0  rounded-4 p-2 ms-2">
                      <h5 className="fw-semibold mb-4 ">Salary-Related Info</h5>{" "}
                      <div className="ms-4">
                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Monthly Salary</p>
                            <p className="text-secondary">
                              Fixed or CTC breakdown
                            </p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Salary Component</p>
                            <p className="text-secondary">
                              Basic, HRA , Transport, Special Allowances,etc.
                            </p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Deductions</p>
                            <p className="text-secondary">
                              PF, TDS, Loan EMI, etc.
                            </p>
                          </div>
                        </div>

                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Pay Frequency</p>
                            <p className="text-secondary">
                              Monthly / Bi-weekly
                            </p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Last Paid On</p>
                            <p className="text-secondary">
                              Last salary processed date
                            </p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View
                              Payslip &nbsp;
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                              <MdOutlineDownload
                                size={25}
                                className=" cursor-pointer"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Card>
              </div>
              <div className="w-30">
                <Card className="shadow border-0 rounded-4 p-3 text-center ">
                  <div>
                    <img
                      src="https://i.pravatar.cc/200?img=11"
                      className=" mb-3 mt-1 p-3 "
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <h5 className="fw-bold fs-4">Mr. Sumit Sharma</h5>
                  <p className="text-secondary">Employee ID : ST65432</p>

                  <div className="text-start  px-3">
                    <p className="fw-semibold text-dark mb-1">E-Mail ID</p>
                    <p className="text-secondary">Sumit.Sharma@DPS.com</p>

                    <p className="fw-semibold text-dark mb-1">Designation</p>
                    <p className="text-secondary">
                      Subject or class Teacher or Coordination
                    </p>
                    <p className="fw-semibold text-dark mb-1">Department</p>
                    <p className="text-secondary">
                      English / Science / Mathematics etc.
                    </p>

                    <p className="fw-semibold text-dark mb-1">Contact No.</p>
                    <p className="text-secondary">+91 8765 765 765</p>
                  </div>
                </Card>
              </div>
            </div>
          </>
        );

      case "Uploaded Documents":
        const documents = [
          "Birth Certificate.pdf",
          "Aadhar Card.pdf",
          "Pan Card.pdf",
          "pdf_file.pdf",
          "pdf_file.pdf",
          "pdf_file.pdf",
          "pdf_file.pdf",
          "pdf_file.pdf",
          "pdf_file.pdf",
        ];
        return (
          <>
            <div className="d-flex  justify-content-between gap-4 ">
              <div className="w-100 ">
                <Card className="shadow border-0 rounded-4 p-5  ">
                  <h5 className="fw-semibold mb-4">Documents</h5>

                  <p className="fw-semibold mb-2">Files</p>

                  <div className="d-flex flex-column gap-3">
                    {documents.map((file, index) => (
                      <div
                        key={index}
                        className="d-flex justify-content-between align-items-center p-3 rounded-4"
                        style={{
                          border: "2px dashed #D6D6D6",
                          cursor: "pointer",
                        }}
                      >
                        {/* LEFT SIDE: FILE ICON + NAME */}
                        <div className="d-flex align-items-center gap-2">
                          <IoDocumentOutline
                            size={18}
                            className="text-secondary"
                          />

                          <span className="  text-secondary">{file}</span>
                        </div>

                        {/* RIGHT SIDE: DOWNLOAD + DELETE */}
                        <div className="d-flex align-items-center gap-3">
                          <MdOutlineDownload
                            size={18}
                            className="text-secondary cursor-pointer"
                          />

                          <MdDelete
                            size={18}
                            className="text-secondary cursor-pointer"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
              <div className="w-30">
                <Card className="shadow border-0 rounded-4 p-3 text-center ">
                  <div>
                    <img
                      src="https://i.pravatar.cc/200?img=11"
                      className=" mb-3 mt-1 p-3 "
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <h5 className="fw-bold fs-4">Mr. Sumit Sharma</h5>
                  <p className="text-secondary">Employee ID : ST65432</p>

                  <div className="text-start  px-3">
                    <p className="fw-semibold text-dark mb-1">E-Mail ID</p>
                    <p className="text-secondary">Sumit.Sharma@DPS.com</p>

                    <p className="fw-semibold text-dark mb-1">Designation</p>
                    <p className="text-secondary">
                      Subject or class Teacher or Coordination
                    </p>
                    <p className="fw-semibold text-dark mb-1">Department</p>
                    <p className="text-secondary">
                      English / Science / Mathematics etc.
                    </p>

                    <p className="fw-semibold text-dark mb-1">Contact No.</p>
                    <p className="text-secondary">+91 8765 765 765</p>
                  </div>
                </Card>
              </div>
            </div>
          </>
        );

      case "Loging & Security":
        const permissions = [
          {
            id: 1,
            module: "Students Attendance",
            create: false,
            view: false,
            update: false,
            delete: false,
            approve: false,
          },
          {
            id: 2,
            module: "Your Attendance",
            create: true,
            view: true,
            update: true,
            delete: true,
            approve: true,
          },
          {
            id: 3,
            module: "Homework",
            create: true,
            view: true,
            update: true,
            delete: false,
            approve: false,
          },
          {
            id: 4,
            module: "Exam Module",
            create: true,
            view: false,
            update: false,
            delete: false,
            approve: false,
          },
          {
            id: 5,
            module: "Timetable",
            create: true,
            view: false,
            update: false,
            delete: false,
            approve: false,
          },
          {
            id: 6,
            module: "Assign Task to Staff",
            create: true,
            view: false,
            update: false,
            delete: false,
            approve: false,
          },
          {
            id: 7,
            module: "Assign Task to Teacher",
            create: true,
            view: false,
            update: false,
            delete: false,
            approve: false,
          },
          {
            id: 8,
            module: "Library Module",
            create: false,
            view: false,
            update: false,
            delete: false,
            approve: false,
          },
          {
            id: 9,
            module: "Dormitory Module",
            create: false,
            view: false,
            update: false,
            delete: false,
            approve: false,
          },
          {
            id: 10,
            module: "Fees",
            create: true,
            view: false,
            update: false,
            delete: false,
            approve: false,
          },
          {
            id: 11,
            module: "Transport Module",
            create: true,
            view: false,
            update: false,
            delete: false,
            approve: false,
          },
          {
            id: 12,
            module: "Fees",
            create: true,
            view: false,
            update: false,
            delete: false,
            approve: false,
          },
        ];
        return (
          <>
            {/* MAIN INFORMATION */}
            <div className="d-flex  justify-content-between gap-4 ">
              <div className="w-100 h-100">
                <div className="container bg-white p-4 rounded-4 shadow-sm ">
                  {/* ---------- LOGIN & ACCESS ---------- */}
                  <h4 className="fw-semibold mb-3">Login & Access</h4>

                  <div className="row mb-2">
                    <div className="col-md-4">
                      <p className="fw-semibold mb-1">Login ID / Username</p>
                      <p className="text-secondary fw-semibold">
                        For teacher portal access
                      </p>
                    </div>

                    <div className="col-md-4">
                      <p className="fw-semibold mb-1">Password</p>
                      <p className="text-secondary fw-semibold">**********</p>
                    </div>

                    <div className="col-md-4">
                      <p className="fw-semibold mb-1">Last Login</p>
                      <p className="text-secondary fw-semibold">Timestamp</p>
                    </div>
                  </div>

                  {/* ---------- ROLES & PERMISSIONS ---------- */}
                  <h4 className=" mb-3">Roles & Permissions</h4>

                  <Table hover responsive className="align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>S.N.</th>
                        <th>Module Name</th>
                        <th>Create</th>
                        <th>View</th>
                        <th>Update</th>
                        <th>Delete</th>
                        <th>Approve</th>
                      </tr>
                    </thead>

                    <tbody>
                      {permissions.map((item, i) => (
                        <tr key={i}>
                          <td>{item.id}</td>
                          <td>{item.module}</td>

                          <td>
                            <Form.Check checked={item.create} />
                          </td>
                          <td>
                            <Form.Check checked={item.view} />
                          </td>
                          <td>
                            <Form.Check checked={item.update} />
                          </td>
                          <td>
                            <Form.Check checked={item.delete} />
                          </td>
                          <td>
                            <Form.Check checked={item.approve} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="w-30">
                <Card className="shadow border-0 rounded-4 p-3 text-center ">
                  <div>
                    <img
                      src="https://i.pravatar.cc/200?img=11"
                      className=" mb-3 mt-1 p-3 "
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <h5 className="fw-bold fs-4">Mr. Sumit Sharma</h5>
                  <p className="text-secondary">Employee ID : ST65432</p>

                  <div className="text-start  px-3">
                    <p className="fw-semibold text-dark mb-1">E-Mail ID</p>
                    <p className="text-secondary">Sumit.Sharma@DPS.com</p>

                    <p className="fw-semibold text-dark mb-1">Designation</p>
                    <p className="text-secondary">
                      Subject or class Teacher or Coordination
                    </p>
                    <p className="fw-semibold text-dark mb-1">Department</p>
                    <p className="text-secondary">
                      English / Science / Mathematics etc.
                    </p>

                    <p className="fw-semibold text-dark mb-1">Contact No.</p>
                    <p className="text-secondary">+91 8765 765 765</p>
                  </div>
                </Card>
              </div>
            </div>
          </>
        );

      default:
        return (
          <div className="p-3">
            <h5 className="fw-semibold">{selectedSection}</h5>
            <p className="text-secondary">
              Content for {selectedSection} goes here.
            </p>
          </div>
        );
    }
  };

  const sidebarItems = [
    {
      title: "Basic & Contact Details",
      icon: <RiGraduationCapFill />,
      activeIcon: <FaCircleUser />,
    },
    {
      title: "Employment Details",
      icon: <RiGraduationCapFill />,
      activeIcon: <FaCircleUser />,
    },
    {
      title: "Academic Details",
      icon: <RiGraduationCapFill />,
      activeIcon: <FaCircleUser />,
    },
    {
      title: "Attendance & Leaves",
      icon: <RiGraduationCapFill />,
      activeIcon: <FaCircleUser />,
    },
    {
      title: "Performace & Feedback",
      icon: <RiGraduationCapFill />,
      activeIcon: <FaCircleUser />,
    },
    {
      title: "Salary & Bank Details",
      icon: <RiGraduationCapFill />,
      activeIcon: <FaCircleUser />,
    },
    {
      title: "Uploaded Documents",
      icon: <RiGraduationCapFill />,
      activeIcon: <FaCircleUser />,
    },
    {
      title: "Loging & Security",
      icon: <RiGraduationCapFill />,
      activeIcon: <FaCircleUser />,
    },
  ];

  return (
    <div
      className="container-fluid p-3"
      style={{
        background: "#f2f7fa",
        minHeight: "100vh",
        fontFamily: "Inter",
        fontSize: "14px",
      }}
    >
      <div className="row g-4">
        {/* LEFT SIDEBAR */}
        <div className="col-12 col-md-3 col-lg-2 left-col">
          <Card
            className="shadow border-0 rounded-4 p-3 h-100"
            style={{ position: "relative" }}
          >
            {/* --- THREE DOT MENU BUTTON --- */}
            <div
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "#F3F4F6",
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <BsThreeDotsVertical size={20} className="text-secondary" />
            </div>
            <div className="text-center mb-2">
              <div style={{ position: "relative", display: "inline-block" }}>
                <img
                  src="https://i.pravatar.cc/200?img=11"
                  alt="profile"
                  className="rounded-circle mb-3 mt-3"
                  width={95}
                  height={95}
                />
                {/* --- CAMERA ICON (BOTTOM RIGHT OF IMAGE) --- */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    right: "8px",
                    backgroundColor: "white",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
                    cursor: "pointer",
                  }}
                >
                  <FaCamera size={14} className="text-secondary" />
                </div>
              </div>
              <h5 className="fw-bold mb-0">Mr. Sumit</h5>
              <p className="text-secondary mb-0 small">Sumit.sharma@DSP.com</p>
              <p style={{ color: "#A1A1A1" }} className="small">
                Last update: 12-11-2020
              </p>
            </div>

            <ListGroup variant="flush" className="mt-3">
              {sidebarItems.map((item, idx) => {
                const isActive = selectedSection === item.title;

                return (
                  <ListGroup.Item
                    key={idx}
                    action
                    onClick={() => setSelectedSection(item.title)}
                    className={`d-flex align-items-center gap-3 p-3 rounded border-0 
          ${isActive ? "active bg-white shadow" : ""}`}
                    style={{ cursor: "pointer" }}
                  >
                    {/* ICON BOX */}
                    <div
                      className={`fs-4 rounded d-flex justify-content-center align-items-center 
            ${isActive ? "bg-primary text-white" : "bg-light text-secondary"}`}
                      style={{ width: "42px", height: "42px" }}
                    >
                      {/* ICON CHANGES HERE */}
                      {isActive ? item.activeIcon : item.icon}
                    </div>

                    {/* TITLE */}
                    <span
                      className={`${
                        isActive ? "fw-semibold text-dark" : "text-secondary"
                      }`}
                    >
                      {item.title}
                    </span>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Card>
        </div>
        {/* MAIN CONTENT (CHANGES) */}
        <div className="col-12 col-md-9 col-lg-10 right-col">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
