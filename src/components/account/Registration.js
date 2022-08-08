import React, { useState } from 'react'
import Login from './Login';
import { Alert } from "react-bootstrap";
import axios from "axios";
import "./Registration.css";


function Registration(props) {
 
    // const [name, setName] = useState("");
    // const[email,setEmail] = useState("");
    // const[password,setPassword] = useState("");
    // const[phone,setPhone] = useState("");
    const[flag,setFlag] = useState(false);
     const[login,setLogin] = useState(true);

const [username,setUsername] = useState("");
const [firstName,setFirstname] = useState("");
const [lastName,setLastname] = useState("");
const [email,setEmail] = useState("")
const [password, setPassword] = useState("");
const [mobilenumber,setPhone] = useState("");



function handleSubmit(e) {
    e.preventDefault();
    const postData = {
        username,
        firstName,
        lastName,
        email,
        password,
        mobilenumber,
    };

    axios.post("http://localhost:8080/customer/Register",
    postData,
    ).then((response) => {
        console.log(response);
    })
}  

//     if(!name || !email || !password || !phone){
//         setFlag(true);
//     }else{
//         setFlag(false);
//         localStorage.setItem("Email",JSON.stringify(email));
//         localStorage.setItem("Password",JSON.stringify(password));

//         console.log("Saved In Local Storage");
//         setLogin(!login);
//     }
// }

function handleClick(){
   setLogin(!login);
}

  return (
   
    <div className='p-4 m-2'>
{login ? (

        <form onSubmit={handleSubmit}>
            <h3>Register</h3>
            <div className='form-group'>
                <label>UserName</label> 
                <input  
                type="text"
                value={username}
                className="form-control"
                placeholder="Enter Full Name"
onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>FirstName</label> 
                <input  
                type="text"
                value={firstName}
                className="form-control"
                placeholder="Enter Full Name"
onChange={(event) => setFirstname(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>LastName</label> 
                <input  
                type="text"
                value={lastName}
                className="form-control"
                placeholder="Enter Full Name"
onChange={(event) => setLastname(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Email</label> 
                <input  
                type="email"
                value={email}
                className="form-control"
                placeholder="Enter Email"
onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Password</label> 
                <input  
                type="password"
                value={password}
                className="form-control"
                placeholder="Enter Passowrd"
                onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>PhoneNumber</label> 
                <input  
                type="phone"
                value={mobilenumber}
                className="form-control"
                placeholder="Enter PhoneNumber"
                onChange={(event) => setPhone(event.target.value)}
                />
            </div>
            <button type="submit" className='btn btn-warning btn-lg btn-block '>Register</button>
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