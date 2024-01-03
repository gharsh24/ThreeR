import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CountUp from "react-countup";
import Bgvideo from "./Video/Video_Final.mp4"; //video is from Ingrid North
import "./styles/style.css";
// import GoalsFinal from "./goalsFinal";
// import News from "./News";

function MovingBg() {
  console.log(import.meta.env.VITE_REACT_APP_API_KEY);
  return (
    <>
      <Container fluid className="mt-0 p-0 containerStyle">
        <video autoPlay loop muted className="bg-vid videoStyle">
          <source src={Bgvideo} type="video/mp4" />
        </video>

        <Row className="rowStyle">
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
        <Row className="rowStyle">
          <Col className="d-flex justify-content-center align-items-center"></Col>

          <Col className="d-flex justify-content-center align-items-center">
            <Row className="mt-4">
              <h4 className="text-center">Carbon Dioxide(ppm):</h4>
              <CountUp
                end={420}
                className="text-center colStyle2"
                duration={3.5}
              />{" "}
            </Row>
            {}
          </Col>
          <Col className="d-flex justify-content-center align-items-center"></Col>
        </Row>
        <Row className="rowStyle">
          <Col className="d-flex justify-content-center align-items-center">
            <Row className="">
              <h5 className="text-center">
                Plastic Used Per day(metric tons):
              </h5>
              <CountUp
                end={367}
                className="text-center colStyle"
                duration={3.5}
              />{" "}
            </Row>
            {/* Adjust values as needed */}
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Row className="mt-2">
              <h5 className="text-center">
                Forest Cover Lost( Million Hectares):
              </h5>
              <CountUp
                end={420}
                className="text-center colStyle"
                duration={3.5}
              />{" "}
            </Row>
            {/* Adjust values as needed */}
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Row className="mt-2">
              <h5 className="text-center">
                Species Getting Extinct (Thousands):
              </h5>
              <CountUp
                end={100}
                className="text-center colStyle"
                duration={3.5}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MovingBg;
