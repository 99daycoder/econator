import React from "react";
import { FaUserAlt } from "react-icons/fa";
import logo from "../Images/econator.png";
import noplastic from "../Images/noplastic.png";
import plastic from "../Images/plastic.png";

import { useNavigate } from "react-router-dom";


export default function PlasticUse({setQuestion1}) {


    let navigate = useNavigate(); 

    function noPlastic(){
        setQuestion1(10)
        console.log('click platic page')
      let path = `/results`; 
      navigate(path);

    }
    return (
        <>
          <div>
            <img className="logo" src={logo} />
            <FaUserAlt className="userIcon" />
            <p className="text">Did you use single use plastic today ?</p>
            <div className="options">
              <img className="plastic" src={plastic} />
              <img className="noplastic" src={noplastic} onClick={noPlastic} />
            </div>
          </div>
        </>
      );
}




