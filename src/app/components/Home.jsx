import React, { useEffect, useState } from "react";
import { Container, Segment, Card, Form, Button, Input } from "semantic-ui-react";
import axios from "axios";
import MovieCard from "./MovieCard";

const Home = () => {
  const [movies, setMovies] = useState();
  

  const getMovies = async () => {
    
    const response = await axios({
      method: "GET",
      url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${query}`,
      
      headers: {
        "x-rapidapi-host":
          "imdb-internet-movie-database-unofficial.p.rapidapi.com",
        "x-rapidapi-key": "5b4938bc28mshe6f816f92cbd855p1b2390jsne40d442e44f8",
      },
    });
    setMovies(response.data);
  };
  useEffect(() => {
    getMovies();
  }, []);

  let movieList = movies.map((movie) => {
    return (
      <h2 key={movie.id} movie={movie}>
        {movie.title}
      </h2>
    );
  });

 

  return (
    <Container>
      <Form>
        <Input placeholder='Search...' onChange />
        <Button>Search</Button>
      </Form>

      <Segment>
        <Card.Group>{movieList}</Card.Group>
      </Segment>
    </Container>
  );
};

export default Home;
