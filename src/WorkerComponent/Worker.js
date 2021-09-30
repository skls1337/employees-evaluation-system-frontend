import React, { useState } from "react";
import GradesList from "../GradesListComponent/GradesList";
import "../GradesListComponent/GradesList.css";
import GradeWorker from "../GradeWorkerComponent/GradeWorker";
import "./Worker.css";

const Worker = ({ worker }) => {
  const [show, setShow] = useState(false);
  const toggleGrades = () => {
    setShow(!show);
  };
  return (
    <div className="d-flex">
      <div className={show ? "col-lg-4 active-margin-left" : "col-lg-4 container"}>
        <div
          className="background"
          onClick={() => {
            toggleGrades();
          }}
        >
          <article className={show ? "grades-active" : "grade-container"}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
              className="grade-img"
            />
            <span className="grade-title-key">{worker.fullName}</span>
          </article>
        </div>
        {show ? (
          <div className="fade-in-top" style={{ overflow: "hidden" }}>
            <GradeWorker worker={worker} key={worker.id} />
          </div>
        ) : null}
      </div>
      {show ? (
        <div className="container fade-in-top" style={{ overflow: "hidden" }}>
          <GradesList worker={worker} grades={worker.grades} key={worker.id} />
        </div>
      ) : null}
    </div>
  );
};

export default Worker;
