import React, { useState } from 'react'
import './NewMovieForm.css'
const NewMovieForm = () => {
    const [newMovie, setNewMovie] = useState({title : '', openingText : '' , releaseDate: ''})
   
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewMovie({
          ...newMovie,
          [name]: value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(newMovie)
    }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Title</h3>
          <input onChange={handleInputChange} name='title' type="text" />

      <h3>Opening Text</h3>
      <textarea type="text" onChange={handleInputChange} name='openingText' />

      <h3>Release Date</h3>
          <input type="text" onChange={handleInputChange} name='releaseDate' />
          <button type='submit'>
              SUBMIT
</button>
      </form>
  );
}

export default NewMovieForm