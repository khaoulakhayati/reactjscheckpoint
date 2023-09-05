import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Card, Button } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

function App() {
  
  const movies = [
    {
      title: 'Avatar',
      director: 'James Cameron',
      year: '2009',
      description: 'A paraplegic Marine is dispatched to the moon Pandora on a unique mission.',
      image: 'public\avatar.jpeg', 
      rating: 4.5,
    },
    {
      title: 'Star Wars',
      director: 'George Lucas',
      year: '1977',
      description: 'The epic space opera that follows the adventures of various characters in a galaxy far, far away.',
      image: 'public\star wars.jpeg', 
      rating: 4.7,
    },
    {
      title: 'Pinocchio',
      director: 'Ben Sharpsteen, Hamilton Luske',
      year: '1940',
      description: 'A wooden puppet embarks on a quest to become a real boy.',
      image: 'public\pinnoccio.jpeg',
      rating: 4.0,
    },
  ];
  

  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#">Movies Project</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar>
        <Container>
          <h1 className="text-center mt-4">Movie project</h1>
          <div className="row">
            {movies.map((movie, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <Card>
                  <Card.Img variant="top" src={movie.image} />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                      <strong>Director:</strong> {movie.director}<br />
                      <strong>Year:</strong> {movie.year}<br />
                      {movie.description}
                    </Card.Text>
                    <StarRatings
                      rating={movie.rating}
                      starRatedColor="gold"
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="2px"
                    />
                    <Button variant="primary">Details</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
