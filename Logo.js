import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Logo.css"
import rxlogo from "../img/rxlogo.png"
const Logo = () => {
    const navigate = useNavigate();
    useEffect(() => {
      const redirectTimer = setTimeout(() => {
        navigate("/Landingpage");
      }, 3000);
  return () => clearTimeout(redirectTimer);
    }, [navigate]);
  return (
      <div className="img-align">       
        <img src={rxlogo} alt="Logo" />        
      </div>
    );
  };
export default Logo;