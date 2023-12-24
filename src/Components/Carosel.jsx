import React from "react";
import { Carousel, Card } from "react-bootstrap";

const Carosel = () => {
  const cardStyle = {
    width: "500px", // Set your desired width
    height: "auto", // Set your desired height
    margin: "0 auto", // Center the card horizontally
  };

  return (
    <Carousel fade className="mt-4">
      <Carousel.Item interval={1000}>
        <Card style={cardStyle}>
          {/* Card content for the first slide */}
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Card.Body>
            <Card.Title>First Slide</Card.Title>
            <Card.Text>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <Card style={cardStyle}>
          {/* Card content for the second slide */}
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />
          <Card.Body>
            <Card.Title>Second Slide</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <Card style={cardStyle}>
          {/* Card content for the third slide */}
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />
          <Card.Body>
            <Card.Title>Third Slide</Card.Title>
            <Card.Text>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carosel;
