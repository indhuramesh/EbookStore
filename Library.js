import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../assets/Library.css";
import Header from "./Header.js";
import { useAppContext } from "../utils/AppContext";

const Library = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { favourites, addToFavourites, removeFromFavourites } = useAppContext();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/api/v1/user/getBook')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setBooks(data);
        }
      })
      .catch(error => console.error(error));
  }, []);

  const favouritesChecker = (id) => {
    const boolean = favourites.some((value) => value.id === id);
    return boolean;
  };

  return (
    <div>
      <Header />
      <div className="templateContainer">
        <div className="searchInput_Container">
          <h2 className="h8">Find the Book of your choice...</h2>
          <br />
          <br />
          <p className="para2">Enhance your reading skill today onwards!!!</p>
          <br />
          <input
            type="text"
            className="in"
            placeholder="The Lost World.."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="template_container">
          {books
            .filter((value) => {
              if (searchTerm === "") {
                return value;
              } else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return value;
              }
            })
            .map((value, id) => (
              <div className="template" key={id}>
                <Link to={`/bookdetails/${value.id}`}>
                  <img src={value.image_url} alt="" />
                </Link>
                <h3 className="title1">{value.title}</h3>
                <p>Author: {value.authors}</p>
                <div>
                  {favouritesChecker(value.id) ? (
                    <button className="button" onClick={() => removeFromFavourites(value.id)}>
                      Remove from Favourites
                    </button>
                  ) : (
                    <button className="button" onClick={() => addToFavourites(value)}>
                      Add to Favourites
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
