import React,{useState,useEffect} from 'react'
import { withRouter } from 'react-router'
import './MainPage.css'
import Nav from '../NavComponent/Nav'
import Home from '../HomeComponent/Home'
import Users from '../UsersComponent/Users'

const MainPage = () => {
   const [option,setOption]=useState("home")
   const changeOption=(option)=>{
        setOption(option)
   }
    const switchNavigator=(option)=>{
        switch(option){
            case "home":
            return <Home/>
            case "users":
            return <Users/>
            default: 
            return
        }
    }
    return (
        <div className="col-lg-11 mx-auto mt-5">
            <Nav active={option} setOption={changeOption}/>
            {switchNavigator(option)}
            
               
        </div>
    )
}

export default withRouter(MainPage);
