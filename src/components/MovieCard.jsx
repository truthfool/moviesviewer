import React from 'react'
import Card from "react-bootstrap/Card";

function MovieCard({movie}) {
  console.log(movie)  
  return (
    <div className="card">
        <Card style={{ width: '18rem', height:'5rem' }}>
            <Card.Img variant="top" src={movie.Poster!=='N/A'?movie.Poster:"https://via.placeholder.com/400"} alt={"No Image"} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>
                Year : {movie.imdbID}<br/>
                Type : {movie.Type}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default MovieCard