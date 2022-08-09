import React, { useEffect, useState } from 'react'
// import {Alert} from "react-bootstrap"
// import Suucess from './Suucess';
import { Link } from "react-router-dom"
// import { useNavigate } from 'react-router-dom';
import FormInput from './formInput/FormInput';
import axios from "axios";
//import "./App.js";



function Login() {
    //const [getCustomers,setGetCustomers] = useState([]);

    const [logins, setLogins] = useState({
        email: "",
        password: "",
    })

    const handleLoginChange = (e) => {
        e.preventDefault();
        setLogins({
            ...logins, [e.target.name]: e.target.value,
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8080/customer/getCustomers`)
             .then(response => 
                {
                response.data.map((res) => {
                    const container = {};
                    if (res.email === logins.email && res.password === logins.password) {
                        container.email = res.email;
                        container.password = res.password;
                        localStorage.setItem("username", res.email)
                        localStorage.setItem("password", res.password)
                        alert("Sucessfully login into your account  " + res.email);
                        window.location.replace("/")
                     }//else{
                    //      alert(res.username+" on this name there is no account register");
                    //  }
                    console.log(container);
                })
            }
            )

            .catch(error => {
                console.log(error);
            })
    }

    const loginDetails = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",

            required: true,
        }
    ]
    // const [ email,setEmaillog] = useState("");
    // const [password,setPasswordlog] = useState("");
    //  const [flag,setFlag] = useState(false);
    // const [home,setHome] = useState(true);

    // const navigate = useNavigate();

    // useEffect(() => {
    //     if(localStorage.getItem("user-info")){
    //         navigate("/")
    //     // }else{
    //     //     alert("Email and Password did'nt Match")
    //     }
    // },[]);

    // async function  login  () {

    //     console.warn(email,password);
    //     let item = {email,password};
    //     let result = fetch("http://localhost:8080/customer/login",{
    //     method :"POST",
    //     headers : {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     },
    //     body : JSON.stringify(item)
    // });
    // result = await result.json();
    // localStorage.setItem("user-info",JSON.stringify(result));
    // navigate("/");


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
            <form onSubmit={submitHandler} className="loginForm">
                <h1 className='loginHeader'> Login</h1>
                {loginDetails.map((login) => (
                    <FormInput key={login.id}
                        {...login} value={logins[login.name]}
                        onChange={handleLoginChange} />
                ))}
                <button className='loginButton' type='Submit'>
                    Login
                </button>
            </form>

            {/* {home ? (

        <form >
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
            <button type="submit" className='btn btn-danger btn-lg btn-block' onClick={login}>Login</button>
           
            {flag && (
    <Alert color="primary"  variant="danger">
        Please Fill Correct Information
    </Alert>
)}

            </form>
            ):(

<Suucess/>

            )} */}
            <button className='btn btn-success btn-xl'>
                <Link to="/"> Back</Link>
            </button>
        </div>
    )
}

export default Login