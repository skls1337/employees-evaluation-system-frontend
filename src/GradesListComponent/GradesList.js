import React from "react";
import './GradesList.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init()


const GradesList = ({ grades }) => {
  const gradesList = grades.map((grade) => {
    return (
      <div className="background">
        <h1 class="grade-timestamp-title"><span className="grade-timestamp-top">Timestamp</span><span className="grade-timestamp-bottom">{grade.timestamp}</span></h1>
        <article className ="grade-container">
        <img src="https://cdn1.iconfinder.com/data/icons/linewerk-thin-communication-set/24/ico-chat-square-512.png" className="grade-img"/>
            <span class="grade-title-key">Communication</span>
            <span class="grade-value">{grade.communicationLevel}</span>
        </article>
        <article className ="grade-container">
        <img src="https://i.pinimg.com/564x/54/ba/39/54ba397ef328e6ea13762545017a8fe9.jpg" className="grade-img"/>
            <span class="grade-title-key">Team Work</span>
            <span class="grade-value">{grade.teamWorkLevel}</span>
        </article>
        <article className ="grade-container">
        <img src="https://cdn0.iconfinder.com/data/icons/vote-and-reward-3/512/122-512.png" className="grade-img"/>
            <span class="grade-title-key">Service Quality</span>
            <span class="grade-value">{grade.serviceQualityLevel}</span>
        </article>
        <article className ="grade-container">
            <img src="https://cdn3.iconfinder.com/data/icons/miscellaneous-105-solid/128/implication_involve_implement_execution_perform-512.png" className="grade-img"/>
            <span class="grade-title-key">Implication</span>
            <span class="grade-value">{grade.implicationLevel}</span>
        </article>
      </div>
    );
  });

  return <div className="grades-list-container container" data-aos="fade-down">
      {grades?gradesList:<div></div>}
  </div>;
};

export default GradesList;
