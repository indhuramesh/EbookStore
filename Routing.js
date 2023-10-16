import "../assets/Router.css";
import { BrowserRouter as Router,  Route, Routes, useNavigate } from "react-router-dom";
import Logo from './Logo.js'
import Login from './Login.js'
import Signup from './Signup.js'
import Header from './Header.js'
import Home from './Home.js'
import Library from "./Library.js"
import Favourites from "./Favourites.js"
import Bookdetails from "./Bookdetails.js"
import Read from "./Read.js"
import Landingpage from "./Landingpage.js"
import Adminlogin from "./Adminlogin.js"
import Adminoperation from "./Adminoperation.js"
import Addbook from "./Addbook.js"
import Updatebook from "./Updatebook.js"
import Deletebook from "./Deletebook.js"
import Getbook from "./Getbook.js"
import Feedback from "./Feedback.js" 
import Adminsignup from "./Adminsignup"
import {useState,useEffect} from "react"
import Store from  "../redux/Store.js"
import { Provider } from "react-redux";
function App() {
 return (<>
    <div >
    <Routes>
            <Route path="/" element={<Logo />} />
            <Route path="/Landingpage" element={<Landingpage/>}/>
            <Route path="/Adminlogin" element={<Adminlogin/>}/>
            <Route path="/Adminsignup" element={<Adminsignup/>}/>
           <Route path="/Login" element={<Login/>}/>
            <Route path="/Signup" element={< Signup/>} />
            <Route path="/Header" element={<Header/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Library" element={<Library/>}/>
           <Route path="/Bookdetails/:id" element={<Bookdetails/>}/>
            <Route path="/Favourites" element={<Favourites/>}/>
            <Route path="/Read" element={<Read/>}/>
            <Route path="/Adminoperation" element={<Adminoperation/>}/>
            <Route path="/Addbook" element={<Addbook/>}/>
            <Route path="/Updatebook" element={<Updatebook/>}/>
            <Route path="/Deletebook" element={<Deletebook/>}/>
            <Route path="/Getbook" element={<Getbook/>}/>
            <Route path="/Feedback" element={<Feedback/>}/>
           </Routes></div>
            <div> </div></>
  );
}
export default App;