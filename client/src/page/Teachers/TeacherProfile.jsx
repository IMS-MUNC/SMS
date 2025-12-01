import { useState } from "react";
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
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Smile } from "lucide-react";
import { Form } from "react-bootstrap";

const TeacherProfile = () => {
  const [selectedSection, setSelectedSection] = useState("Basic & Contact Details");

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
                  <div >
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
                            <p className="fw-semibold mb-0">
                              Age
                            </p>
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
                            <p className="fw-semibold mb-0">Current Residential Address</p>
                            <p className="text-secondary">House No.327</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              Area
                            </p>
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
                            <p className="fw-semibold mb-0">
                              Country
                            </p>
                            <p className="text-secondary">India</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Pincode</p>
                            <p className="text-secondary">254254</p>
                          </div>
                        </div>
                        <div className="row mb-0">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Permanent Residential Address(if Different)</p>
                            <p className="text-secondary">House No.327</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              Area
                            </p>
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
                            <p className="fw-semibold mb-0">
                              Country
                            </p>
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

                    <p className="fw-semibold text-dark mb-1">
                      Designation
                    </p>
                    <p className="text-secondary">Subject or class Teacher or Coordination</p>
                    <p className="fw-semibold text-dark mb-1">
                      Department
                    </p>
                    <p className="text-secondary">English / Science / Mathematics etc.</p>

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
                  <div >
                    <Card className=" border-0  rounded-4 p-2 ms-2">
                      <h5 className="fw-semibold mb-4 ">
                        Employment Details
                      </h5>{" "}
                      <div className="ms-4">
                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Joining Date</p>
                            <p className="text-secondary">Date of joining school</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Employment Type</p>
                            <p className="text-secondary">Full-Time / Part-Time / Contractual</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Reporting To</p>
                            <p className="text-secondary">Principal/HOD</p>
                          </div>
                        </div>

                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Subject(s) Assigned</p>
                            <p className="text-secondary">e.g.,Physics,Maths</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Class Teacher Of</p>
                            <p className="text-secondary">e.g., Class 10A</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Assigned Classes</p>
                            <p className="text-secondary">List of classes & subjects handled</p>
                          </div>
                        </div>

                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Exam Duties</p>
                            <p className="text-secondary">Invigilation/Paper Setting</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              Assigned Events
                            </p>
                            <p className="text-secondary">Annual Day, Science Fair , etc.</p>
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

                    <p className="fw-semibold text-dark mb-1">
                      Designation
                    </p>
                    <p className="text-secondary">Subject or class Teacher or Coordination</p>
                    <p className="fw-semibold text-dark mb-1">
                      Department
                    </p>
                    <p className="text-secondary">English / Science / Mathematics etc.</p>

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
                  <div >
                    <Card className=" border-0  rounded-4 p-2 ms-2">
                      <h5 className="fw-semibold mb-4 ">
                        Academic Details
                      </h5>{" "}
                      <div className="ms-4">
                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Total Working Experience</p>
                            <p className="text-secondary">10 Yrs</p>
                          </div>

                        </div>

                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">School/College Name</p>
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
                            <p className="fw-semibold mb-0">School/College Name</p>
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
                            <p className="text-secondary">e.g.,B.Ed,M.Sc,Ph.D</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              University
                            </p>
                            <p className="text-secondary">ABC University</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              Year
                            </p>
                            <p className="text-secondary">2015-17</p>
                          </div>

                        </div>
                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Masters</p>
                            <p className="text-secondary">e.g.,B.Ed,M.Sc,Ph.D</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              University
                            </p>
                            <p className="text-secondary">ABC University</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              Year
                            </p>
                            <p className="text-secondary">2015-17</p>
                          </div>

                        </div>
                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Bachelors</p>
                            <p className="text-secondary">e.g.,B.Ed,M.Sc,Ph.D</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              University
                            </p>
                            <p className="text-secondary">ABC University</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              Year
                            </p>
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

                    <p className="fw-semibold text-dark mb-1">
                      Designation
                    </p>
                    <p className="text-secondary ">Subject or class Teacher or Coordinator</p>
                    <p className="fw-semibold text-dark mb-1">
                      Department
                    </p>
                    <p className="text-secondary">English / Science / Mathematics etc.</p>

                    <p className="fw-semibold text-dark mb-1">Contact No.</p>
                    <p className="text-secondary">+91 8765 765 765</p>
                  </div>
                </Card>
              </div>
            </div>
          </>
        );

      case "Attendance & Leaves":


        return (
          <>
            <div className="d-flex  justify-content-between gap-3 ">
              <div className="container-fluid mt-3">
                {/* ====== SUMMARY CARDS ====== */}
                <div className="d-flex gap-3 flex-wrap">

                  {/* CARD TEMPLATE */}
                  <div
                    className="shadow-sm bg-white"
                    style={{
                      width: "182px",
                      padding: "14px 16px",
                      borderRadius: "16px",
                    }}
                  >
                    <p className="text-secondary mb-1" style={{ fontSize: "12px" }}>
                      Over All Rating
                    </p>

                    <div className="d-flex justify-content-between align-items-start">
                      <h4 className="fw-bold mb-0" style={{ fontSize: "20px", lineHeight: "22px" }}>
                        4.5<span className="text-secondary" style={{ fontSize: "14px" }}>/5</span>
                        <div
                          style={{
                            width: "40px",
                            height: "3px",
                            backgroundColor: "#F6C445",
                            borderRadius: "30px",
                            marginTop: "6px",
                          }}
                        ></div>
                      </h4>

                      <i
                        className="bi bi-star-fill"
                        style={{ fontSize: "22px", color: "#FFC107", marginTop: "2px" }}
                      ></i>
                    </div>
                  </div>


                  {/* LAST EVALUATION SCORE */}
                  <div
                    className="shadow-sm bg-white"
                    style={{ width: "182px", padding: "14px 16px", borderRadius: "16px" }}
                  >
                    <p className="text-secondary mb-1" style={{ fontSize: "12px" }}>
                      Last Evaluation Score
                    </p>

                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h4 className="fw-bold mb-0" style={{ fontSize: "20px" }}>89%</h4>
                        <p className="text-secondary mb-1" style={{ fontSize: "11px" }}>(Dec 2025)</p>

                        <div
                          style={{
                            width: "40px",
                            height: "3px",
                            backgroundColor: "#7ED957",
                            borderRadius: "30px",
                            marginTop: "-2px",
                          }}
                        ></div>
                      </div>

                      <div className="text-end">
                        <i className="bi bi-building" style={{ fontSize: "24px", color: "#41B34D" }}></i>

                        <span
                          className="px-2 py-0 rounded-4 d-block mt-1 text-success"
                          style={{
                            backgroundColor: "#E6FFE8",
                            fontSize: "9px",
                            fontWeight: 600,
                          }}
                        >
                          20% ↑
                        </span>
                      </div>
                    </div>
                  </div>


                  {/* STUDENT FEEDBACK */}
                  <div
                    className="shadow-sm bg-white"
                    style={{ width: "182px", padding: "14px 16px", borderRadius: "16px" }}
                  >
                    <p className="text-secondary mb-1" style={{ fontSize: "12px" }}>
                      Student Feedback
                    </p>

                    <div className="d-flex justify-content-between align-items-start">
                      <h4 className="fw-bold mb-0" style={{ fontSize: "20px" }}>
                        4.3<span className="text-secondary" style={{ fontSize: "14px" }}> /5</span>
                        <div
                          style={{
                            width: "40px",
                            height: "3px",
                            backgroundColor: "#FFD85A",
                            borderRadius: "30px",
                            marginTop: "6px",
                          }}
                        ></div>
                      </h4>

                      <i className="bi bi-star-fill" style={{ fontSize: "22px", color: "#FFC107" }}></i>
                    </div>
                  </div>


                  {/* RESPONSES */}
                  <div
                    className="shadow-sm bg-white"
                    style={{ width: "182px", padding: "14px 16px", borderRadius: "16px" }}
                  >
                    <p className="text-secondary mb-1" style={{ fontSize: "12px" }}>
                      Responses
                    </p>

                    <p className="fw-semibold mb-0" style={{ fontSize: "13px" }}>
                      <i className="bi bi-people-fill text-primary me-1"></i>
                      125 Student Responses
                    </p>

                    <p className="fw-semibold mt-1" style={{ fontSize: "13px" }}>
                      <i className="bi bi-person-badge-fill text-warning me-1"></i>
                      2 Admin Reviews
                    </p>
                  </div>


                  {/* ATTENDANCE SCORE */}
                  <div
                    className="shadow-sm bg-white"
                    style={{ width: "182px", padding: "14px 16px", borderRadius: "16px" }}
                  >
                    <p className="text-secondary mb-1" style={{ fontSize: "12px" }}>
                      Attendance Score
                    </p>

                    <div className="d-flex justify-content-between align-items-start">
                      <h4 className="fw-bold mb-0" style={{ fontSize: "20px" }}>
                        89%
                        <div
                          style={{
                            width: "40px",
                            height: "3px",
                            backgroundColor: "#F2C88E",
                            borderRadius: "30px",
                            marginTop: "6px",
                          }}
                        ></div>
                      </h4>

                      <i className="bi bi-bank2" style={{ fontSize: "24px", color: "#E8A948" }}></i>
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

                    <p className="fw-semibold text-dark mb-1">
                      Designation
                    </p>
                    <p className="text-secondary ">Subject or class Teacher or Coordinator</p>
                    <p className="fw-semibold text-dark mb-1">
                      Department
                    </p>
                    <p className="text-secondary">English / Science / Mathematics etc.</p>

                    <p className="fw-semibold text-dark mb-1">Contact No.</p>
                    <p className="text-secondary">+91 8765 765 765</p>
                  </div>
                </Card>
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
                  <div >
                    <Card className=" border-0  rounded-4 p-2 ms-2">
                      <h5 className="fw-semibold mb-4 ">
                        Bank Information
                      </h5>{" "}
                      <div className="ms-4">
                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Bank Account Holder Name</p>
                            <p className="text-secondary">Sumit Sharma</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Account Number</p>
                            <p className="text-secondary">The Salary account number</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Bank Name</p>
                            <p className="text-secondary">e.g., State Bank of India</p>
                          </div>
                        </div>

                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">IFSC Code</p>
                            <p className="text-secondary">Used for NEFT/RTGS transactions</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Branch Name</p>
                            <p className="text-secondary">e.g., MG Road , Indore</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Account Type</p>
                            <p className="text-secondary">Savings / Current</p>
                          </div>
                        </div>

                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">School/College Name</p>
                            <p className="text-secondary">XYZ School</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              Experience Years
                            </p>
                            <p className="text-secondary">5 yrs</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">
                              From - To
                            </p>
                            <p className="text-secondary">2015-17</p>
                          </div>

                        </div>
                      </div>
                    </Card>
                  </div>
                  <div >
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
                            <p className="text-secondary">Identity & compliance</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">UAN(Universal Account Number)</p>
                            <p className="text-secondary">For PF (Provident Fund)</p>
                          </div>
                        </div>

                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">PF Account Number</p>
                            <p className="text-secondary">If enrolled in PF system</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Tax Regime</p>
                            <p className="text-secondary">Old Regime / New Regime selection</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">TDS Applicable</p>
                            <p className="text-secondary">Yes/No, with % deduction details if yes</p>
                          </div>
                        </div>


                      </div>
                    </Card>
                  </div>
                  <div >
                    <Card className=" border-0  rounded-4 p-2 ms-2">
                      <h5 className="fw-semibold mb-4 ">
                        Salary-Related Info
                      </h5>{" "}
                      <div className="ms-4">
                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Monthly Salary</p>
                            <p className="text-secondary">Fixed or CTC breakdown</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Salary Component</p>
                            <p className="text-secondary">Basic, HRA , Transport, Special Allowances,etc.</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Deductions</p>
                            <p className="text-secondary">PF, TDS, Loan EMI, etc.</p>
                          </div>
                        </div>

                        <div className="row mb-1">
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Pay Frequency</p>
                            <p className="text-secondary">Monthly / Bi-weekly</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">Last Paid On</p>
                            <p className="text-secondary">Last salary processed date</p>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-4">
                            <p className="fw-semibold mb-0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View Payslip &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <MdOutlineDownload size={25} className=" cursor-pointer" /></p>
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

                    <p className="fw-semibold text-dark mb-1">
                      Designation
                    </p>
                    <p className="text-secondary">Subject or class Teacher or Coordination</p>
                    <p className="fw-semibold text-dark mb-1">
                      Department
                    </p>
                    <p className="text-secondary">English / Science / Mathematics etc.</p>

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

                    <p className="fw-semibold text-dark mb-1">
                      Designation
                    </p>
                    <p className="text-secondary">Subject or class Teacher or Coordination</p>
                    <p className="fw-semibold text-dark mb-1">
                      Department
                    </p>
                    <p className="text-secondary">English / Science / Mathematics etc.</p>

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
          { id: 1, module: "Students Attendance", create: false, view: false, update: false, delete: false, approve: false },
          { id: 2, module: "Your Attendance", create: true, view: true, update: true, delete: true, approve: true },
          { id: 3, module: "Homework", create: true, view: true, update: true, delete: false, approve: false },
          { id: 4, module: "Exam Module", create: true, view: false, update: false, delete: false, approve: false },
          { id: 5, module: "Timetable", create: true, view: false, update: false, delete: false, approve: false },
          { id: 6, module: "Assign Task to Staff", create: true, view: false, update: false, delete: false, approve: false },
          { id: 7, module: "Assign Task to Teacher", create: true, view: false, update: false, delete: false, approve: false },
          { id: 8, module: "Library Module", create: false, view: false, update: false, delete: false, approve: false },
          { id: 9, module: "Dormitory Module", create: false, view: false, update: false, delete: false, approve: false },
          { id: 10, module: "Fees", create: true, view: false, update: false, delete: false, approve: false },
          { id: 11, module: "Transport Module", create: true, view: false, update: false, delete: false, approve: false },
          { id: 12, module: "Fees", create: true, view: false, update: false, delete: false, approve: false },
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
                      <p className="text-secondary fw-semibold">For teacher portal access</p>
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

                          <td><Form.Check checked={item.create} /></td>
                          <td><Form.Check checked={item.view} /></td>
                          <td><Form.Check checked={item.update} /></td>
                          <td><Form.Check checked={item.delete} /></td>
                          <td><Form.Check checked={item.approve} /></td>
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

                    <p className="fw-semibold text-dark mb-1">
                      Designation
                    </p>
                    <p className="text-secondary">Subject or class Teacher or Coordination</p>
                    <p className="fw-semibold text-dark mb-1">
                      Department
                    </p>
                    <p className="text-secondary">English / Science / Mathematics etc.</p>

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
      style={{ background: "#f2f7fa", minHeight: "100vh" }}
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
                      className={`${isActive ? "fw-semibold text-dark" : "text-secondary"
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
