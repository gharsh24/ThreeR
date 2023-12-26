import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import "./Styles/style.css"; // Import your custom styles
function Event() {
  return (
    <>
      <h1 className="text-center mt-5 fw-bold"> Global Events</h1>
      <Container>
        <Row className="mt-4">
          <Col sm={3}>
            <Card className="mt-2 event-card">
              <Card.Body>
                <h2 className="fw-bold">30</h2>
                <Card.Subtitle className="mb-2 text-muted">
                  Jan 2024
                </Card.Subtitle>

                <Card.Text>
                  2024 ECOSOC Partenership Forum on Sustainable Development
                </Card.Text>
                <Card.Footer className="text-muted mb-2">
                  Tue 30 Jan 2024
                </Card.Footer>
                <button className="btn btn-primary mt-2">
                  <a
                    href="https://sdgs.un.org/2024ECOSOCPartnershipForum"
                    target="_blank"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Register
                  </a>
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Card className="mt-2 event-card">
              <Card.Body>
                <h2 className="fw-bold">12</h2>
                <Card.Subtitle className="mb-2 text-muted">
                  Dec 2023
                </Card.Subtitle>

                <Card.Text>
                  National Capacity Building Workshop on Voluntary Local Reviews
                  (VLRs)
                </Card.Text>
                <Card.Footer className="text-muted mb-2">
                  Tue 12- Thu 14 Dec 2023
                </Card.Footer>
                <button className="btn btn-primary mt-2">
                  <a
                    href="https://sdgs.un.org/events/national-capacity-building-workshop-voluntary-local-reviews-vlrs-54253"
                    target="_blank"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Register
                  </a>
                </button>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col sm={3}>
            <Card className="mt-2 event-card">
              <Card.Body>
                <h2 className="fw-bold">29</h2>
                <Card.Subtitle className="text-muted">Nov 2023</Card.Subtitle>

                <Card.Text>
                  National Workshop on "Localizing SDGs and National Development
                  Stratergy Progress in Mozambique"
                </Card.Text>
                <Card.Footer className="text-muted mb-2">
                  Wed 29- Fri 01 Dec 2023
                </Card.Footer>
                <button className="btn btn-primary mt-2">
                  <a
                    href="https://sdgs.un.org/events/national-workshop-localizing-sdgs-and-national-development-strategy-progress-through"
                    target="_blank"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Register
                  </a>
                </button>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col sm={3}>
            <Card className="mt-2 event-card">
              <Card.Body>
                <h2 className="fw-bold">12</h2>
                <Card.Subtitle className="mb-2 text-muted">
                  Oct 2023
                </Card.Subtitle>

                <Card.Text>
                  Workshop on building capacity adoptingnd scaling up adoption
                  of STI4SDGs Roadmaps in Africa
                </Card.Text>
                <Card.Footer className="text-muted mb-2">
                  Thu 12- Fri 13 OCt 2023
                </Card.Footer>
                <button className="btn btn-primary ">
                  <a
                    href="https://sdgs.un.org/events/workshop-building-capacity-and-scaling-adoption-sti4sdgs-roadmaps-africa-53427"
                    target="_blank"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Register
                  </a>
                </button>
              </Card.Body>
            </Card>
          </Col>{" "}
        </Row>
      </Container>
    </>
  );
}

export default Event;
