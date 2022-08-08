import React, { useEffect, useState } from 'react'
import {Alert} from "react-bootstrap"
import Suucess from './Suucess';
import {Link} from "react-router-dom"
//import axios from "axios";





function Login() {
    //const [getCustomers,setGetCustomers] = useState([]);

const [ email,setEmaillog] = useState("");
const [password,setPasswordlog] = useState("");
 const [flag,setFlag] = useState(false);
const [home,setHome] = useState(true);
 
const handleLogin = () =>{

//     if(email == ""){
//         alert("Email should not be empty");
//         return;
//     }else if(password == ""){
//         alert("Password should not be empty");
//         return;
//     }

// const requestOptions = {
//     method : "POST",
//     headers : {"Content-Type" : "application/json"},
//     body : JSON.stringify({
//         "email" : email,
//         "password":password
//     })
// };


//     fetch("http://localhost:8080/customer/getCustomers",requestOptions)
//     .then(res => res.json())
//     .then((res) => {
//         localStorage.setItem("token",res['token']);
//         localStorage.setItem("user_id",res["user_profile_details"]["user_id"]);
//             console.log(res);
//         },error=>{
//             console.log("err",error);
//         }
//     )
}

// function handleLogin(e){
// e.preventDefault();
// // let mail = localStorage.getItem("Email").replace(/"/g,"");
// // let pass = localStorage.getItem("Password").replace(/"/g,"");

// // if(!emaillog || !passwordlog){
// //     setFlag(true);
// //     console.log("Empty")
// // }else if(passwordlog !== pass || emaillog !== mail){
// // setFlag(true);
// // }else{
// //     setHome(!home);
// //     setFlag(false);
// // }
// useEffect(() =>{
// axios.get("http://localhost:8080/customer/getCustomers")
//       .then(res => {
//         console.log(res)
//         setGetCustomers(res.data)
//       })
//       .catch(err => {
//         console.log(err)
//       })
// })
//}

  return (
    <div className='login '>

{home ? (

        <form onSubmit={handleLogin}>
            <h3>Login</h3>
 <div className='form-group'>
                <label>Email</label> 
                <input  
                type="text"
                value={email}
                className="form-control"
                placeholder="Enter Email"
onChange={(event) => setEmaillog(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Password</label> 
                <input  
                type="password"
                value={password}
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
            <button  className='btn btn-success btn-xl'>
                                <Link to="/"> Back</Link>
                            </button> 
    </div>
  )
}

export default Login