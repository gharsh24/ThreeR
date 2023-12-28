import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CountUp from "react-countup";
import Bgvideo from "./Video/video.mp4"; //video is from Ingrid North
import "./styles/style.css";
// import GoalsFinal from "./goalsFinal";
// import News from "./News";

function MovingBg() {
  return (<>
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
          <Row className="mt-2">
            <h4 className="text-center">Number of Trees Planted:</h4>
            <CountUp
              end={500}
              className="text-center colStyle2"
              duration={1.5}
            />
          </Row>
          {}
        </Col>
        <Col className="d-flex justify-content-center align-items-center"></Col>
      </Row>
      <Row className="rowStyle">
        <Col className="d-flex justify-content-center align-items-center">
          <Row className="">
            <h5 className="text-center">Number of Trees Planted:</h5>
            <CountUp
              end={400}
              className="text-center colStyle"
              duration={1.5}
            />{" "}
          </Row>
          {/* Adjust values as needed */}
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <Row className="mt-2">
            <h5 className="text-center">Tones of Plastic Recycled:</h5>
            <CountUp
              end={300}
              className="text-center colStyle"
              duration={1.5}
            />{" "}
          </Row>
          {/* Adjust values as needed */}
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <Row className="mt-2">
            <h5 className="text-center">Thousands of creatures saved:</h5>
            <CountUp
              end={200}
              className="text-center colStyle"
              duration={1.5}
            />
          </Row>
          {/* Adjust values as needed */}
        </Col>
      </Row>
    </Container>
    {/* <News/> */}
    {/* <GoalsFinal/> */}

    </>
  );
}

export default MovingBg;
