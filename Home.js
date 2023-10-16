import React, {useState} from 'react'
import "../assets/Home.css"

import {useNavigate} from "react-router-dom"
import { FiArrowRight } from "react-icons/fi";
import terms from "../img/terms.png"
import faq from "../img/FAQ.png"
import Header from "./Header.js"
import Library from "./Library.js"
import privacypolicy from  "../img/privacypolicy.png"
import home1 from  "../img/home1.png"

import Feedback from "./Feedback.js"
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { selectUser } from '../redux/userSlice'
function Home() {
   const navigate = useNavigate();
    const navigateToLibrary = () => {
    navigate('/Library');
  };
  return (
    <div>
      <Header/>
        <div className="body7">
       <h1 className="heading">eReadX </h1>
       {/* <div>{user.email}</div> */}
       <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\t\t.aligned {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\tpadding-left:80px}\n\t\t\n\t\tspan {\n\t\t\tpadding: 40px;\n\t\tcolor:white;\n\t\tfont-size:2rem;}\n\t\t.btn{\n\t\t\tpadding-top:20px;\n\t\t\tbackground-color:purple;\n\t\tpadding-left:500px;\n\t\tcolor: white;\n\t\tfont-weight:bold;\n\t\tfont-size:5rem;}\n\t"
    }}
  />
  <div className="aligned">
    <img
      src={home1}
      width={600}
      alt=""
    />
    <span>A reader can lives a thousand lives before he dies...<br></br><br></br>
    <button className="btn" onClick={navigateToLibrary}>Explore Now</button>
    </span>
  </div>

    <>
  
  <link
    href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    rel="stylesheet"
    id="bootstrap-css"
  />

  <section id="footer">
    <div className="container">
      <div className="row text-center text-xs-center text-sm-left text-md-left">
        <div className="col-xs-12 col-sm-4 col-md-4">
          <h5>Quick links</h5>
          <ul className="list-unstyled quick-links">
            <li>
              <a href="/Home">
                <i className="fa fa-angle-double-right" />
                Home
              </a>
            </li>
            <li>
              <a href={terms}>
                <i className="fa fa-angle-double-right" />
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href={faq}>
                <i className="fa fa-angle-double-right" />
                FAQ
              </a>
            </li>
            <li>
              <a href="/Library">
                <i className="fa fa-angle-double-right" />
                Get Started
              </a>
            </li>
            
          </ul>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4">
          <h5>Quick links</h5>
          <ul className="list-unstyled quick-links">
            <li>
              <a href={privacypolicy}>
                <i className="fa fa-angle-double-right" />
               Privacy policy
              </a>
            </li>
            <li>
              <a href="mailto:
              indhu131003@gmail.com">
                <i className="fa fa-angle-double-right" />
                Contact us
              </a>
            </li>
            <li>
              <a href="/Feedback">
                <i className="fa fa-angle-double-right" />
                Feed back
              </a>
            </li>
           
          </ul>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4">
          <h5>Website links</h5>
          <ul className="list-unstyled quick-links">
            <li>
              <a href="https://www.literacyworldwide.org/meetings-events/ila-digital-events?gclid=Cj0KCQjwnrmlBhDHARIsADJ5b_mCKRlksSRbmROk-WMW67jKUw8VGVAArIx4FGKymBB-OD9hkmkX618aAq0LEALw_wcB&gclid=Cj0KCQjwnrmlBhDHARIsADJ5b_mCKRlksSRbmROk-WMW67jKUw8VGVAArIx4FGKymBB-OD9hkmkX618aAq0LEALw_wcB">
                <i className="fa fa-angle-double-right" />
                International Literacy Association
              </a>
            </li>
            <li>
              <a href="https://www.thegoodeggs.org/?gclid=Cj0KCQjwnrmlBhDHARIsADJ5b_k9es7nPukE_TEcuFsyZllcLQtok6p89a4cAy008JRYai93JLSZxXEaApF3EALw_wcB">
                <i className="fa fa-angle-double-right" />
                Childhood Education
              </a>
            </li>
            <li>
              <a href="https://edtechbooks.org/">
                <i className="fa fa-angle-double-right" />
                EdTech Books
              </a>
            </li>
            <li>
              <a href="https://www.routledge.com/india">
                <i className="fa fa-angle-double-right" />
                Routledge
              </a>
            </li>
            
          </ul>
        </div>
      </div>
      <div className="row3">
        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
          <ul className="list-unstyled list-inline social text-center">
            <li className="list-inline-item">
              <a href="javascript:void();">
                <i className="fa fa-facebook" />
                
              </a>
            </li>
            <li className="list-inline-item">
              <a href="javascript:void();">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.instagram.com/">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="javascript:void();">
                <i className="fa fa-google-plus" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="javascript:void();" target="_blank">
                <i className="fa fa-envelope" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row3">
        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
         
          <p className="h6">
            ©2023 [eReadX] All right Reversed.
            <a
              className="text-green ml-2"
              href="/"
              target="_blank"
            >
              eReadX
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
  
</>

    </div>
       </div>
    
  )
}

export default Home