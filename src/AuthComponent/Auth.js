import React,{useState} from 'react'
import './Auth.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Auth = ({auth,onSubmit}) => {
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
            <button className="submit" onClick={()=>onSubmit({email,password})}/>
        </div>
    )
}

export default Auth;
