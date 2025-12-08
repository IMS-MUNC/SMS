import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Badge, Button, Form, Card } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import PSALMS from "../../assets/images/PSALMS.jpg";
import book from "../../assets/images/101 ESSAYS.jpg";
import harry from "../../assets/images/Harry-Potter.jpg";
import harryP from "../../assets/images/Prison-Of-Azkaban.jpg";
import nagraj from "../../assets/images/nag-raj.jpg";
import Kinfolk from "../../assets/images/KINFOLK.jpg";
import twotower from "../../assets/images/Two-Towers.jpg";
import innvations from "../../assets/images/How-Innvations-Works.jpg";
import king from "../../assets/images/Black-Thin-King.jpg";
import blank from "../../assets/images/Blank-Book.jpg";
import order from "../../assets/images/Order-Of-Pheonix.jpg";
import psy from "../../assets/images/PSYCHOLOGY.jpg";
import one from "../../assets/images/Onepiece.jpg";
import porter from "../../assets/images/Harry-Potter-Sorcerer's Stone.jpg";
import hope from "../../assets/images/HOPE.jpg";
import four from "../../assets/images/FourBOOKS.jpg";
import books from "../../assets/images/books.png";
import yt from "../../assets/images/yt.png";
import letter from "../../assets/images/letter.png";
import eva from "../../assets/images/eva.jpg";
import lady from "../../assets/images/lady.jpg";
import girl from "../../assets/images/girl.jpg";
import { FaBookReader } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { TfiFilter } from "react-icons/tfi";
import { LuCloudDownload } from "react-icons/lu";
import { TiPlus } from "react-icons/ti";
import { PiDotsThreeVertical } from "react-icons/pi";

import Calendar from "react-calendar";

