import React from 'react'
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from './Registration';
import "./Account.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";



function Account() {
  return (
    <div className="App p-5">
      
 <div className='outer'>
  <div className='inner'>
    <Registration/>
  </div>
 </div>
    </div>
  )
}

export default Account