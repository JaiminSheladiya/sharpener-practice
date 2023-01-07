import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './NewMovieForm.css'
const NewMovieForm = ({ fetchMoviesHandler }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    openingText: "",
    releaseDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,

      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setNewMovie({ ...newMovie, id: uuidv4() });
    console.log(newMovie);

    addMovie(newMovie);
  }

  async function addMovie(movie) {
    const res = await fetch(
      "https://react-http-8f419-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    fetchMoviesHandler();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Title</h3>
      <input onChange={handleInputChange} name="title" type="text" />

      <h3>Opening Text</h3>
      <textarea type="text" onChange={handleInputChange} name="openingText" />

      <h3>Release Date</h3>
      <input type="text" onChange={handleInputChange} name="releaseDate" />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default NewMovieForm