const bookCard = [
  {
    status: "Not Available",
    img: PSALMS,
    name: "PSALMS",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Available",
    img: harry,
    name: "Harry-Potter",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Available",
    img: harryP,
    name: "Prison Of Azkaban",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Not Available",
    img: book,
    name: "101 ESSAYS",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Available",
    img: nagraj,
    name: "Nagraj Comics",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Available",
    img: Kinfolk,
    name: "KINFOLK",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Not Available",
    img: twotower,
    name: "Two Towers",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Available",
    img: innvations,
    name: "How Innvations Works",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Not Available",
    img: king,
    name: "Black Thin King",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Not Available",
    img: blank,
    name: "Empty",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Available",
    img: order,
    name: "Order Of Pheonix",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Not Available",
    img: psy,
    name: "PSYCHOLOGY",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Available",
    img: one,
    name: "One Piece",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Available",
    img: porter,
    name: "Harry Potter Sorcerer's Stone",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Available",
    img: four,
    name: "Game Of Thrones",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
  {
    status: "Available",
    img: hope,
    name: "HOPE",
    available: 10,
    totalCopies: 20,
    issuedCopies: 10,
  },
];

const resourceData = [
  {
    img: books,
    title: "Books-2000",
    color: "#FEF4F0",
  },
  {
    img: yt,
    title: "E-Books",
    color: "#d7fbed",
  },
  {
    img: letter,
    title: "Kindle-30",
    color: "#e2d8fc",
  },
];

const activities = [
  {
    img: eva,
    message:
      "Please ensure the monthly attendance report is accurate before the April 30th deadline",
    date: "12 july 2025",
    class: "10th B",
  },
  {
    img: girl,
    message: "All staff are required to update their timesheets by Friday.",
    date: "10 oct 2024",
    class: "9th A",
  },
  {
    img: lady,
    message: "Meeting scheduled for 2:00 PM regarding new project allocation.",
    date: "5 may 2024",
    class: "11th C",
  },
];

const students = [
  {
    img: eva,
    name: "Eva Green",
    time: "10:30 AM",
    des: "Joined as a new student in 10th grade.",
  },
  {
    img: girl,
    name: "Sophia Brown",
    time: "11:00 AM",
    des: "Enrolled in advanced mathematics course.",
  },
];

const libraryIssuedBooks = [
  {
    id: 1,
    issuedDate: "2025-01-05",
    bookName: "Atomic Habits",
    studentName: "Rahul Kumar",
    classSection: "10/A",
    dueDate: "2025-01-15",
    returnDate: "",
    status: "Issued",
  },
  {
    id: 2,
    issuedDate: "2025-01-07",
    bookName: "The Alchemist",
    studentName: "Priya Singh",
    classSection: "9/B",
    dueDate: "2025-01-17",
    returnDate: "2025-01-16",
    status: "Returned",
  },
  {
    id: 3,
    issuedDate: "2025-01-10",
    bookName: "Rich Dad Poor Dad",
    studentName: "Aman Verma",
    classSection: "11/C",
    dueDate: "2025-01-20",
    returnDate: "",
    status: "Issued",
  },
  {
    id: 4,
    issuedDate: "2025-01-12",
    bookName: "Computer Basics",
    studentName: "Sneha Gupta",
    classSection: "8/A",
    dueDate: "2025-01-22",
    returnDate: "",
    status: "Returned",
  },
  {
    id: 5,
    issuedDate: "2025-01-14",
    bookName: "Science Explorer",
    studentName: "Vikas Sharma",
    classSection: "7/C",
    dueDate: "2025-01-24",
    returnDate: "2025-01-23",
    status: "Returned",
  },
];

const statusColors = {
  Returned: { bg: "#DBFFDD", color: "#4CAF50" },
  // Pending: { bg: "#FDECEC", color: "#911808" },
  // Overdue: { bg: "#FF9999", color: "#911808" },
  Issued: { bg: "#FFA500", color: "#FFF1D7" },
};


function BookOverview() {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <div className="d-flex justify-content-between p-4 align-items-center">
        <h3>Books Overview</h3>
        <button className="btn bg-primary p-2 text-white border-rounded">
          <FaPlus className="text-white" /> &nbsp; Add
        </button>
      </div>
      {/* <---------------------------------------------- Books-Slider ------------------------------------------------> */}
      <div className="book-slider">
        {bookCard.map((book, idx) => (
          <div
            key={idx}
            className="book-card p-4 rounded bg-white"
            style={{ width: "260px" }}
          >
            {/* Image + Status */}
            <div
              className="d-flex justify-content-center"
              style={{ position: "relative" }}
            >
              <div className="rounded">
                <img src={book.img} alt="" className="books-slider" />
              </div>

              <div
                style={{
                  position: "absolute",
                  left: "130px",
                  top: "195px",
                  backgroundColor: "#eceaeaec",
                  width: "75px",
                }}
                className={`rounded shadow-sm d-flex justify-content-center px-2 py-1 ${
                  book.status === "Available" ? "text-success" : "text-danger"
                }`}
              >
                <span style={{ fontSize: "9px", fontWeight: "600" }}>
                  {book.status}
                </span>
              </div>
            </div>

            {/* Title */}
            <div className="mt-5 text-center">
              <h5>{book.name}</h5>
            </div>

            {/* Copies */}
            <div className="mt-1">
              <div className="d-flex justify-content-between book-text">
                <label>Total Copies</label>
                <span>{book.totalCopies}</span>
              </div>

              <div className="d-flex justify-content-between mt-1 book-text">
                <label>Issued Copies</label>
                <span>{book.issuedCopies}</span>
              </div>

              <div className="d-flex justify-content-between mt-1 book-text">
                <label>Available Copies</label>
                <span>{book.totalCopies - book.issuedCopies}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-5">
              <div className="d-flex gap-3">
                <button className="library-btn btn btn-outline-secondary">
                  View Details
                </button>

                <button className="history-btn btn">View Issued History</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="library-overview mt-3">
        <div className="library-overview-table">
          <div className="d-flex justify-content-evenly gap-4 ">
            <span
              style={{ color: "#717376", fontWeight: "400", fontSize: "20px" }}
            >
              A &nbsp; B &nbsp; C &nbsp; D &nbsp; E &nbsp; F &nbsp; G &nbsp; H
              &nbsp; I &nbsp; J &nbsp; K &nbsp; L &nbsp; M &nbsp; N &nbsp; O
              &nbsp; P &nbsp; Q &nbsp; R &nbsp; S &nbsp; T &nbsp; U &nbsp; V
              &nbsp; W &nbsp; X &nbsp; Y &nbsp; Z
            </span>
          </div>
          {/* <------------------------------------------ Books Issued Table----------------------------------------> */}
          <div className="book-table bg-white mt-3 p-2">
            <div className="table-header-book d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-3">
                <span>
                  <FaBookReader />
                </span>
                <span className="return-issued">Books Issuing & Returns</span>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <div className="table-search-box gray">
                  <LuSearch className="fs-4" />
                  <input
                    type="search"
                    placeholder="search"
                    style={{ border: "none", outline: "none" }}
                  />
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
                    &nbsp; Add New Entry
                  </Button>
                </div>
              </div>
            </div>
            <Card.Body>
              <div className="table-resposive">
                
              <Table hover responsive className="align-middle mb-0">
                <thead>
                  <tr className="library-table-head-color">
                    <th></th>
                    <th>S.N.</th>
                    <th>Issued Date</th>
                    <th>Book Name</th>
                    <th>Student Name</th>
                    <th>Class/Section</th>
                    <th>Due Date</th>
                    <th>Return Date</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {libraryIssuedBooks.map((item, index) => (
                    <tr key={item.id}>
                      <td>
                        <input type="checkbox" name="" id="" />
                      </td>
                      <td>{index + 1}</td>
                      <td>{item.issuedDate}</td>
                      <td>{item.bookName}</td>
                      <td>{item.studentName}</td>
                      <td>{item.classSection}</td>
                      <td>{item.dueDate}</td>
                      <td>{item.returnDate}</td>
                      <td>
                        <span
                          style={{
                            display: "inline-block",
                            backgroundColor: statusColors[item.status]?.bg || "#ccc",
                            color: statusColors[item.status]?.color || "#000",
                            padding: "2px 8px",
                            borderRadius: "8px",
                            fontWeight: "500",
                            fontSize: "0.85rem",
                          }}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="position-relative">
                        <div className="dropdown ">
                          <PiDotsThreeVertical
                            className="cursor-pointer"
                            data-bs-toggle="dropdown"
                            style={{ cursor: "pointer" }}
                          />

                          <ul
                            className="dropdown-menu shadow-sm border-0"
                            style={{ borderRadius: "8px", minWidth: "80px" }}
                          >
                            <li>
                              <button
                                className="dropdown-item"
                                style={{ borderRadius: "6px" }}
                                onMouseEnter={(e) =>
                                  (e.target.style.background = "#cfe2ff")
                                }
                                onMouseLeave={(e) =>
                                  (e.target.style.background = "transparent")
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
                                  (e.target.style.background = "transparent")
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
        </div>

        <div className="library-overview-right mt-3">
          <div className="left-shadow bg-white p-4 rounded">
            {/* <------------------------------------------ Calender -------------------------------------> */}

            <div className="mt-4">
              <div>
                <Calendar onChange={setValue} value={value} />
              </div>
            </div>
            {/* <======================================== Resources ============================================> */}
            <div className="resource mt-2">
              <h5 className="other-library">Resources</h5>
              <div className="mt-4 p-2">
                <div className="d-flex gap-3 justify-content-between align-items-center">
                  {resourceData.map((item, index) => (
                    <div
                      key={index}
                      className="d-flex flex-column align-items-center"
                      style={{ width:'84px',height:'102px' }}
                    >
                      <div
                        className="rounded d-flex justify-content-center align-items-center"
                        style={{ backgroundColor: item.color,width:'82px',height:'80px', padding:'15px' }}
                      >
                        <img src={item.img} alt={item.title} className="" style={{width:'100%',height:'100%',objectFit:'contain'}}/>
                      </div>
                      <span className="mt-1 text-center" style={{fontSize:'14px',fontWeight:'400'}}>{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* <----------------------------------------- Recent Activities -------------------------------------> */}
            <div className="mt-2">
              <div className="d-flex justify-content-between">
                <span className="holiday fw-bold">Recent Activities</span>
                <span className="dtpkr btn ">
                  <button className="btn btn-dark fw-semibold btn-sm px-3">
                    View All
                  </button>
                </span>
              </div>
              {activities.map((activity, index) => (
                <div className="d-flex align-items-center" key={index}>
                  <div className="w-25 px-2 py-2">
                    <img
                      src={activity.img}
                      className="rounded-circle"
                      alt=""
                      style={{ width: "64px", height: "64px" }}
                    />
                  </div>

                  <div className="activity w-75">
                    <div className="time px-2 py-2">
                      {activity.message}
                      <br />
                      <div className="d-flex gap-4 align-items-center">
                        <span className="recent-activity-time mt-1">
                          {activity.date}
                        </span>
                        <span className="recent-activity-time mt-1">
                          {activity.class}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <========================================== Recently Added Students ============================================> */}
            <div className="mt-2">
              <div className="d-flex justify-content-between">
                <span className="holiday fw-bold">Recently Added Students</span>
                <span className="dtpkr btn ">
                  <button className="btn btn-dark fw-semibold btn-sm px-3">
                    View All
                  </button>
                </span>
              </div>
              {students.map((stud, index) => (
                <div className="d-flex" key={index}>
                  <div className="w-25 px-2 py-2">
                    <img
                      src={stud.img}
                      className="rounded-circle"
                      alt=""
                      style={{ width: "64px", height: "64px" }}
                    />
                  </div>
                  <div className="w-75 d-flex justify-content-between mb-1">
                    <div className="d-flex flex-column">
                      <b className="student-name">{stud.name}</b>
                      <span>{stud.des}</span>
                    </div>
                    <div className="student-des">
                      <span>{stud.time}</span>
                    </div>
                  </div>
                  <div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookOverview;
