import React,{useContext} from "react";
import './Nav.css'
import { useHistory } from "react-router";
import {Context as AuthContext} from '../context/AuthContext'

const Nav = ({active,setOption}) => {
    const history = useHistory();
    const {signout}=useContext(AuthContext)
    const role =localStorage.getItem('role')
  return (
    <div className="sidenav right">
      <div className={active==="home"?"nav active":"nav"} onClick={()=>setOption('home')}>
        <div className="icon fa fa-home"></div>
        <div className="description">Home</div>
      </div>
      {role!=2?<div className={active==="users"?"nav active":"nav"} onClick={()=>setOption('users')}>
        <div className="icon fa fa-users"></div>
        <div className="description">Workers</div>
      </div>:<div className={active==="grades"?"nav active":"nav"} onClick={()=>setOption('grades')}>
        <div className="icon fa fa-user-circle"></div>
        <div className="description">Grades</div>
      </div>}
      
      <div className="nav" onClick={()=>signout(history)}>
        <div className="icon fa fa-long-arrow-right"></div>
        <div className="description">Logout</div>
      </div>
    </div>
  );
};

export default Nav;
