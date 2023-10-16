import React, {useState,Component} from 'react'

import "../assets/Getbook.css"

import Adminoperation from "./Adminoperation.js"

import {useNavigate } from "react"
import "../assets/Ncert.css"
import axios from "axios"
class Getbook extends Component{
    
    state={
        data:[]
    }
    componentDidMount()
    {
        axios.get('http://localhost:8081/api/v1/user/getBook').then(response=>{this.setState({data:response.data});
    })
    .catch(error=>{console.log(error);
    });
    }
        
    
    render(){
        
    
  return (
    <div>
        <Adminoperation/>
       <div className="tc7">
            <div className="sic7">
                <h2 className="h9">Find the Book of your choice...</h2><br></br><br></br>
                <p  className="para9">Enhance your reading skill today onwards!!!</p><br></br>
              
               
              
            </div>
                <div className="tC7">
                {
                    
                    this.state.data.map((value) => {
                        return(
                            <div className="t7" key={value.id}>
                                <a href={value.page}>
                                <img src={value.image_url} alt=""/>
                                </a>
                                
                                <h3 className="title7">{value.title}</h3>
                                <p>Book Id: {value.id}</p>
                                <p>Author: {value.authors}</p>
                               
                                
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    </div>
  )
}
}

export default Getbook;