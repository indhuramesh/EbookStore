import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from React Router
import Header from './Header';
import { useAppContext } from '../utils/AppContext';
import "../assets/Bookdetails.css"

const Bookdetails = () => {
  const { id } = useParams(); // Get the book id from the URL params
  const { favourites, addToFavourites, removeFromFavourites } = useAppContext();
  const [book, setBook] = useState(null);
  const [pdf, setPdf] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8081/api/v1/user/getBook/${id}`) // Fetch the specific book using the id from the URL
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
        setPdf(data.pdf);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const favouritesChecker = (id) => {
    const boolean = favourites.some((value) => value.id === id);
    return boolean;
  };

  if (!book) {
    return <p>Loading...</p>;
  }
  const handleReadNowClick = () => {
    window.open(pdf, '_blank'); // Open the PDF in a new tab
  };

  return (
    <div>
      <Header />
      <div className="body8">
      <div className="container" >
        <div className="book-details">
          <div className="book-image">
        <img src={book.image_url} alt="" />
        </div>
        <h3 className="header2">{book.title}</h3>
        <h10 className="subheading">Author </h10>
        <p>{book.authors}</p>
        <h10 className="subheading">Description </h10>
        <p> {book.description}</p>
        <h10 className="subheading">Edition </h10>
        <p>{book.edition}</p>
        <h10 className="subheading">Format </h10>
        <p>{book.format}</p>
        <h10 className="subheading">Rating </h10>
        <p>{book.rating}</p>
        <h10 className="subheading">Genres </h10>
        <p>{book.genres}</p>
        <h10 className="subheading">Total pages </h10>
        <p>{book.num_pages}</p>
        <div >
          {favouritesChecker(book.id) ? (
            <button className="button7" onClick={() => removeFromFavourites(book.id)}>
              Remove from Favourites
            </button>
          ) : (
            <button className="button7" onClick={() => addToFavourites(book)}>
              Add to Favourites
            </button>
          )}
          <button className="button7" onClick={handleReadNowClick}>Read Now</button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Bookdetails;
