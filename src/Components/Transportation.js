import React from "react";
import {
    FaUserAlt,
    FaCarAlt,
    FaBicycle,
    FaBusAlt,
    FaWalking,
} from "react-icons/fa";
import logo from "../Images/econator.png";
import { useNavigate } from "react-router-dom";
//car 0  bicycle = 20 walk = 20 public trasport = 10
//Plasti used? 0  , not used? 10



export default function Transportation({setQuestion2}) {

    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    console.log('clickyyyyy')
    setQuestion2(20)
    let path = `/plastic`; 
    navigate(path);
  }
    

     return (
    <>
        <div>
            <img className="logo" src={logo} alt="econantor" />
            <FaUserAlt className="userIcon" />
            <p className="text">
                Did you use single use plastic today ?npm
            </p>
            <FaCarAlt size={80} />
            <FaWalking size={80}  onClick={routeChange}/>
            <FaBusAlt size={80} />
            <FaBicycle size={80}  />
        </div>
    </>
);
}






