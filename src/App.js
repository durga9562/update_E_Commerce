import React, { useState } from 'react';
//import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

//Bootstrap
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Example from './components/Example';
import Home from './components/Home';
import Account from './components/account/Account';
import 'bootstrap/dist/js/bootstrap.min.js';
import HomePage from './components/pages/home/HomePage';
import AboutPage from './components/pages/about/AboutPage';
import ShopPage from './components/pages/shop/ShopPage';
import ContactPage from './components/pages/contact/ContactPage';



//import Example from './components/Example';
// import { Routes,Route,useNavigate } from 'react-router-dom';
//import Example from './components/Example';
//import { Navigate } from "react-router-dom";





export default function App() {
    //   const navigate = useNavigate();

    //   const navigatePage = () =>{
    //     navigate("/sign");
    //   }
    //const [active,setActive] = useState("register");

    // const loginHandler= ()=>{
    //     alert("redirect to login")
    //     window.location.replace(<Example/>)
    // const [goToSignIn, setGoToSignIn] = React.useState(false);

    // if (goToSignIn) {
    //     return <Navigate to="/signin" />
    // }


    return (
<div>


   {/* <PersonAddIcon>
                   <example/>
                        </PersonAddIcon> */}
                            {/* <div>
                    <button onClick={navigatePage}>SignIn</button>
                    <Routes>
                 <Route path="/sign" element={<example/>}/>
                    </Routes>
                  </div> */}

                            {/* <button onClick={loginHandler }>SignIn</button> */}
                            {/* <button onClick={() => {
                                setGoToSignIn(true);
                            }}>{" "}
                                <PersonAddIcon />
                            </button> */}

                            <Router>
                                <Routes>
                                    <Route path="/" element={<Home/>}/>
                                    <Route exact path="/signin" element={<Account/>} />
                                    {/* <Route exact path="/" element={<Home/>}/> */}
                                    <Route exact path="/homepage" element={<HomePage/>}/>
                                    <Route exact path="/aboutpage" element={<AboutPage/>}/>
                                    <Route exact path="/shoppage" element={<ShopPage/>}/>
                                    <Route exact path="/contactpage" element={<ContactPage/>}/>
                                </Routes>
                            </Router>
                            {/* <button >
                                <Link to="/signin"> SignIn</Link>
                            </button> */}

       </div>
    );
}