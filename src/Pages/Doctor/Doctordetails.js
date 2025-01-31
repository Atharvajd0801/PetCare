import "./Doctordetails.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./../../components/Navbar/Navbar";
import { doctors } from "./constant";
import { useLocation } from "react-router-dom";

const Doctordetails = (props) => {
  const [list, setlist] = useState([]);
  const [datalist, setDatalist] = useState([]);
  const { id } = useParams();
  const location = useLocation();

  console.log(location.state);

  useEffect(() => {
    setDatalist(doctors);
  }, [datalist]);

  return (
    <div className="main-container">
      <Navbar></Navbar>
      <div className="container-doctor-profile">
        <div className="container-doctor-profile-left">
          <div className="doctor-content-left">
            <div className="clinic-name">
              <h1>{location.state.clinic_name}</h1>
            </div>
            <br />
            <div className="personaldetails-container">
              <div className="grid-3 inside-personal1">
                <h4 className="doctor-feature">Experience :</h4>
                <h4>{location.state.experience}</h4>
              </div>

              <div className="grid-3 inside-personal1">
                <h4 className="doctor-feature">Language :</h4>
                <div className="grid-3">
                  <h4>{location.state.language}</h4>
                </div>
              </div>

              <div className="grid-3 inside-personal1">
                <h4 className="doctor-feature">Certifications :</h4>
                <div className="grid-3">
                  <h4>{location.state.certification}</h4>
                </div>
              </div>

              <div className="grid-3 inside-personal1">
                <h4 className="doctor-feature">Services :</h4>
                <div className="grid-3">
                  <h4>{location.state.services}</h4>
                </div>
              </div>
              <div className="grid-3 inside-personal1">
                <h4 className="doctor-feature">Address :</h4>
                <h4>{location.state.clinicAddress}</h4>
              </div>
            </div>
            <div className="doctor-content-1"></div>
          </div>
        </div>
        <div className="container-doctor-profile-right">
          <div className="img-container">
            <img src={location.state.img} alt=""></img>
          </div>
          <div className="doctor-details">
            <h1>{location.state.name}</h1>
            <h3>{location.state.specialization}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctordetails;