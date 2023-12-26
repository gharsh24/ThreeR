import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import "./Styles/style.css"; // Import your custom styles
function Publ() {
  return (
    <>
      <h1 className="text-center mt-5 fw-bold">Publications</h1>
      <Container>
        <Row className="mt-4">
          <Col sm={4}>
            <Card
              className="pub-card mt-2 ms-2 me-2"
              style={{
                backgroundImage: `url('https://sdgs.un.org/sites/default/files/2023-09/un_climate_sdg_synergies_report-cover_1.png')`,
                backgroundSize: "fill", // Adjust this property based on your needs
                backgroundPosition: "center",

                border: "2px solid black", // Optional: Adjust the position if needed
              }}
            >
              <Card.Body>
                <h2 className="text-center fw-bold"></h2>
                <Card.Subtitle className="mb-2 text-muted text-center"></Card.Subtitle>

                <Card.Text className="pub-card-text">
                  <Card.Link
                    style={{ textDecoration: "none" }}
                    href="https://sdgs.un.org/synergy-solutions-world-crisis-tackling-climate-and-sdg-action-together"
                  >
                    Read Now
                  </Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card
              className="pub-card mt-3"
              style={{
                backgroundImage: `url('https://sdgs.un.org/sites/default/files/2023-03/screen_shot_2023-03-16_at_6.26.38_pm_0.png')`,
                backgroundSize: "cover", // Adjust this property based on your needs
                backgroundPosition: "center",
                border: "2px solid black", // Optional: Adjust the position if needed
              }}
            >
              <Card.Body>
                <h2 className="text-center fw-bold"></h2>
                <Card.Subtitle className="mb-2 text-muted text-center"></Card.Subtitle>

                <Card.Text className="pub-card-text">
                  <Card.Link
                    style={{ textDecoration: "none" }}
                    href="https://sdgs.un.org/publications/third-global-conference-strengthening-synergies-between-paris-agreement-and-2030"
                  >
                    Read Now
                  </Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>{" "}
          <Col sm={4}>
            <Card
              className="pub-card mt-2"
              style={{
                backgroundImage: `url('https://sdgs.un.org/sites/default/files/2020-11/Screenshot%202020-11-24%20111508.png')`,
                backgroundSize: "cover", // Adjust this property based on your needs
                backgroundPosition: "center", // Optional: Adjust the position if needed

                border: "2px solid black",
              }}
            >
              <Card.Body>
                <h2 className="text-center fw-bold"></h2>
                <Card.Subtitle className="mb-2 text-muted text-center"></Card.Subtitle>

                <Card.Text className="pub-card-text">
                  <Card.Link
                    style={{ textDecoration: "none" }}
                    href="https://sdgs.un.org/publications/third-global-conference-strengthening-synergies-between-paris-agreement-and-2030"
                  >
                    Read Now
                  </Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>{" "}
        </Row>
      </Container>
    </>
  );
}

export default Publ;
