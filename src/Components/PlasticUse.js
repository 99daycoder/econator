import React from "react";
import { FaUserAlt } from "react-icons/fa";
import logo from "../Images/econator.png";
import noplastic from "../Images/noplastic.png";
import plastic from "../Images/plastic.png";


export default class PlasticUse extends React.Component {
  render() {

    return (
      <>
        <div>
          <img className="logo" src={logo} />
          <FaUserAlt className="userIcon" />
          <p className="text">Did you use single use plastic today ?</p>
          <div className="options">
            <img className="plastic" src={plastic} onClick= />
            <img className="noplastic" src={noplastic} />
          </div>
        </div>
      </>
    );
  }
}
