import React ,{useState,useEffect} from 'react'
import "../assets/Addbook.css"
import Adminoperation from "./Adminoperation.js"
import { useNavigate } from 'react-router-dom';

import axios from "axios"
function Addbook() {
    const [title,setTitle]=useState("");
    const isAdmin = localStorage.getItem('isAdmin'); // Check if the user has admin access
    const navigate = useNavigate();
          const [authors,setAuthors]=useState("");
          const [format,setFormat]=useState("");
          const [description,setDescription]=useState("");
          const [edition,setEdition]=useState("");
          const [genres,setGenres]=useState("");
          const [image_url,setImage_url]=useState("");
          const[pdf,setPdf]=useState("");
          const [num_pages,setNum_pages]=useState("");
          const [rating,setRating]=useState("");
          const[errorMessage,setErrorMessage]=useState('');
          useEffect(() =>{
            fetchExistingBooks();
          }, []);
      
          const handleTitle=(event)=>{
              
              setTitle(event.target.value);
          }
      
      
          const handleAuthors=(event)=>{
             
              setAuthors(event.target.value);
          }
      
          const handleFormat=(event)=>{
           
            setFormat(event.target.value);
        }
        const handleDescription=(event)=>{
            
            setDescription(event.target.value);
        }
        const handleEdition=(event)=>{
          
            setEdition(event.target.value);
        }
        const handleGenres=(event)=>{
      
            setGenres(event.target.value);
        }
        const handleImage_url=(event)=>{
           
            setImage_url(event.target.value);
        }
        const handlePdf=(event)=>{
           
          setPdf(event.target.value);
      }
        const handleNum_pages=(event)=>{
           
            setNum_pages(event.target.value);
        }
        const handleRating=(event)=>{
           
            setRating(event.target.value);
        }

        const fetchExistingBooks = async () =>{
          try{
            const response=await axios.get('http://localhost:8081/api/v1/user/getBook');
          }
          catch(error){
            console.error('Error fetching existing books: ',error);
          }
        };
          const handleSubmit=async (event)=>{
            event.preventDefault();
            const data = {
              title:title,
              authors:authors,
              format:format,
              description:description,
              edition:edition,
              genres:genres,
              image_url:image_url,
              pdf:pdf,
              num_pages:num_pages,
              rating:rating,
              
            };
            
            try{
              const response=await axios.get('http://localhost:8081/api/v1/user/getBook',data);
              const existingBooks=response.data;
              const isDuplicate=existingBooks.some((book)=>book.title===title && book.authors===authors);
              if(isDuplicate){
                setErrorMessage('This book already exists. Cannot add again');
              }
              else{
                await axios.post('http://localhost:8081/api/v1/user/addBook',data);
                setTitle('');
                setAuthors('');
                setDescription('');
                setFormat('');
                setEdition('');
                setGenres('');
                setImage_url('');
                setPdf('');
                setNum_pages('');
                setRating('');
                setErrorMessage('');
              }
            }
            catch(error){
              console.error('Error fetching existing books: ',error);
            }
          };
          useEffect(() => {
            if (isAdmin !== 'true') {
              // If the user is not an admin, redirect to another page or display an error message
              navigate('/Addbook'); // Redirect to the homepage or another appropriate page
            }
            else{
              navigate('/Home')
            }
          }, [isAdmin, navigate]);
            
  return (
    
    <div>
    <Adminoperation/>
    <div className="body5">
    <div className="addbody">
    
        <form className="addform" onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" id="title" placeholder="Enter title" value={title} onChange={handleTitle}/><br></br>
            
            <label>Author Name</label>
            <input type="text" id="author" placeholder="Enter Author name" value={authors} onChange={handleAuthors}/><br></br>
            
            <label>Description</label>
            <textarea type="text" id="description" className="desc" placeholder="Enter description" value={description} onChange={handleDescription}/><br></br>
            
            <label>Format</label>
            <input type="text" id="format" placeholder="Enter book format" value={format} onChange={handleFormat}/><br></br><br></br>
            
            <label>Edition</label>
            <input type="text" id="edition" placeholder="Enter book edition" value={edition} onChange={handleEdition}/><br></br><br></br>
            
            <label>Genres</label>
            <input type="text" id="genres" placeholder="Enter book genre" value={genres} onChange={handleGenres}/><br></br><br></br>
         
            <label>Image Url</label>
            <input type="text" id="url" placeholder="Enter image url" value={image_url} onChange={handleImage_url}/><br></br><br></br>
            
            <label>PDF</label>
            <input type="text" id="url" placeholder="Enter pdf url" value={pdf} onChange={handlePdf}/><br></br><br></br>

            <label>Total pages</label>
            <input type="text" id="page" placeholder="Enter total pages" value={num_pages} onChange={handleNum_pages}/><br></br><br></br>
            
            <label>Rating</label>
            <input type="text" id="title" placeholder="Enter rating" value={rating} onChange={handleRating}/><br></br><br></br>
            
            <button type="submit">ADD</button>
            
        <div className="error">
        {errorMessage && <p>{errorMessage}</p>}
        </div>
        </form>
        
    
     </div>
     </div>
     </div>
    
  )
}


export default Addbook;