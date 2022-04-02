import React, { useState } from 'react';
import MovieCard from './components/MovieCard';

function App() {
  
  const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=f54ed28e'
  const movie1={
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "tt2975590",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}
  const [moviename,setMovieName] = useState(movie1)


  return (
    <div className="App">
      <div className="container">
          <h2>Movies Viewer</h2>
          <input 
          placeholder="Search movie name"
          onClick={()=>{}}
          >
          </input>
          <button onClick={()=>{}}>Search</button>
      </div>
      <div className="movies-list">
        <MovieCard moviename={moviename}/>
      </div>
    </div>
  );
}

export default App;
