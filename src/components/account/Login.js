import React, { useState } from 'react'
import {Alert} from "react-bootstrap"
import Suucess from './Suucess';





function Login() {

const [ emaillog,setEmaillog] = useState("");
const [passwordlog,setPasswordlog] = useState("");
const [flag,setFlag] = useState(false);
const [home,setHome] = useState(true);

function handleLogin(e){
e.preventDefault();
let mail = localStorage.getItem("Email").replace(/"/g,"");
let pass = localStorage.getItem("Password").replace(/"/g,"");

if(!emaillog || !passwordlog){
    setFlag(true);
    console.log("Empty")
}else if(passwordlog !== pass || emaillog !== mail){
setFlag(true);
}else{
    setHome(!home);
    setFlag(false);
}
}

  return (
    <div className='login '>

{home ? (

        <form onSubmit={handleLogin}>
            <h3>Login</h3>
 <div className='form-group'>
                <label>Email</label> 
                <input  
                type="text"
                className="form-control"
                placeholder="Enter Email"
onChange={(event) => setEmaillog(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Password</label> 
                <input  
                type="password"
                className="form-control"
                placeholder="Enter Passowrd"
                onChange={(event) => setPasswordlog(event.target.value)}
                />
            </div>
            <button type="submit" className='btn btn-danger btn-lg btn-block'>Login</button>
           
            {flag && (
    <Alert color="primary"  variant="danger">
        Please Fill Correct Information
    </Alert>
)}

            </form>
            ):(

<Suucess/>
            )}
    </div>
  )
}

export default Login