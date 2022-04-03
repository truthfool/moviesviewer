import React from "react";
import Card from "react-bootstrap/Card";

function MovieCard({ movie }) {
  console.log(movie);
  return (
    <>
      <Card
        style={{
          width: "23%",
          height: "350px",
          marginRight: "22px",
          marginBottom: "15px",
        }}
      >
        <Card.Img
          style={{
            width: "98%",
            height: "180px",
            margin: "auto",
            marginTop: "5px",
          }}
          variant="top"
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={"No Image"}
        />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>
            Year : {movie.imdbID}
            <br />
            Type : {movie.Type}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default MovieCard;
