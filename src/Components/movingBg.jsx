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

  return (
    <Container fluid className="mt-4 p-0" style={containerStyle}>
      <video autoPlay loop muted className="bg-vid" style={videoStyle}>
        <source src={Bgvideo} type="video/mp4" />
      </video>

      <Row style={rowStyle}>
        <Col className="d-flex justify-content-center align-items-center">
          <CountUp style={colStyle} end={100} duration={4.5} />
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <CountUp style={colStyle} end={200} duration={4.5} />

          {/* Adjust values as needed */}
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <CountUp end={300} style={colStyle} duration={4.5} />
          {/* Adjust values as needed */}
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col className="d-flex justify-content-center align-items-center">
          <CountUp end={400} style={colStyle} duration={4.5} />{" "}
          {/* Adjust values as needed */}
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <CountUp end={500} style={colStyle} duration={4.5} />{" "}
          {/* Adjust values as needed */}
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <CountUp end={600} style={colStyle} duration={4.5} />{" "}
          {/* Adjust values as needed */}
        </Col>
      </Row>
      <Row style={rowStyle}>
        <Col className="d-flex justify-content-center align-items-center">
          <CountUp end={400} style={colStyle} duration={4.5} />{" "}
          {/* Adjust values as needed */}
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <CountUp end={500} style={colStyle} duration={4.5} />{" "}
          {/* Adjust values as needed */}
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <CountUp end={600} style={colStyle} duration={4.5} />{" "}
          {/* Adjust values as needed */}
        </Col>
      </Row>
    </Container>
  );
}

export default MovingBg;
