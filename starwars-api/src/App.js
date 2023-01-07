import React, { useEffect, useRef, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import NewMovieForm from "./components/NewMovieForm";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const ref = useRef(true)
  
  useEffect(() => {
    fetchMoviesHandler()
  
   
  }, [])
  

  async function fetchMoviesHandler() {
    setLoading(true)
    setError(null)
    try {
       const res = await fetch(
         "https://react-http-8f419-default-rtdb.firebaseio.com/movies.json "
       );
      const data = await res.json();
      const loadedMovies = []
      for (const key in data) {
        loadedMovies.push({...data[key] , id : key})
      }
      console.log(loadedMovies)
      if(!res.ok) throw new Error('Something went wrong! ...Retrying')
       setMovies(loadedMovies);
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
        <NewMovieForm fetchMoviesHandler={fetchMoviesHandler} />
      </section>
      <section>
        {loading ? <p>FETCHING MOVIES...</p> : <MoviesList movies={movies} />}
        {!loading && error && <p>{error}</p>}
        {!loading && error && ref.current && (
          <button onClick={() => (ref.current = false)}>Cancel</button>
        )}
      </section>
    </React.Fragment>
  );
}

export default App;
