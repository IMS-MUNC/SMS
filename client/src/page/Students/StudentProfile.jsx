// import React from "react";
// import { Card, ListGroup } from "react-bootstrap";
// import { FaUserGraduate } from "react-icons/fa";
// import { RiGraduationCapFill } from "react-icons/ri";

// const StudentProfile = () => {
//   return (
//     <div
//       className="container-fluid p-3"
//       style={{ background: "#f2f7fa", minHeight: "100vh" }}
//     >
//       <div className="row g-4">
//         {/* LEFT SIDEBAR */}
//         <div className="col-10 col-md-2" style={{ flex: "0 0 19%" }}>
//           <Card className="shadow border-0 rounded-4 p-3">
//             {/* Profile */}
//             <div className="text-center">
//               <img
//                 src="https://i.pravatar.cc/200?img=8"
//                 alt="profile"
//                 className="rounded-circle mb-3 mt-3"
//                 width={95}
//                 height={95}
//               />
//               <h5 className="fw-bold mb-0">Neha Pal</h5>
//               <p className="text-secondary mb-0 small">Neha.Pal@DPS.com</p>
//               <p style={{ color: "#A1A1A1" }} className="small">
//                 Last update: 12-11-2020
//               </p>
//             </div>

//             {/* Sidebar Menu */}
//             <ListGroup variant="flush" className="mt-3">
//               {/* <ListGroup.Item className="p-3 rounded-3 bg-primary text-white fw-semibold"> */}
//               {/* Basic Details */}
//               {/* </ListGroup.Item> */}

//               {[
//                 "Basic Details ",
//                 "Academic Performance",
//                 "Academic Details",
//                 "Fees & Billing Info",
//                 "RFID & Access Card",
//                 "Transport Details",
//                 "Hostel / Dormitory Details",
//                 "Parent/Guardian Info",
//                 "Uploaded Documents",
//                 "Additional Info",
//               ].map((item, index) => (
//                 <ListGroup.Item key={index} className="p-3">
//                   <RiGraduationCapFill className="me-2" />
//                   {/* <FaUserGraduate  />  */}
//                   {item}
//                 </ListGroup.Item>
//               ))}
//             </ListGroup>
//           </Card>
//         </div>

//         {/* MIDDLE MAIN INFO CARD */}
//         <div className="col-12 col-md-8" style={{ flex: "0 0 63%" }}>
//           <Card
//             className="shadow border-0 rounded-4 p-4"
//             style={{ minHeight: "450px" }}
//           >
//             <h5 className="fw-semibold mb-4">
//               Identification & Basic Information
//             </h5>

//             <div className="row mb-3">
//               <div className="col-4">
//                 <p className="fw-semibold mb-0">Gender</p>
//                 <p className="text-secondary">Female</p>
//               </div>
//               <div className="col-4">
//                 <p className="fw-semibold mb-0">Date of Birth</p>
//                 <p className="text-secondary">16th March 2000</p>
//               </div>
//               <div className="col-4">
//                 <p className="fw-semibold mb-0">Blood Group</p>
//                 <p className="text-secondary">B+</p>
//               </div>
//             </div>

//             <div className="row mb-3">
//               <div className="col-4">
//                 <p className="fw-semibold mb-0">Nationality</p>
//                 <p className="text-secondary">Indian</p>
//               </div>
//               <div className="col-4">
//                 <p className="fw-semibold mb-0">Religion</p>
//                 <p className="text-secondary">Hindiusm</p>
//               </div>
//               <div className="col-4">
//                 <p className="fw-semibold mb-0">Category / Caste</p>
//                 <p className="text-secondary">OBC</p>
//               </div>
//             </div>

