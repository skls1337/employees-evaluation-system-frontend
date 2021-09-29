import React from "react";
import Grade from "../GradeComponent/Grade";
import "./Grades.css";


const Grades = ({show,grades}) => {
  
    return grades ?<div  className={show?"d-flex shown":"hidden"} >
    <Grade grade={grades.serviceQualityLevel} title="Service Quality" />
    <div className="grade-position-left grade-position-left grade-position-left ">
      <Grade grade={grades.communicationLevel} title="Communication" />
    </div>
    <div className="grade-position-left grade-position-left">
      <Grade grade={grades.implicationLevel} title="Implication" />
    </div>
    <div className="grade-position-left ">
    <Grade grade={grades.teamWorkLevel} title="Team Work" />
    </div>
  </div>:<div></div>
  
};

export default Grades;
