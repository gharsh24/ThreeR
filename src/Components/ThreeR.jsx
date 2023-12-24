import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function News() {
  return (
    <>
      <h1 className="text-center mt-4 fw-bold">The Three R's</h1>
      <Container className="mt-4">
        <Row>
          <Col
            sm={4}
            className="position-relative d-flex flex-column align-items-center justify-content-center"
          >
            <Card className="image-card">
              <Card.Img
                variant="top"
                className="img-fluid"
                src="https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card.Title className="text-center default-text-2 ">
                Reduce
              </Card.Title>
              <Card.Body className="overlay">
                <Card.Text className="text-center" style={{ color: "white" }}>
                  This involves minimizing the generation of waste by using
                  fewer resources. It encourages a more mindful and efficient
                  use of materials and products. This could include strategies
                  such as using eco-friendly packaging, reducing energy
                  consumption, and adopting practices that lead to less waste in
                  the first place.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col
            sm={4}
            className="position-relative d-flex flex-column align-items-center justify-content-center"
          >
            <Card className="image-card">
              <Card.Img
                variant="top"
                className="img-fluid"
                src="https://thiskindplanet.com/wp-content/uploads/2021/06/reuse-plastic.jpg"
              />
              <Card.Title className="text-center default-text-2">
                Reuse
              </Card.Title>
              <Card.Body className="overlay">
                <Card.Text className="text-center" style={{ color: "white" }}>
                  The "Reuse" principle emphasizes finding ways to use items
                  again, either in their original form or by repurposing them.
                  This can involve using refillable containers, repairing items
                  instead of discarding them, or donating goods for others to
                  use.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm={4}
            className="position-relative d-flex flex-column align-items-center justify-content-center"
          >
            <Card className="image-card">
              <Card.Img
                variant="top"
                className="img-fluid"
                src="https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=950&dpr=1"
              />
              <Card.Title className="text-center default-text-2 ">
                Recycle
              </Card.Title>
              <Card.Body className="overlay">
                <Card.Text className="text-center" style={{ color: "white" }}>
                  Recycling involves the collection and processing of materials
                  to create new products. It's a method of managing waste by
                  converting it into raw materials for the production of new
                  goods. Common materials for recycling include paper, glass,
                  plastic, and metal.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>{" "}
    </>
  );
}

export default News;
