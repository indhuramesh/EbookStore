import React from 'react'
import "../assets/Addbook.css"
import Adminoperation from "./Adminoperation.js"
import axios from "axios"
import {useState} from "react";
function Deletebook() {
    const [search,setSearch]=useState("");
    
    const handleSearch=(event)=>{
        event.preventDefault();
        setSearch(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        
       
            axios.delete('http://localhost:8081/api/v1/user/deleteBook/'+search)
            
          }
    
  return (
    <div>
    
    <Adminoperation/>
    <div className="addbody">
    
        <form className="addform" onSubmit={handleSubmit}>
            <label>Enter Book Id </label>
            <input type="text" id="search" placeholder="Enter id" value={search} onChange={handleSearch}/>
             <br></br>
            
            <button type="submit">DELETE</button>
        </form>
                
        
    </div>
     </div>
    
  )
}

export default Deletebook