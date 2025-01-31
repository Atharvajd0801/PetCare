import React from "react";
import './Doctor.css';
import Navbar from "../../components/Navbar/Navbar";
import { Doctorbody } from "../../components/Doctor/Doctorbody";

const Doctor = () => {
  return (
    <div>
      <Navbar />
      <div className="main-doc-container">
        <Doctorbody />
      </div>
    </div>
  );
};

export default Doctor;
