import React, { useState } from 'react';
import MovieCard from './components/MovieCard';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="Home">
        <div className='heading'> <h2>Movies Viewer</h2></div>
         
          <div className='Searchbar'> <input 
          value={searchTerm}
          onChange={(e)=>{setSearchTerm(e.target.value)}}
          placeholder="Search movie name"
          >
          </input>
          <button onClick={()=>{searchMovieName(searchTerm)}}>Search</button></div>
         
      </div>
      <div className="movies-list">
        {movienames.map((movie)=>(
          <MovieCard movie={movie}/>
        ))}
      </div>
    </div>
  );
}

export default App;
