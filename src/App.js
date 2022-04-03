import React, { useState } from 'react';
import MovieCard from './components/MovieCard';

function App() {
  
  const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=f54ed28e'
  const [moviename,setMovieNames] = useState([])
  const [searchTerm,setSearchTerm]=useState("")

  const searchMovieName=async (searchTerm)=>{
      const response=await fetch(`${API_URL}&s=${searchTerm}`)
      const val = await response.json()
      // console.log(val)
      setMovieNames(val.Search)
  };

  return (
    <div className="App">
      <div className="container">
          <h2>Movies Viewer</h2>
          <input 
          value={searchTerm}
          onChange={(e)=>{setSearchTerm(e.target.value)}}
          placeholder="Search movie name"
          >
          </input>
          <button onClick={()=>{searchMovieName(searchTerm)}}>Search</button>
      </div>
      <div className="movies-list">
        {moviename.map((movie)=>{
          <MovieCard movie={movie}/>
        })}
      </div>
    </div>
  );
}

export default App;
