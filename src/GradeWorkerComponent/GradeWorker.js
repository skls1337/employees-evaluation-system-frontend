import React,{useContext,useState} from "react";
import {Context as WorkerContext} from '../context/WorkerContext'
import "../AuthComponent/Auth.scss";
import "../GradesListComponent/GradesList.css";
import "./GradeWorker.css";

const GradeWorker = ({worker}) => {
    const [communicationLevel,setCommunicationLevel]=useState(1)
    const [implicationLevel,setImplicationLevel]=useState(1)
    const [teamWorkLevel,setTeamWorkLevel]=useState(1)
    const [serviceQualityLevel,setServiceQualityLevel]=useState(1)
    const {gradeworker}=useContext(WorkerContext)
  return (
    <div className="background">
      <article className="grade-container">
        <img
          src="https://cdn1.iconfinder.com/data/icons/linewerk-thin-communication-set/24/ico-chat-square-512.png"
          className="grade-img"
        />
        <span className="grade-title-key">Communication</span>
        <input className="input-grade-worker" type="number" max={10} min={1} onChange={(e)=>setCommunicationLevel(e.target.value)} />
      </article>
      <article className="grade-container">
        <img
          src="https://i.pinimg.com/564x/54/ba/39/54ba397ef328e6ea13762545017a8fe9.jpg"
          className="grade-img"
        />
        <span className="grade-title-key">Team Work</span>
        <input class="input-grade-worker" type="number" max={10} min={1} onChange={(e)=>setTeamWorkLevel(e.target.value)}/>
      </article>
      <article className="grade-container" type="number" max={10} min={1}>
        <img
          src="https://cdn0.iconfinder.com/data/icons/vote-and-reward-3/512/122-512.png"
          className="grade-img"
        />
        <span className="grade-title-key">Service Quality</span>
        <input className="input-grade-worker" type="number" max={10} min={1} onChange={(e)=>setServiceQualityLevel(e.target.value)}/>
      </article>
      <article className="grade-container">
        <img
          src="https://cdn3.iconfinder.com/data/icons/miscellaneous-105-solid/128/implication_involve_implement_execution_perform-512.png"
          className="grade-img"
        />
        <span className="grade-title-key">Implication</span>
        <input className="input-grade-worker" type="number" max={10} min={1}onChange={(e)=>setImplicationLevel(e.target.value)} />
      </article>
      <button className="submit fa fa-long-arrow-right margin-right" onClick={()=>gradeworker(worker.id,{communicationLevel,teamWorkLevel,implicationLevel,serviceQualityLevel})} />
    </div>
  );
};

export default GradeWorker;
