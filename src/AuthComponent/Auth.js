import React,{useState} from 'react'
import './Auth.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { useHistory } from 'react-router';

const Auth = ({auth,onSubmit}) => {
    const history = useHistory()
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    return (
        <div className="container">
            <legend className="legend">{auth}</legend>
            <div className="input">
                <input type="email" value={email} placeholder="Email" onChange={(e)=>{
                    setEmail(e.target.value)
                    }}/>
               
            </div>
            <div className="input">
                <input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
               
            </div>
            <button className="submit fa fa-long-arrow-right" onClick={()=>onSubmit({email,password},history)}/>
        </div>
    )
}

export default Auth;
