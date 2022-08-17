import React from "react";
import {
  FaUserAlt,
  AiFillCar,
  BsBicycle,
  FaBusAlt,
  FaWalking,
} from "react-icons/fa";
import logo from "../Images/econator.png";

export default class Transportation extends React.Component {
  render() {
    function handleClick() {
      this.props.setQuestion1("plastic");
    }
    return (
      <>
        <div>
          <img className="logo" src={logo} alt="econantor" />
          <FaUserAlt className="userIcon" />
          <p className="text">Did you use single use plastic today ?</p>
          <AiFillCar />
          <FaWalking />
          <FaBusAlt />
          <BsBicycle />
        </div>
      </>
    );
  }
}
