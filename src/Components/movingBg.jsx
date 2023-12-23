import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CountUp from "react-countup";
import Bgvideo from "./Video/video.mp4"; //video is from Ingrid North
import "./styles.css";

function MovingBg() {
  const containerStyle = {
    position: "relative",
    overflow: "hidden",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: 0,
    paddingRight: 0,
    height: "80vh",
  };

  const videoStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  };

  const rowStyle = {
    color: "white",
    marginTop: "4rem",
    marginLeft: "3.5rem",
    marginRight: "3.5rem",
  };

  const colStyle = {
    fontSize: "2rem", // Default font size for small screens

    "@media (min-width: 576px)": {
      fontSize: "2.5rem",
    },

    "@media (min-width: 768px)": {
      fontSize: "3rem",
    },
    "@media (min-width: 992px)": {
      fontSize: "4rem",
    },
    "@media (min-width: 1200px)": {
      fontSize: "5rem",
    },

    fontWeight: "bold",
    marginBottom: "0.8rem",
  };

  const colStyle2 = {
    fontSize: "3rem", // Default font size for small screens

    "@media (min-width: 576px)": {
      fontSize: "3.5rem",
    },

    "@media (min-width: 768px)": {
      fontSize: "4rem",
    },
    "@media (min-width: 992px)": {
      fontSize: "5rem",
    },
    "@media (min-width: 1200px)": {
      fontSize: "6rem",
    },

    fontWeight: "bold",
    marginBottom: "0.8rem",
    marginTop: "0rem",
  };

  return (
    <Container fluid className="mt- p-0" style={containerStyle}>
      <video autoPlay loop muted className="bg-vid" style={videoStyle}>
        <source src={Bgvideo} type="video/mp4" />
      </video>

      <Row style={rowStyle}>
        <Col className="d-flex justify-content-center align-items-center">
          {}
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          {/* Adjust values as needed */}
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          {/* Adjust values as needed */}
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col className="d-flex justify-content-center align-items-center"></Col>

        <Col className="d-flex justify-content-center align-items-center">
          <Row className="mt-2">
            <p className="text-center">Number of Trees Planted:</p>
            <CountUp
              end={500}
              className="text-center"
              style={colStyle2}
              duration={4.5}
            />
          </Row>
          {}
        </Col>
        <Col className="d-flex justify-content-center align-items-center"></Col>
      </Row>
      <Row style={rowStyle}>
        <Col className="d-flex justify-content-center align-items-center">
          <Row className="mt-2">
            <p className="text-center">Number of Trees Planted:</p>
            <CountUp
              end={400}
              className="text-center"
              style={colStyle}
              duration={4.5}
            />{" "}
          </Row>
          {/* Adjust values as needed */}
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <Row className="mt-2">
            <p className="text-center">Tones of Plastic Recycled:</p>
            <CountUp
              end={300}
              className="text-center"
              style={colStyle}
              duration={4.5}
            />{" "}
          </Row>
          {/* Adjust values as needed */}
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <Row className="mt-2">
            <p className="text-center">Thousands of creatures saved:</p>
            <CountUp
              end={200}
              className="text-center"
              style={colStyle}
              duration={4.5}
            />
          </Row>
          {/* Adjust values as needed */}
        </Col>
      </Row>
    </Container>
  );
}

export default MovingBg;
