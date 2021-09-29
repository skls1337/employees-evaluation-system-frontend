import React, { useState } from "react";
import "./Home.css";
import Grades from "../GradesComponent/Grades";
import Welcome from "../WelcomeComponent/Welcome";
import "./Home.css"

const Home = ({ worker }) => {
  const [hidden, setHidden] = useState(true);
  const { grades } = worker.worker.worker;

  const hideGrades = () => {
    setHidden(!hidden);
  };
  return (
    <div>
      {worker != null ? (
        <div className="container">
          <Welcome worker={worker.worker.worker} hideGrades={hideGrades} />
          <div className="grades-container">
            <Grades show={hidden} grades={grades[grades.length - 1]} />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Home;
