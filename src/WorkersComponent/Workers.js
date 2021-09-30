import React from "react";
import Worker from '../WorkerComponent/Worker'
import AOS from "aos";
import "aos/dist/aos.css";
import './Workers.css'

AOS.init();

const Workers = ({ workers }) => {
  const list = workers.map((worker) => {
    return (
      <Worker worker={worker}/>
    );
  });

  return <div className="workers-list fade-in-top">{workers ? list : <div></div>}</div>;
};

export default Workers;
