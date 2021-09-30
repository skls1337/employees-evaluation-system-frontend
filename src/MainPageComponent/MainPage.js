import React, { useState, useEffect, useContext } from "react";
import { Context as WorkerContext } from "../context/WorkerContext";
import { withRouter } from "react-router";
import "./MainPage.css";
import Nav from "../NavComponent/Nav";
import Home from "../HomeComponent/Home";
import Workers from "../WorkersComponent/Workers";
import GradesList from "../GradesListComponent/GradesList";

const MainPage = () => {
  const [option, setOption] = useState("home");
  const userId = localStorage.getItem("userId");
  const role =localStorage.getItem("role")
  const { state, getworker,getworkers } = useContext(WorkerContext);
  useEffect(() => {
    getworker(userId);
    if(role==1){
      getworkers()
    }
  }, []);
  console.log(state)
  const changeOption = (option) => {
    setOption(option);
  };
  const switchNavigator = (option) => {
    switch (option) {
      case "home":
        return <Home worker={state} />;
      case "users":
        return state.workers? 
        <div style={{height:"900px",overflowY:"scroll"}}><Workers workers={state.workers} /></div>: null;
      case "grades":
        console.log(state.worker.worker)
        return <GradesList grades={state.worker.worker.grades} />;
      default:
        return;
    }
  };
  return (
    <div className="col-lg-10  mt-5">
      <Nav active={option} setOption={changeOption} />
      {state.worker ? switchNavigator(option) : <div></div>}
    </div>
  );
};

export default withRouter(MainPage);
