import React from "react";
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

function BookOverview() {
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
      
    </div>
  );
}

export default BookOverview;
