import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function ThreeR() {
  return (
    <CardGroup className="mt-4">
      <Card
        className="ms-4 me-4"
        bg="dark"
        key="dark"
        text="light"
        variant="dark"
        border="primary"
      >
        <Card.Img
          variant="top"
          src="https://images.squarespace-cdn.com/content/v1/5bbfab8a92441bd0f701c276/1592948766199-YW15UMKI0G0A17V95HHB/Reduce"
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card
        className="ms-4 me-4"
        bg="dark"
        key="dark"
        text="light"
        variant="dark"
        border="primary"
      >
        <Card.Img
          variant="top"
          src="https://images.squarespace-cdn.com/content/v1/5bbfab8a92441bd0f701c276/1592948985464-XU8R2X4TARBQ7XDZ1ZPM/Reuse"
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card
        className="ms-4 me-4"
        bg="dark"
        key="dark"
        text="light"
        variant="dark"
        border="primary"
      >
        <Card.Img
          variant="top"
          src="https://images.squarespace-cdn.com/content/v1/5bbfab8a92441bd0f701c276/1592948893994-ZYVWQAHXQQ5KNJJYSZ5P/Recycle"
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default ThreeR;
