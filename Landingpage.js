import React from 'react'
import {useNavigate} from "react-router-dom"
import "../assets/Landingpage.css";
function Landingpage() {
    const navigate = useNavigate();

  const navigateToUser = () => {
    navigate('/Login');
  };
  const navigateToAdmin = () => {
    navigate('/Adminlogin');
  };

  return (
    <div className="body">
   <div className="split left"></div>
    <div className="split right">
            <h1 className="header">eReadX</h1>
        <div className="centered">
               <button className="button1 btn1" onClick={navigateToUser}>USER</button><br></br><br></br>
               <button className="button1 btn1" onClick={navigateToAdmin}>ADMIN</button>
        </div>
    </div>
    </div>
  )
}

export default Landingpage