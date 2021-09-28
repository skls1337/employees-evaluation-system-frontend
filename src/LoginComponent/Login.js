import React,{useContext} from 'react'
import {Context} from '../context/AuthContext'
import Auth from '../AuthComponent/Auth.js'
import { withRouter } from 'react-router'

const Login = () => {
    const {signin}=useContext(Context)
    return (
        <div>
            <Auth onSubmit={signin} auth="Login"/>
        </div>
    )
}

export default  withRouter(Login);