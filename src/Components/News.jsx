import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function News() {
  return (
    <>
      <h1 className="text-center mt-4 " style={{fontFamily:"'Kaushan Script', cursive", fontSize:'90px'}}>News</h1><br/>
      <Container className="mt-4">
        <Row>
          <Col
            lg={6}
            md={12}
            className="position-relative d-flex flex-column align-items-center justify-content-center"
          >
            <Card className="image-card">
              <Card.Img
                variant="top"
                className="img-fluid"
                src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg"
              />
              <Card.Body className="overlay">
                <Card.Title
                  className="text-center fw-bold text-break"
                  style={{ color: "white" }}
                >
                  12 tree ambulances in Delhi by 2024: MCD
                </Card.Title>
                <Card.Text
                  className="text-center text-break"
                  style={{ color: "white" }}
                >
                  The horticulture department of the Municipal Corporation of
                  Delhi (MCD) is set to triple its fleet of tree ambulances in
                  the Capital, taking the total up to 12 — one for each of its
                  12 administrative zones — by 2024,
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={3}
            md={6}
            sm={12}
            className="position-relative d-flex flex-column align-items-center justify-content-center"
          >
            <Card className="image-card">
              <Card.Img
                variant="top"
                className="img-fluid"
                src="https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card.Body className="overlay">
                <Card.Title
                  className="text-center fw-bold text-md text-break"
                  style={{ color: "white" }}
                >
                  Hill stations may miss ‘white NY’ as snowfall dips
                </Card.Title>
                <Card.Text
                  className="text-center news-text text-md text-break"
                  style={{ color: "white" }}
                ></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Row>
              <Col
                lg={12}
                md={6}
                sm={12}
                className="mt-2 position-relative d-flex flex-column align-items-center justify-content-center"
              >
                <Card className="image-card">
                  <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/2409022/pexels-photo-2409022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                  <Card.Body className="overlay">
                    <Card.Title
                      className="text-center fw-bold text-md text-break"
                      style={{ color: "white" }}
                    >
                      Junagadh's snacks-for-plastic cafe helps recycle 3k kg
                      waste in 1.5 years
                    </Card.Title>
                    <Card.Text
                      className="text-center text-md text-break"
                      style={{ color: "white" }}
                    ></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                className="mt-2 mb-2 position-relative"
                lg={12}
                md={6}
                sm={12}
              >
                <Card className="image-card">
                  <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/2382894/pexels-photo-2382894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                  <Card.Body className="overlay">
                    <Card.Title
                      className="text-center fw-bold text-md text-break"
                      style={{ color: "white" }}
                    >
                      Voilation of waste management rules to attract fine of 1
                      year prison in Kerela
                    </Card.Title>
                    <Card.Text
                      className="text-center text-md text-break"
                      style={{ color: "white" }}
                    ></Card.Text>
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
