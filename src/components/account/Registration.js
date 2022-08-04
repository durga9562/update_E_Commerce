import React, { useState } from 'react'
import Login from './Login';
import { Alert } from "react-bootstrap";


function Registration() {
 
    const [name, setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[phone,setPhone] = useState("");
    const[flag,setFlag] = useState(false);
    const[login,setLogin] = useState(true);

function handleSubmit(e) {
    e.preventDefault();

    if(!name || !email || !password || !phone){
        setFlag(true);
    }else{
        setFlag(false);
        localStorage.setItem("Email",JSON.stringify(email));
        localStorage.setItem("Password",JSON.stringify(password));

        console.log("Saved In Local Storage");
        setLogin(!login);
    }
}

function handleClick(){
   setLogin(!login);
}

  return (
   
    <div className='p-4 m-2'>
{login ? (

        <form onSubmit={handleSubmit}>
            <h3>Register</h3>
            <div className='form-group'>
                <label>Name</label> 
                <input  
                type="text"
                className="form-control"
                placeholder="Enter Full Name"
onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Email</label> 
                <input  
                type="email"
                className="form-control"
                placeholder="Enter Email"
onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Password</label> 
                <input  
                type="password"
                className="form-control"
                placeholder="Enter Passowrd"
                onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>PhoneNumber</label> 
                <input  
                type="phone"
                className="form-control"
                placeholder="Enter PhoneNumber"
                onChange={(event) => setPhone(event.target.value)}
                />
            </div>
            <button type="submit" className='btn btn-danger btn-lg btn-block'>Register</button>
            <p className='forgot-password' onClick={handleClick}>Already Registered {" "} Login</p>

{flag && (
    <Alert color="primary"  variant="danger">
        Please Fill the Every Field
    </Alert>
)}

        </form>
):(

        <Login/>
)}
    </div>
   
  )
}

export default Registration