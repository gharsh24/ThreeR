import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function News() {
  return (
    <>
      <h1 className="text-center mt-4 fw-bold">News</h1>
      <Container className="mt-4">
        <Row>
          <Col
            sm={6}
            className="position-relative d-flex flex-column align-items-center justify-content-center"
          >
            <Card className="image-card">
              <Card.Img
                variant="top"
                className="img-fluid"
                src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg"
              />
              <Card.Body className="overlay">
                <Card.Text className="text-center" style={{ color: "white" }}>
                  <h3>Plant More Trees</h3>
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm={3}
            className="position-relative d-flex flex-column align-items-center justify-content-center"
          >
            <Card className="image-card">
              <Card.Img
                variant="top"
                className="img-fluid"
                src="https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card.Body className="overlay">
                <Card.Text className="text-center" style={{ color: "white" }}>
                  <h3>World with Trees </h3>
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={3}>
            <Row>
              <Col
                sm={12}
                className="mt-2 position-relative d-flex flex-column align-items-center justify-content-center"
              >
                <Card className="image-card">
                  <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/2409022/pexels-photo-2409022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                  <Card.Body className="overlay">
                    <Card.Text
                      className="text-center"
                      style={{ color: "white" }}
                    >
                      <h4>Plastic Recycling</h4>
                      lorem ipsum lorem ipsum lorem
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mt-2 mb-2 position-relative" sm={12}>
                <Card className="image-card">
                  <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/2382894/pexels-photo-2382894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                  <Card.Body className="overlay">
                    <Card.Text
                      className="text-center"
                      style={{ color: "white" }}
                    >
                      <h4>Domestic Waste</h4> lorem ipsum lorem ipsum lorem
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default News;
