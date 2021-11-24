import React from "react";
import { Card } from "semantic-ui-react";


const MovieCard = ({ movie }) => {
  return <>
    <Card>
      <Card.Content>
        <Card.Header>{movie.title}</Card.Header>
        <Card.Meta>{movie.year}</Card.Meta>
        <Card.Description>{movie.plot}</Card.Description>
        <Card.Image src={movie.poster} />
      </Card.Content>

    </Card>
  </>;
};

export default MovieCard;
