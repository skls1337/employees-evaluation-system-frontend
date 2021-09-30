import React from "react";
import "./GradesList.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Grade from "./Grade";

AOS.init();

const GradesList = ({ worker, grades }) => {
  const gradesList =grades? grades.map((grade) => {
    return <Grade workerId={worker.id} grade={grade} />;
  }):null;

  return (
    <div className="grades-list-container container" data-aos="fade-down">
      {grades ? gradesList : <div></div>}
    </div>
  );
};

export default GradesList;