//             <div className="row mb-3">
//               <div className="col-4">
//                 <p className="fw-semibold mb-0">Aadhar Number</p>
//                 <p className="text-secondary">222555555555</p>
//               </div>
//               <div className="col-4">
//                 <p className="fw-semibold mb-0">Birth Certificate No.</p>
//                 <p className="text-secondary">256102452555254552</p>
//               </div>
//               <div className="col-4">
//                 <p className="fw-semibold mb-0">Place Of Birth</p>
//                 <p className="text-secondary">Allahabad</p>
//               </div>
//             </div>

//             <div className="row mb-3">
//               <div className="col-4">
//                 <p className="fw-semibold mb-0">Mother Tongue</p>
//                 <p className="text-secondary">Hindi</p>
//               </div>
//               <div className="col-4">
//                 <p className="fw-semibold mb-0">Medical Conditions</p>
//                 <p className="text-secondary">No/Yes e.g., asthma</p>
//               </div>
//               <div className="col-4">
//                 <p className="fw-semibold mb-0">Disability</p>
//                 <p className="text-secondary">Yes/no</p>
//               </div>
//             </div>
//           </Card>
//         </div>

//         {/* RIGHT SMALL PROFILE CARD */}
//         <div className="col-12 col-md-2" style={{ flex: "0 0 18%" }}>
//           <Card className="shadow border-0 rounded-4 p-3 text-center  ">
//             <img
//               src="https://i.pravatar.cc/200?img=8"
//               className="rounded-circle mb-3 ms-3 mt-4"
//               width={205}
//               height={199}
//             />

//             <h5 className="fw-bold fs-4">Neha Pal</h5>
//             <p className="text-secondary">Student ID : ST65432</p>

//             <div className="text-start mt-0 px-3">
//               <p className="fw-semibold text-dark mb-1">E-Mail ID</p>
//               <p className="text-secondary">neha.pal@DPS.com</p>

//               <p className="fw-semibold text-dark mb-1">Class & Section</p>
//               <p className="text-secondary">Class 5th C</p>

//               <p className="fw-semibold text-dark mb-1">Roll No.</p>
//               <p className="text-secondary">63</p>
//             </div>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentProfile;


import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { RiGraduationCapFill } from "react-icons/ri";

