import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Badge, Button, Form, Card } from "react-bootstrap";
import book from "../../assets/images/101 ESSAYS.jpg";

const timelineData = [
  {
    date: "17 July 2025",
    time: "6:30 AM",
    studentName: "Student Name",
    name: "Rahul",
    status: "Success",
    notes: "Returned on time",
  },
  {
    date: "17 July 2025",
    time: "6:30 AM",
    studentName: "StudentName",
    name: "Joginder",
    status: "Success",
    notes: "Returned on time",
  },
  {
    date: "17 July 2025",
    time: "6:30 AM",
    studentName: "StudentName",
    name: "Raja",
    status: "Success",
    notes: "Returned on time",
  },
  {
    date: "17 July 2025",
    time: "6:30 AM",
    studentName: "StudentName",
    name: "Aadi",
    status: "Success",
    notes: "Returned on time",
  },
  {
    date: "17 July 2025",
    time: "6:30 AM",
    studentName: "StudentName",
    name: "Pk",
    status: "Failed",
    notes: "Fined Charged ₹100/-",
  },
  {
    date: "17 July 2025",
    time: "6:30 AM",
    studentName: "StudentName",
    name: "Modi Paglu",
    status: "Success",
    notes: "Returned on time",
  },
];

const selectedBook = {
  id: 1,
  status: "Available",
  totalCopies: 20,
  issuedCopies: 5,
  name: "101 Essays"
};


function IssuedReturnHistory() {
  return (
    <div>
      <Card className="shadow border-0 rounded-4 p-4 mt-3">
        <h4 className="fw-semibold mb-4">RFID Usage History (Track Record)</h4>

       <div className="d-flex gap-5">
          {/* <================================ Book ==============================> */}
          <div className="p-3">
            <div className="book-history p-4 rounded bg-white">
              <div
              className="d-flex justify-content-center"
              style={{ position: "relative" }}
            >
              <div className="rounded">
                <img src={book} alt="" className="books-slider" />
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
                  selectedBook.status === "Available" ? "text-success" : "text-danger"
                }`}
              >
                <span style={{ fontSize: "9px", fontWeight: "600" }}>
                  {selectedBook.status}
                </span>
              </div>
            </div>

              <div className="mt-3 text-center">
                <h5>{selectedBook.name || "Book Name"}</h5>
              </div>

              <div className="mt-2">
                <div className="d-flex justify-content-between book-text">
                  <label>Total Copies</label>
                  <span>{selectedBook.totalCopies}</span>
                </div>

                <div className="d-flex justify-content-between mt-1 book-text">
                  <label>Issued Copies</label>
                  <span>{selectedBook.issuedCopies}</span>
                </div>

                <div className="d-flex justify-content-between mt-1 book-text">
                  <label>Available Copies</label>
                  <span>
                    {selectedBook.totalCopies - selectedBook.issuedCopies}
                  </span>
                </div>
              </div>
            </div>
          </div>
        <div className="ps border-3 border-start ">
          {timelineData.map((item, index) => (
              <div key={index} className="d-flex mb-4 position-relative">
              {/* Dot */}
              <div
                className="position-absolute top-0 start-0  shadow translate-middle bg-white d-flex justify-content-center align-items-center"
                style={{
                  width: "27px",
                  height: "27px",
                  border: "2px solid #F9CFFA",
                  borderRadius: "50%",
                  marginTop: "13px",
                }}
              >
                <FaRegCircleCheck className="text-success" />
              </div>

              {/* Content */}
              <div className="ms-4 d-flex flex-wrap gap-5">
                {/* Date */}
                <div style={{ width: "140px" }}>
                  <p className="fw-semibold mb-0">{item.date}</p>
                  <p className="text-secondary small mb-0">{item.time}</p>
                </div>

                {/* Location */}
                <div style={{ width: "140px" }}>
                  <p className="fw-semibold mb-0">{item.studentName}</p>
                  <p className="text-secondary small mb-0">{item.name}</p>
                </div>

                {/* Status */}
                <div style={{ width: "140px" }}>
                  <p className="fw-semibold mb-0">Status</p>
                  <p
                    className={`small mb-0 ${
                      item.status === "Success" ? "text-success" : "text-danger"
                    }`}
                  >
                    {item.status}
                  </p>
                </div>

                {/* Notes */}
                <div style={{ width: "140px" }}>
                  <p className="fw-semibold mb-0">Notes</p>
                  <p className="text-secondary small mb-0">{item.notes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </Card>
    </div>
  );
}

export default IssuedReturnHistory;
