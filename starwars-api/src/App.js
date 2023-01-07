import React, { useRef, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const ref = useRef(true)
  // console.log(e)
  async function fetchMoviesHandler() {
    setLoading(true)
    setError(null)
    try {
       const res = await fetch("https://swapi.dev/api/films/");
       const data = await res.json();

      if(!res.ok) throw new Error('Something went wrong! ...Retrying')
      
       const transformedMovies = data.results.map((movieData) => {
         return {
           id: movieData.episode_id,
           title: movieData.title,
           openingText: movieData.opening_crawl,
           releaseDate: movieData.release_date,
         };
       });
       setMovies(transformedMovies);
       setLoading(false);    
    } catch (error) {
      setError(error.message + ' Retrying in 5 seconds')
      if(!ref.current) setError(error.message)
      if (ref.current) setTimeout(() => fetchMoviesHandler(), 5000)
    }
      setLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
       {loading? <p>FETCHING...</p> :<MoviesList movies={movies} />} 
        {!loading && error && <p>{error}</p>}
        {!loading && error && ref.current && <button onClick={()=>ref.current = false}>Cancel</button>}
      </section>
    </React.Fragment>
  );
}

export default App;
