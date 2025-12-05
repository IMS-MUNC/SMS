import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Badge, Button, Form, Card } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";



const AcademicSetup = () => {
  return (
    <div>
      <div className="d-flex justify-content-between p-4 align-items-center">
        <h3>Academic Overview</h3>
        <button className="btn bg-primary p-2 text-white border-rounded">
          <FaPlus className="text-white" /> &nbsp; Add
        </button>
      </div>
      <Card className="shadow border-0 mb-4">
        {/* <==================================================== scroll Card ======================================================> */}
        <div>
          <div className="bg-white">
            <span>Active Academic Year</span>
          </div> 
        </div>
      </Card>
    </div>
  );
};

export default AcademicSetup;
