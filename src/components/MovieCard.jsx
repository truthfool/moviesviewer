import React from 'react'
import Card from "react-bootstrap/Card";
import './styles/moviecard.css'

function MovieCard({movie}) {
  console.log(movie)  
  return (
    <>
        <Card className="movie-card">
            <Card.Img className="card-image" variant="top" src={movie.Poster!=='N/A'?movie.Poster:"https://via.placeholder.com/400"} alt={"No Image"} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>
                  Year : {movie.Year}<br/>
                  Type : {movie.Type}
                </Card.Text>
            </Card.Body>
        </Card>
    </>
  )
}

export default MovieCard