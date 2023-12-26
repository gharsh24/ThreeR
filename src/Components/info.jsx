import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import "./Styles/style.css"; // Import your custom styles
function Info() {
  return (
    <>
      <h1 className="text-center mt-4 fw-bold">
        Turn your points into Rewards.
      </h1>
      <Container>
        <Row className="mt-4">
          <Col sm={4}>
            <Card
              className="info-card mt-2"
              style={{
                backgroundImage: `linear-gradient(${0}deg, #737DFE , #FFCAC9)`,
              }}
            >
              <Card.Body>
                <h2 className="text-center fw-bold">Sign Up</h2>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  Step 1
                </Card.Subtitle>

                <Card.Text>
                  Sign Up to our website and get 100 points as a welcome bonus.
                  Dont worry its free and will always will be. Just go to the
                  sign up page and fill in the details.
                </Card.Text>
                <Card.Link href="#">Sign Up Now</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card
              className="info-card mt-2"
              style={{
                backgroundImage: `linear-gradient(${0}deg, #737DFE , #FFCAC9)`,
              }}
            >
              <Card.Body>
                <h2 className="text-center fw-bold">Earn Points</h2>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  Step 2
                </Card.Subtitle>
                <Card.Text>
                  Earn points by participating in activities such as planting or
                  adopting trees, joining environmental education programs,
                  taking quizzes, and signing up for newsletters.
                </Card.Text>
                <Card.Link href="#">See Activities</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4}>
            <Card
              className="info-card mt-2"
              style={{
                backgroundImage: `linear-gradient(${0}deg, #737DFE , #FFCAC9)`,
              }}
            >
              <Card.Body>
                <h2 className="text-center fw-bold">Redeem Points</h2>
                <Card.Subtitle className="mb-2 text-muted text-center">
                  Step 3
                </Card.Subtitle>
                <Card.Text>
                  Redeem your points for rewards such as discounts, coupons, and
                  freebies from our partner recycled product stores.
                </Card.Text>
                <Card.Link href="#">Explore Store</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Info;
