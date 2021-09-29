import React from "react";
import "./Welcome.css";

const Welcome = ({ worker,hideGrades }) => {
  return (
    <div className="welcome-div">
      <h1 className="welcome-h1 mt-1">
        Welcome {worker.fullName} to our platform
      </h1>
      <p className="welcome-p">
        This platform allows the users to see their performances at their
        company. Want to see your performances? Click the arrow{" "}
        <span
          className="welcome-button arrow-down"
          onClick={()=>hideGrades(true)}
        ></span>
      </p>
    </div>
  );
};

export default Welcome;
