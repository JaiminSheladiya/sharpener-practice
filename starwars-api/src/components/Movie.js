import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  console.log(props)
  async function handleDelete(id) {
    
    let res = await fetch(
      `https://react-http-8f419-default-rtdb.firebaseio.com/movies/${id}.json`,{method : 'DELETE'});
    console.log(res)
    props.fetchMoviesHandler()
  }
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={()=>handleDelete(props.id)} style={{border : '1px solid blackd'}}>DELETE</button>
    </li>
  );
};

export default Movie;
