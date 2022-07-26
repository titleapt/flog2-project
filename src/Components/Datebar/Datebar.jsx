import React from "react";
import "./Datebar.css";
import CarlendarIcon from "./CarlendarIcon.svg";
import DateNow from "../DateNow/DateNow";

function Datebar() {
  return (
    <div className="DateBar">
      <img className="CarlendarIcon" src={CarlendarIcon} />
      <DateNow />
    </div>
  );
}

export default Datebar;
