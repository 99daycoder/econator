import React from "react";
import { FaBeer, MdOutlineFastfood, MdOutlineNoFood } from "react-icons/fa";
import { logo } from "../Images/econator.png";

class Question extends React.Component {
    render() {
        return (
            <>
                {" "}
                <FaRegUser />{" "}
            </>
        );
    }
}

export default function PlasticUse() {
    return (
        <div>
            PlasticUse <img src={logo} />
            <FaRegUser />
            <div>
                <p>Did you use single use plastic today ?</p>
                {/* <MdOutlineFastfood /> <MdOutlineNoFood /> */}
            </div>
        </div>
    );
}
