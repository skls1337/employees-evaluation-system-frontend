import React,{useState,useContext} from 'react'
import {Context} from '../context/AuthContext'
import Auth from '../AuthComponent/Auth.js'

export const Login = () => {
    const {signin}=useContext(Context)
    return (
        <div>
            <Auth onSubmit={signin} auth="login"/>
        </div>
    )
}
