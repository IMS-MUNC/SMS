import React, { useState } from "react";
import background from "../../assets/images/background.png";
import school from "../../assets/images/school.png";
import logo from "../../assets/images/logo.png";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";

{
  /* <=============================================== Dummy Data for Cards ===============================================> */
}

const campusData = [
  {
    id: 1,
    title: "Total Campus",
    count: 3,
    status: "All Operational",
    color: "text-success",
    icon: <HiOutlineBuildingLibrary size={50} className="text-primary" />,
  },
  {
    id: 2,
    title: "Total Bulidings",
    count: 5,
    status: "2 Under Construction",
    color: "text-success",
    icon: <HiOutlineBuildingLibrary size={50} className="text-warning" />,
  },
  {
    id: 3,
    title: "Total Classrooms",
    count: 30,
    status: "2 Available for Bookinng",
    color: "text-info",
    icon: <HiOutlineBuildingLibrary size={50} className="text-info" />,
  },
  {
    id: 4,
    title: "Labs",
    count: 1,
    status: "1 Under Maintenance",
    color: "text-success",
    icon: <HiOutlineBuildingLibrary size={50} className="text-danger" />,
  },
  {
    id: 5,
    title: "Hostel Rooms",
    count: 8,
    status: "Upgraded Facilities",
    color: "text-success",
    icon: <HiOutlineBuildingLibrary size={50} className="text-secondary" />,
  },
  {
    id: 6,
    title: "Sport Complex",
    count: 10,
    status: "",
    color: "text-success",
    icon: <HiOutlineBuildingLibrary size={50} className="text-success" />,
  },
  {
    id: 7,
    title: "Canteen",
    count: 4,
    status: "Under Renovation",
    color: "text-warning",
    icon: <HiOutlineBuildingLibrary size={50} className="text-warning" />,
  },
  {
    id: 8,
    title: "Parking",
    count: 3,
    status: "New Equipment Added",
    color: "text-success",
    icon: <HiOutlineBuildingLibrary size={50} className="text-primary" />,
  },
];

{
  /* <================================================= Table Dummy Data =================================================> */
}

const blockData = [
  {
    id: 1,
    blockName: "Science Block",
    code: "BLK-SC01",
    grade: "A+",
    buildings: 2,
    rooms: 24,
    floors: 3,
    coordinate: "John Smith",
    phone: "+91 9876543210",
    status: "Active",
  },
  {
    id: 2,
    blockName: "Commerce Block",
    code: "BLK-CM02",
    grade: "A",
    buildings: 1,
    rooms: 18,
    floors: 2,
    coordinate: "Priya Mehta",
    phone: "+91 9821345678",
    status: "Active",
  },
  {
    id: 3,
    blockName: "Arts Block",
    code: "BLK-AR03",
    grade: "B+",
    buildings: 2,
    rooms: 20,
    floors: 3,
    coordinate: "Ravi Kumar",
    phone: "+91 9812233445",
    status: "Under Maintenance",
  },
];

function CampusSetup() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSelect = (option) => {
    alert(`You selected: ${option}`);
    setOpen(false);
  };
  return (
    <div className="container">
      {/* <============================== School Name & Logo ==============================> */}
      <div className="campus-header">
        {/* Background */}
        <img src={background} alt="Background" className="campus-bg" />

        {/* Text Section */}
        <div className="school-content">
          <h2 className="school-text">International</h2>
          <h1 className="school-name">School</h1>

          {/* Info Bar */}
          <div className="info-bar">
            <div className="info-item">
              <span> +123 456 789</span>
            </div>
            <div className="info-item">
              <span> www.web.com</span>
            </div>
          </div>
        </div>

        {/* School Image */}
        <img src={school} alt="School Building" className="school-img" />

        {/* Logo */}
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      {/* <----------------------------------- campush Cards & add -----------------------------------> */}
      <div className="overview shadow p-3 rounded bg-white mt-3">
        {/* === Header Section === */}
        <div className="overview-head position-relative">
          <h3>Overview</h3>
          <button
            className="btn btn-primary d-flex gap-2 align-items-center add-button"
            onClick={handleToggle}
          >
            <FaPlus />
            <span>Add</span>
          </button>

          {open && (
            <div
              className="dropdown-menu show shadow"
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                marginTop: "5px",
                borderRadius: "10px",
                overflow: "hidden",
                zIndex: 1000,
              }}
            >
              {[
                "Add New Student",
                "Add New Teacher",
                "Add New Staff",
                "Add Exam Schedule",
                "Upload Circular",
                "Add Event",
              ].map((option, index) => (
                <button
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* <=================================== Slide-cards ======================================> */}
        <div className="campus-slider d-flex gap-3 overflow-auto p-2">
          {campusData.map((item) => (
            <div
              key={item.id}
              className="campus-card d-flex bg-white shadow-sm p-3 rounded flex-shrink-0"
              style={{ width: "260px" }}
            >
              {/* Left: Text */}
              <div className="flex-grow-1">
                <div className="fs-5 fw-semibold">
                  <span>{item.title}</span>
                </div>
                <div className="fs-2 fw-bold">
                  <span>{item.count}</span>
                </div>
                <div className={`${item.color} fs-6`}>
                  <span>{item.status}</span>
                </div>
              </div>

              {/* Right: Icon */}
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ width: "70px" }}
              >
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <======================================= Left & Right Side Code ===================================> */}
      <div className="down-side gap-4 mt-3">
        <div className="down-left">
          <div className="rounded shadow-sm bg-white rounded p-2">
            <div className="overview-head position-relative">
              <h5>Building / Department</h5>
              <button className="btn btn-primary d-flex gap-2 align-items-center add-button">
                <FaPlus />
                <span>Add New Building</span>
              </button>
            </div>
            <div className="table-responsive">
              <table className="table table-border-bottom align-middle text-center">
                <thead className="table-light border-bottom">
                  <tr>
                    <th>S.N</th>
                    <th className="text-start">Block Name</th>
                    <th>Code</th>
                    <th>Grade</th>
                    <th>Buildings</th>
                    <th>Rooms</th>
                    <th>Floors</th>
                    <th>Co ordinate</th>
                    <th>Phone No.</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {blockData.map((block) => (
                    <tr key={block.id}>
                      <td>{block.id}</td>
                      <td className="text-start">{block.blockName}</td>
                      <td>
                        <span className="text-start">{block.code}</span>
                      </td>
                      <td>
                        <span className="text-start">{block.grade}</span>
                      </td>
                      <td>
                        <span className="text-start">{block.buildings}</span>
                      </td>
                      <td>
                        <span className="text-start">{block.rooms}</span>
                      </td>
                      <td>
                        <span className="text-start">{block.floors}</span>
                      </td>
                      <td>
                        <span className="text-start">{block.coordinate}</span>
                      </td>
                      <td>
                        <span className="text-start">{block.phone}</span>
                      </td>
                      <td>
                        <span className="text-start">{block.status}</span>
                      </td>
                      <td>
                        <span className="text-start">
                          <BsThreeDotsVertical size={18} />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="down-right">Campus setup</div>
      </div>
    </div>
  );
}

export default CampusSetup;
