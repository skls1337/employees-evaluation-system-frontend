import React, { useState,useContext} from "react";
import GradeWorker from "../GradeWorkerComponent/GradeWorker";
import {Context as WorkerContext} from '../context/WorkerContext'

const Grade = ({ grade, workerId }) => {
  const {deletegrade} = useContext(WorkerContext)
  const role = localStorage.getItem("role");
  const [edit, setEdit] = useState(false);
  
  return !edit ? (
    <div className="background">
      <div>
        {role == 1 ? (
          <button className="fa fa-minus-circle " onClick={()=>{deletegrade(workerId,grade.id)}} />
        ) : null}
      </div>
      <h1 class="grade-timestamp-title">
        <span className="grade-timestamp-top">Timestamp</span>
        <span className="grade-timestamp-bottom">{grade.timestamp}</span>
      </h1>
      <article className="grade-container">
        <img
          src="https://cdn1.iconfinder.com/data/icons/linewerk-thin-communication-set/24/ico-chat-square-512.png"
          className="grade-img"
        />
        <span className="grade-title-key">Communication</span>
        <span className="grade-value">{grade.communicationLevel}</span>
      </article>
      <article className="grade-container">
        <img
          src="https://i.pinimg.com/564x/54/ba/39/54ba397ef328e6ea13762545017a8fe9.jpg"
          className="grade-img"
        />
        <span className="grade-title-key">Team Work</span>
        <span className="grade-value">{grade.teamWorkLevel}</span>
      </article>
      <article className="grade-container">
        <img
          src="https://cdn0.iconfinder.com/data/icons/vote-and-reward-3/512/122-512.png"
          className="grade-img"
        />
        <span className="grade-title-key">Service Quality</span>
        <span className="grade-value">{grade.serviceQualityLevel}</span>
      </article>
      <article className="grade-container">
        <img
          src="https://cdn3.iconfinder.com/data/icons/miscellaneous-105-solid/128/implication_involve_implement_execution_perform-512.png"
          className="grade-img"
        />
        <span className="grade-title-key">Implication</span>
        <span className="grade-value">{grade.implicationLevel}</span>
      </article>
      {role == 1 ? (
        <button
          className="fa fa-edit "
          onClick={() => setEdit(!edit)}
        />
      ) : null}
    </div>
  ) : (
    <div>
      <GradeWorker grade={grade} workerId={workerId} />
      {role == 1 ? (
        <button
          className="fa fa-edit "
          onClick={() => setEdit(!edit)}
        />
      ) : null}
    </div>
  );
};

export default Grade;
