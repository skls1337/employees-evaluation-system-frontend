import React from "react";
import "./Grade.css";

const Grade = ({ grade,title }) => {
  return (
    <div>
      <div className="grade-square">
        <div className="spacer">
          <div className="grade-circle">
            <h1 className="grade-text">{grade}</h1>
          </div>
        </div>
        <h1 className="grade-title">{title}</h1>
      </div>
    </div>
  );
};

export default Grade;