const StudentProfile = () => {
  const [selectedSection, setSelectedSection] = useState("Basic Details");

  // ------- Main Content Renderer -------
  const renderContent = () => {
    switch (selectedSection) {
      case "Basic Details":
        return (
          <>
            {/* MAIN INFORMATION */}
            <div >
              <Card className=" border-0  rounded-4 p-4 ">
                <h5 className="fw-semibold mb-4 mt-2">
                  Identification & Basic Information
                </h5> <div className="ms-4">


                  <div className="row mb-3">
                    <div className="col-12 col-sm-6 col-lg-4">
                      <p className="fw-semibold mb-0">Gender</p>
                      <p className="text-secondary">Female</p>
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

                  <div className="row mb-3">
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

                  <div className="row mb-3">
                    <div className="col-12 col-sm-6 col-lg-4">
                      <p className="fw-semibold mb-0">Aadhar Number</p>
                      <p className="text-secondary">222555555555</p>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                      <p className="fw-semibold mb-0">Birth Certificate No.</p>
                      <p className="text-secondary">256102452555254552</p>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                      <p className="fw-semibold mb-0">Place Of Birth</p>
                      <p className="text-secondary">Allahabad</p>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-12 col-sm-6 col-lg-4">
                      <p className="fw-semibold mb-0">Mother Tongue</p>
                      <p className="text-secondary">Hindi</p>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                      <p className="fw-semibold mb-0">Medical Conditions</p>
                      <p className="text-secondary">None</p>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                      <p className="fw-semibold mb-0">Disability</p>
                      <p className="text-secondary">No</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </>
        );

      case "Academic Performance":
        return (
          <div className="p-3">
            <h5 className="fw-semibold">Academic Performance</h5>
            <p className="text-secondary">Here you can show grades, attendance, etc.</p>
          </div>
        );

      case "Academic Details":
        return (
          <div className="p-2">

            <h4 className="fw-semibold mb-4">Academic Details</h4>

            <div className="ms-3">

              {/* ROW 1 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Academic Year</p>
                  <p className="text-secondary">2024-2025</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Admission Date</p>
                  <p className="text-secondary">1st Feb 2018</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Admission Type</p>
                  <p className="text-secondary">New / Transfer / Re-admission</p>
                </div>
              </div>

              {/* ROW 2 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">House/Club</p>
                  <p className="text-secondary">Green/Blue/Yellow/Red</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Medium of Instruction</p>
                  <p className="text-secondary">English, Hindi, etc.</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Current Status</p>
                  <p className="text-secondary">Active / Transferred / Dropped / Alumni</p>
                </div>
              </div>

              {/* ROW 3 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Promotion Status</p>
                  <p className="text-secondary">Promoted / Detained / Repeating</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Class Teacher</p>
                  <p className="text-secondary">Mrs. Mathews</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">TC Issued?</p>
                  <p className="text-secondary">Yes / No</p>
                </div>
              </div>

              {/* ---- Previous School Details ---- */}
              <h5 className="fw-semibold mt-4 mb-3">Previous School Details</h5>

              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Previous School Name</p>
                  <p className="text-secondary">Yes/Girls High School</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">City/State/Country</p>
                  <p className="text-secondary">Allahabad/UP/India</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Reason Of Transfer</p>
                  <p className="text-secondary">Parental request</p>
                </div>
              </div>

            </div>
          </div>
        );


      case "Fees & Billing Info":
        return (
          <div className="p-2">
            <h4 className="fw-semibold mb-4">Fees & Billing Info</h4>

            <div className="ms-3">

              {/* ROW 1 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Fee Plan</p>
                  <p className="text-secondary small mb-0">Monthly/Yearly/Quarterly</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Discounts / Concessions</p>
                  <p className="text-secondary small mb-0">e.g., sibling, scholarship</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Discount Amount</p>
                  <p className="text-secondary small mb-0">20000</p>
                </div>
              </div>

              {/* ROW 2 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Total Fee Amount</p>
                  <p className="text-secondary small mb-0">2,00,000/Year</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Amount Paid</p>
                  <p className="text-secondary small mb-0">1,50,000 INR</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Balance Due</p>
                  <p className="text-secondary small mb-0">30000 INR</p>
                </div>
              </div>

              {/* ROW 3 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Refundable Deposit</p>
                  <p className="text-secondary small mb-0">15000</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Last Payment Date</p>
                  <p className="text-secondary small mb-0">2nd July 2025</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Fee Status</p>
                  <p className="small mb-0">
                    <span style={{ color: "green" }}>Paid</span> /{" "}
                    <span style={{ color: "red" }}>Unpaid</span> /{" "}
                    <span style={{ color: "orange" }}>Partial</span>
                  </p>
                </div>
              </div>

              {/* ROW 4 - Remarks */}
              <div className="row mb-4">
                <div className="col-12">
                  <p className="fw-semibold mb-1">Fee Remarks / Notes</p>
                  <p className="text-secondary small">
                    Fee payment delayed due to cheque bounce. Parent notified. Replacement payment initiated.
                    Admin advised to monitor closely. Temporary block on ID card until payment is cleared.
                  </p>
                </div>
              </div>

            </div>
          </div>
        );

      case "RFID & Access Card":
        return (
          <div className="p-2">
            <h4 className="fw-semibold mb-4">RFID & Access Card Info</h4>

            <div className="ms-3">

              {/* ROW 1 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">ID Card Type</p>
                  <p className="text-secondary small mb-0">RFID Card</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">ID Card Number</p>
                  <p className="text-secondary small mb-0">RFID card number</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Card Status</p>
                  <p className="text-secondary small mb-0">
                    Active / Inactive / Lost / Replaced / Blocked
                  </p>
                </div>
              </div>

              {/* ROW 2 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Linked Modules (Multiselect)</p>
                  <p className="text-secondary small mb-0">
                    Multipurpose/Attendance/Library/Cateen
                  </p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Issue Date</p>
                  <p className="text-secondary small mb-0">2nd Feb 2024</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Expiry Date</p>
                  <p className="text-secondary small mb-0">2nd Feb 2025</p>
                </div>
              </div>

              {/* ROW 3 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Replacement Status</p>
                  <p className="text-secondary small mb-0">Original / Reissued / Lost</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Linked to Guardian App</p>
                  <p className="text-secondary small mb-0">Yes / No</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Expiry Date</p>
                  <p className="text-secondary small mb-0">2nd Feb 2025</p>
                </div>
              </div>

              {/* ROW 4 – Remarks */}
              <div className="row mb-4">
                <div className="col-12">
                  <p className="fw-semibold mb-1">Remarks / Notes</p>
                  <p className="text-secondary small mb-1">
                    Any admin notes related to RFID
                  </p>
                </div>
              </div>

            </div>
          </div>
        );

      case "Transport Details":
        return (
          <div className="p-2">
            <h4 className="fw-semibold mb-4">Transport Details</h4>

            <div className="ms-3">

              {/* ROW 1 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Opted for Transport</p>
                  <p className="text-secondary small mb-0">Yes / No</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Route Number</p>
                  <p className="text-secondary small mb-0">School route</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Vehicle Number</p>
                  <p className="text-secondary small mb-0">UP32 8495</p>
                </div>
              </div>

              {/* ROW 2 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Driver Name</p>
                  <p className="text-secondary small mb-0">Mr. Sehdev Mishra</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Driver Contact</p>
                  <p className="text-secondary small mb-0">+91 9876 656 654</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Pickup Point</p>
                  <p className="text-secondary small mb-0">Sunrise Apartments Gate</p>
                </div>
              </div>

              {/* ROW 3 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Pickup Time</p>
                  <p className="text-secondary small mb-0">7:00 AM</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Drop Time</p>
                  <p className="text-secondary small mb-0">2:00 PM</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Drop Point</p>
                  <p className="text-secondary small mb-0">Sunrise Apartments Gate</p>
                </div>
              </div>

              {/* ROW 4 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Attendant / Helper Name</p>
                  <p className="text-secondary small mb-0">Optional (for primary school buses)</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Transport Fee Plan</p>
                  <p className="text-secondary small mb-0">Monthly / Quarterly / Annually</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Transport Fee Amount</p>
                  <p className="text-secondary small mb-0">₹9000/Year</p>
                </div>
              </div>

              {/* ROW 5 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Fee Payment Status</p>
                  <p className="text-secondary small mb-0">Paid / Unpaid / Partially Paid</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Fees Paid</p>
                  <p className="text-secondary small mb-0">₹8000</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Fees Due</p>
                  <p className="text-secondary small mb-0">₹1000</p>
                </div>
              </div>

            </div>
          </div>
        );

      case "Hostel / Dormitory Details":
        return (
          <div className="p-2">
            <h4 className="fw-semibold mb-4">Hostel / Dormitory Details</h4>

            <div className="ms-3">

              {/* ROW 1 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Opted for Hostel</p>
                  <p className="text-secondary small mb-0">Yes / No</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Room Type</p>
                  <p className="text-secondary small mb-0">Single / Double / Dormitory</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Food Preference</p>
                  <p className="text-secondary small mb-0">Veg / Non-Veg / Special Diet</p>
                </div>
              </div>

              {/* ROW 2 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Hostel Name / Building</p>
                  <p className="text-secondary small mb-0">e.g., Sunrise Wing, Block C</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Room Name</p>
                  <p className="text-secondary small mb-0">e.g., Room 202,</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Bed Number</p>
                  <p className="text-secondary small mb-0">e.g., Room 202, Bed B</p>
                </div>
              </div>

              {/* ROW 3 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Check-In Date</p>
                  <p className="text-secondary small mb-0">Official hostel entry date</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Expected Check-Out Date</p>
                  <p className="text-secondary small mb-0">End-of-term or annual exit</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Actual Check-Out Date</p>
                  <p className="text-secondary small mb-0">Only filled if student leaves mid-term</p>
                </div>
              </div>

              {/* ROW 4 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Hostel Fee Plan</p>
                  <p className="text-secondary small mb-0">Monthly/Term-based</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Hostel Fee Amount</p>
                  <p className="text-secondary small mb-0">₹20000/Per Month</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Fees Due</p>
                  <p className="text-secondary small mb-0">₹0</p>
                </div>
              </div>

              {/* ROW 5 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Fee Status</p>
                  <p className="text-secondary small mb-0">Paid / Unpaid</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Fees Paid</p>
                  <p className="text-secondary small mb-0">₹20000</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Last Payment Date</p>
                  <p className="text-secondary small mb-0">24th June 2024</p>
                </div>
              </div>

              {/* ROW 6 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Warden Name</p>
                  <p className="text-secondary small mb-0">Mrs. Swati Rastogi</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Warden Contact</p>
                  <p className="text-secondary small mb-0">+91 7656 765 765</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Allergy / Medical Info</p>
                  <p className="text-secondary small mb-0">Critical notes like nuts, dairy allergy</p>
                </div>
              </div>

              {/* ROW 7 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Visitor Guardian (Relation)</p>
                  <p className="text-secondary small mb-0">Mother/Sister/Brother/father</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Visitor Guardian No.</p>
                  <p className="text-secondary small mb-0">+91 7656 765 765</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4"></div>
              </div>

              {/* ROW 8 – Remarks */}
              <div className="row mb-4">
                <div className="col-12">
                  <p className="fw-semibold mb-1">Hostel Remarks</p>
                  <p className="text-secondary small mb-1">
                    Any special instructions, permissions, complaints
                  </p>
                </div>
              </div>

            </div>
          </div>
        );

      case "Parent/Guardian Info":
        return (
          <div className="p-2">
            <h4 className="fw-semibold mb-4">Parent / Guardian Information</h4>

            <div className="ms-3">

              {/* ROW 1 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Father's Name</p>
                  <p className="text-secondary small mb-0">Full name – used on ID card</p>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Father's Mobile Number</p>
                  <p className="text-secondary small mb-0">+91 7656 765 765</p>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Alternate Mobile Number</p>
                  <p className="text-secondary small mb-0">+91 7656 765 765</p>
                </div>
              </div>

              {/* ROW 2 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Father's Email ID</p>
                  <p className="text-secondary small mb-0">Raj@gmail.com</p>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Father's Occupation</p>
                  <p className="text-secondary small mb-0">For internal records or scholarship eligibility</p>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Father's Annual Income</p>
                  <p className="text-secondary small mb-0">₹20000/Per Month</p>
                </div>
              </div>

              {/* ROW 3 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Mother's Name</p>
                  <p className="text-secondary small mb-0">Full name – used on ID card</p>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Mother's Mobile Number</p>
                  <p className="text-secondary small mb-0">+91 7656 765 765</p>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Alternate Mobile Number</p>
                  <p className="text-secondary small mb-0">+91 7656 765 765</p>
                </div>
              </div>

              {/* ROW 4 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Mother's Email ID</p>
                  <p className="text-secondary small mb-0">Sangeeta@gmail.com</p>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Mother's Occupation</p>
                  <p className="text-secondary small mb-0">House Wife</p>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Mother's Annual Income</p>
                  <p className="text-secondary small mb-0">—</p>
                </div>
              </div>

              {/* ROW 5 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Guardian’s Name</p>
                  <p className="text-secondary small mb-0">Manshi</p>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Guardian’s Mobile Number</p>
                  <p className="text-secondary small mb-0">+91 7656 765 765</p>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Alternate Mobile Number</p>
                  <p className="text-secondary small mb-0">+91 7656 765 765</p>
                </div>
              </div>

              {/* ROW 6 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Guardian’s Email ID</p>
                  <p className="text-secondary small mb-0">Sangeeta@gmail.com</p>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Guardian’s Relationship With Student</p>
                  <p className="text-secondary small mb-0">Maasi</p>
                </div>
                <div className="col-12 col-sm-6 col-lg-4"></div>
              </div>

              {/* ROW 7 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Current Residential Address</p>
                  <p className="text-secondary small mb-0">House No.327</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Area</p>
                  <p className="text-secondary small mb-0">Civil Lines</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">City</p>
                  <p className="text-secondary small mb-0">Allahabad</p>
                </div>
              </div>

              {/* ROW 8 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">State</p>
                  <p className="text-secondary small mb-0">UP</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Country</p>
                  <p className="text-secondary small mb-0">India</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Pincode</p>
                  <p className="text-secondary small mb-0">254254</p>
                </div>
              </div>

              {/* ROW 9 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">
                    Permanent Residential Address (if Different)
                  </p>
                  <p className="text-secondary small mb-0">House No.327</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Area</p>
                  <p className="text-secondary small mb-0">Civil Lines</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">City</p>
                  <p className="text-secondary small mb-0">Allahabad</p>
                </div>
              </div>

              {/* ROW 10 */}
              <div className="row mb-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">State</p>
                  <p className="text-secondary small mb-0">UP</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Country</p>
                  <p className="text-secondary small mb-0">India</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Pincode</p>
                  <p className="text-secondary small mb-0">254254</p>
                </div>
              </div>

            </div>
          </div>
        );

      case "Additional Info":
        return (
          <div className="p-2">
            <h4 className="fw-semibold mb-4">Additional Info</h4>

            <div className="ms-3">
              {/* ROW 1 */}
              <div className="row mb-3">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Hobbies / Interests</p>
                  <p className="text-secondary small mb-2">Painting, Reading, Robotics, Singing</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Talent</p>
                  <p className="text-secondary small mb-2">Mention interschool, state, or national awards</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Alternate Mobile Number</p>
                  <p className="text-secondary small mb-2">+91 7656 765 765</p>
                </div>
              </div>

              {/* ROW 2 */}
              <div className="row mb-3">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Leadership Roles</p>
                  <p className="text-secondary small mb-2">e.g., Class Monitor, School Captain, Event Volunteer</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Father's Occupation</p>
                  <p className="text-secondary small mb-2">For internal records or scholarship eligibility</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Father’s Annual Income</p>
                  <p className="text-secondary small mb-2">₹20000/Per Month</p>
                </div>
              </div>

              {/* ROW 3 */}
              <div className="row mb-3">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Mother’s Name</p>
                  <p className="text-secondary small mb-2">Full name – used on ID card</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Mother’s Mobile Number</p>
                  <p className="text-secondary small mb-2">+91 7656 765 765</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Alternate Mobile Number</p>
                  <p className="text-secondary small mb-2">+91 7656 765 765</p>
                </div>
              </div>

              {/* ROW 4 */}
              <div className="row mb-3">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Mother’s Email ID</p>
                  <p className="text-secondary small mb-2">sangeeta@gmail.com</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Mother’s Occupation</p>
                  <p className="text-secondary small mb-2">House Wife</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Mother’s Annual Income</p>
                  <p className="text-secondary small mb-2">—</p>
                </div>
              </div>

              {/* ROW 5 */}
              <div className="row mb-3">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Guardian's Name</p>
                  <p className="text-secondary small mb-2">Manshi</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Guardian's Mobile Number</p>
                  <p className="text-secondary small mb-2">+91 7656 765 765</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Alternate Mobile Number</p>
                  <p className="text-secondary small mb-2">+91 7656 765 765</p>
                </div>
              </div>

              {/* ROW 6: Address */}
              <div className="row mb-3">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Current Residential Address</p>
                  <p className="text-secondary small mb-2">House No.327</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Area</p>
                  <p className="text-secondary small mb-2">Civil Lines</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">City</p>
                  <p className="text-secondary small mb-2">Allahabad</p>
                </div>
              </div>

              {/* ROW 7 */}
              <div className="row mb-3">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">State</p>
                  <p className="text-secondary small mb-2">UP</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Country</p>
                  <p className="text-secondary small mb-2">India</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Pincode</p>
                  <p className="text-secondary small mb-2">254254</p>
                </div>
              </div>

              {/* ROW 8: Permanent Address (if different) */}
              <div className="row mb-3">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Permanent Residential Address (if Different)</p>
                  <p className="text-secondary small mb-2">House No.327</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Area</p>
                  <p className="text-secondary small mb-2">Civil Lines</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">City</p>
                  <p className="text-secondary small mb-2">Allahabad</p>
                </div>
              </div>

              {/* ROW 9 */}
              <div className="row mb-3">
                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">State</p>
                  <p className="text-secondary small mb-2">UP</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Country</p>
                  <p className="text-secondary small mb-2">India</p>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <p className="fw-semibold mb-1">Pincode</p>
                  <p className="text-secondary small mb-2">254254</p>
                </div>
              </div>
            </div>
          </div>
        );


      default:
        return (
          <div className="p-3">
            <h5 className="fw-semibold">{selectedSection}</h5>
            <p className="text-secondary">Content for {selectedSection} goes here.</p>
          </div>
        );
    }
  };

  const sidebarItems = [
    "Basic Details",
    "Academic Performance",
    "Academic Details",
    "Fees & Billing Info",
    "RFID & Access Card",
    "Transport Details",
    "Hostel / Dormitory Details",
    "Parent/Guardian Info",
    "Uploaded Documents",
    "Additional Info",
  ];

  return (
    <div className="container-fluid p-3" style={{ background: "#f2f7fa", minHeight: "100vh" }}>
      <div className="row g-4">

        {/* LEFT SIDEBAR */}
        <div className="col-12 col-md-3 col-lg-2">
          <Card className="shadow border-0 rounded-4 p-3">
            <div className="text-center mb-2">
              <img
                src="https://i.pravatar.cc/200?img=8"
                alt="profile"
                className="rounded-circle mb-3 mt-3"
                width={95}
                height={95}
              />
              <h5 className="fw-bold mb-0">Neha Pal</h5>
              <p className="text-secondary mb-0 small">Neha.Pal@DPS.com</p>
              <p style={{ color: "#A1A1A1" }} className="small">Last update: 12-11-2020</p>
            </div>

            <ListGroup variant="flush" className="mt-3">
              {sidebarItems.map((item, idx) => (
                <ListGroup.Item
                  key={idx}
                  className={`p-3 ${selectedSection === item ? "bg-primary text-white fw-bold" : ""}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedSection(item)}
                >
                  <RiGraduationCapFill className="me-2" />
                  {item}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </div>

        {/* MAIN CONTENT (CHANGES) */}
        <div className="col-12 col-md-6 col-lg-8 ">
          <Card className="shadow border-0 rounded-4 p-4 ">
            {renderContent()}
          </Card>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-12 col-md-3 col-lg-2">
          <Card className="shadow border-0 rounded-4 p-3 text-center h-auto">
            <img
              src="https://i.pravatar.cc/200?img=8"
              className="rounded-circle mb-3 mt-4"
              width={140}
              height={140}
            />
            <h5 className="fw-bold fs-5">Neha Pal</h5>
            <p className="text-secondary">Student ID : ST65432</p>

            <div className="text-start mt-0 px-3">
              <p className="fw-semibold text-dark mb-1">E-Mail ID</p>
              <p className="text-secondary">neha.pal@DPS.com</p>

              <p className="fw-semibold text-dark mb-1">Class & Section</p>
              <p className="text-secondary">Class 5th C</p>

              <p className="fw-semibold text-dark mb-1">Roll No.</p>
              <p className="text-secondary">63</p>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default StudentProfile;

