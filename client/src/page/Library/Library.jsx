import React, { useState } from "react";
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
import student from "../../assets/images/libraryImg.png";
import books from "../../assets/images/books.png";
import yt from "../../assets/images/yt.png";
import letter from "../../assets/images/letter.png";
import { GoArrowRight } from "react-icons/go";
import eva from "../../assets/images/eva.jpg";
import lady from "../../assets/images/lady.jpg";
import girl from "../../assets/images/girl.jpg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";

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
    title: "YouTube-2000",
    color: "#d7fbed",
  },
  {
    img: letter,
    title: "Letters-2000",
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

function Library() {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <div className="d-flex justify-content-between p-4 align-items-center">
        <h3>Books Overview</h3>
        <button className="btn bg-primary p-2 text-white border-rounded">
          <FaPlus className="text-white" /> &nbsp; Add
        </button>
      </div>
      <div className="d-flex gap-3 mt-3">
        <div className="w-75">
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
          <div className="mt-3 p-4">
            <div className="row">
              {bookCard.map((book, idx) => (
                <div key={idx} className="col-3 p-3">
                  <div className="book p-4 rounded bg-white">
                    <div className="d-flex">
                      <div className="d-flex align-items-center justify-content-between w-100">
                        <div className="rounded">
                          <img src={book.img} alt="" className="books" />
                        </div>

                        <div
                          className={`rounded shadow-sm d-flex justify-content-center align-items-center px-2 mt-1 
                            ${
                              book.status === "Available"
                                ? "bg-white text-success"
                                : "bg-white text-danger"
                            }`}
                        >
                          <h6 className="">{book.status}</h6>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 text-center">
                      <h5>{book.name}</h5>
                    </div>

                    <div className="mt-2">
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

                    <div className="mt-5">
                      <div className="d-flex gap-3">
                        <button className="library-btn btn btn-outline-secondary">
                          View Details
                        </button>
                        <button className="history-btn btn">
                          View Issued History
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-25">
          <div className="left-shadow bg-white p-4 rounded">
            <h5 className="other-library">Other Library Moduels</h5>
            <div className="mt-4 d-flex justify-content-between align-items-center">
              <div className="d-flex gap-2">
                <div className="image">
                  <img src={student} alt="" className="img-student" />
                </div>
                <div className="d-flex flex-column">
                  <label className="return-issue">
                    Book Issue & Return Entries
                  </label>
                  <span className="staff">Staff - 20</span>
                </div>
              </div>
              <div>
                <span className="staff-arrow">
                  <GoArrowRight />
                </span>
              </div>
            </div>
            <div className="mt-3 d-flex justify-content-between align-items-center">
              <div className="d-flex gap-2">
                <div className="image">
                  <img src={student} alt="" className="img-student" />
                </div>
                <div className="d-flex flex-column">
                  <label className="return-issue">Library Staff</label>
                  <span className="staff">Staff - 20</span>
                </div>
              </div>
              <div>
                <span className="staff-arrow">
                  <GoArrowRight />
                </span>
              </div>
            </div>
            <div className="mt-3 d-flex justify-content-between align-items-center">
              <div className="d-flex gap-2">
                <div className="image">
                  <img src={student} alt="" className="img-student" />
                </div>
                <div className="d-flex flex-column">
                  <label className="return-issue">
                    Fine Management & Rules
                  </label>
                  <span className="staff">Staff - 20</span>
                </div>
              </div>
              <div>
                <span className="staff-arrow">
                  <GoArrowRight />
                </span>
              </div>
            </div>
            <div className="mt-3 d-flex justify-content-between align-items-center">
              <div className="d-flex gap-2">
                <div className="image">
                  <img src={student} alt="" className="img-student" />
                </div>
                <div className="d-flex flex-column">
                  <label className="return-issue">Book Maintainances</label>
                  <span className="staff">Staff - 20</span>
                </div>
              </div>
              <div>
                <Link to="/book-overview">
                  <span className="staff-arrow">
                    <GoArrowRight />
                  </span>
                </Link>
              </div>
            </div>

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
                    >
                      <div
                        className="p-4 rounded"
                        style={{ backgroundColor: item.color }}
                      >
                        <img src={item.img} alt={item.title} />
                      </div>
                      <h6 className="mt-1 text-center">{item.title}</h6>
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

export default Library;
