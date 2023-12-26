import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbarr() {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary bg-dark sticky-top"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src="../public/assets/brandimg.png"
              width="80"
              height="80"
              className="d-inline-block align-top img-fluid"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="ms-2">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/user" className="ms-2">
                User dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/store" className="ms-2">
                Store
              </Nav.Link>
              <Nav.Link as={Link} to="/feedback" className="ms-2">
                Feedback
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarr;
