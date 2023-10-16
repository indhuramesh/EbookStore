import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/Header.css";

import logout from  "../img/logout.png"

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/Read" className="nav-logo">
            eReadX
            
          </NavLink>
          

          <ul className={click ? "nav-menu active" : "nav-menu"}>
         

           
            <li className="nav-item">
              <NavLink
                exact
                to="/Addbook"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Add Book
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Getbook"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                View Books
              </NavLink>
            </li>
           
            
            <li className="nav-item">
              <NavLink
                exact
                to="/Updatebook"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Update
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Deletebook"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Delete
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Landingpage"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               <a href={logout}  >
                <img src={logout} height="40"></img>
               </a>
              </NavLink>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;