import React from "react";
import {
    FaUserAlt,
    FaCarAlt,
    FaBicycle,
    FaBusAlt,
    FaWalking,
} from "react-icons/fa";
import logo from "../Images/econator.png";

//car 0  bicycle = 20 walk = 20 public trasport = 10
//Plasti used? 0  , not used? 10

export default class Transportation extends React.Component {
    render() {
        function handleClickCar() {
            this.props.setQuestion2(0);
        }
        function handleClickBike() {
            this.props.setQuestion2(20);
        }
        function handleClickwalk() {
            this.props.setQuestion2(20);
        }
        function handleClickPT() {
            this.props.setQuestion2(10);
        }
        return (
            <>
                <div>
                    <img className="logo" src={logo} alt="econantor" />
                    <FaUserAlt className="userIcon" />
                    <p className="text">
                        Did you use single use plastic today ?npm
                    </p>
                    <FaCarAlt onClick = {handleClickCar}/>
                    <FaWalking  onClick = {handleClickBike}/>
                    <FaBusAlt  onClick = {handleClickwalk}/>
                    <FaBicycle  onClick = {handleClickPT}/>
                </div>
            </>
        );
    }
}