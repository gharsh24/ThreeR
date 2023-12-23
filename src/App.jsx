import "bootstrap/dist/css/bootstrap.min.css";
import MovingBg from "./Components/movingBg";
import Store from "./Components/Store";
import FeedbackForm from "./Components/FeedbackForm";
import UserDashboard from "./Components/UserDashboard";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    <>
        <Router>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
                ThreeR
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/user">User dashboard</Nav.Link>
              <Nav.Link as={Link} to="/store">Store</Nav.Link>
              <Nav.Link as={Link} to="/feedback">Feedback</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        
        <Routes>
          <Route path="/" element={<MovingBg />}></Route>
          <Route path="/user" element={<UserDashboard/>}></Route>
          <Route path="/store" element={<Store  />}></Route>
          <Route path="/Feedback" element={<FeedbackForm  />}></Route>
        </Routes>
      </Router>
      {/* <MovingBg /> */}
    </>
  );
}

export default App;
