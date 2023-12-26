import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaUser, FaCog, FaBell, FaHome, FaStore } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { TiShoppingCart } from "react-icons/ti";
import { FcFeedback } from "react-icons/fc";
import "./Styles/style.css"; // Import your custom styles
import PointsHistoryTable from "./PointsHistory";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import PieChart from "./PieChart";

import { useEffect } from "react";
import LineChart from "./LineChart";

const options = [
  {
    name: "Enable scrolling and disable backdrop",
    scroll: true,
    backdrop: false,
  },
];

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false); // Set to false by default

  // const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  useEffect(() => {
    // Use a media query to determine screen size and set initial show state
    const mediaQuery = window.matchMedia("(min-width: 50em)"); // Adjust the min-width value
    setShow(mediaQuery.matches);
  }, []);

  const handleClose = () => {
    // Use a media query to determine screen size
    const mediaQuery = window.matchMedia("(max-width: 50em)"); // Adjust the max-width value
    if (mediaQuery.matches) {
      // Close the Offcanvas only on screens smaller than 64em
      setShow(false);
    }
  };
  return (
    <>
      <Button variant="primary" onClick={toggleShow} className="me-2">
        {"Open Side View"}
      </Button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        className="bg-dark text-light"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="bg-dark text-light">
            User Dashboard
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-dark text-light">
          {/* Navigation Options */}

          <div>
            <Button variant="outline-light" className="mb-2 mt-2">
              <FaUser className="me-2" />
              User Profile
            </Button>
          </div>
          <div>
            <Button variant="outline-light" className="mb-2 mt-3">
              <FaCog className="me-2" />
              Settings
            </Button>
          </div>
          <div>
            <Button variant="outline-light mt-3">
              <FaBell className="me-2" />
              Notifications
            </Button>
          </div>
          <div>
            <Button variant="outline-light mt-3">
              <SlCalender className="me-2" />
              Upcoming Events
            </Button>
          </div>
          <div>
            <Button variant="outline-light mt-3">
              <TiShoppingCart className="me-2" />
              User Cart
            </Button>
          </div>

          {/* Footer Navigation */}
          <hr className="text-light mt-4 mb-3" />
          <div>
            <Link to="/" className="btn btn-outline-light mb-2 mt-2">
              <FaHome className="me-2" />
              Home
            </Link>
          </div>
          <div>
            <Link to="/store" className="btn btn-outline-light mb-2">
              <FaStore className="me-2" />
              Store
            </Link>
          </div>
          <div>
            <Link to="/feedback" className="btn btn-outline-light mb-2">
              <FcFeedback className="me-2" />
              Feedback
            </Link>
          </div>
          {/* Add other footer navigation options as needed */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function X() {
  const [show, setShow] = useState(true);

  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
      <div className="offcanvas-opened">
        {/* Your main content goes here */}
        <h1 className="text-center fw-bold">Your EcoHub</h1>
        <CardGroup className="mt-4 mb-4">
          <Card
            className="ms-2"
            style={{
              backgroundImage: `linear-gradient(${0}deg, #737DFE , #FFCAC9)`,
            }}
          >
            <Card.Body>
              <Card.Title className="fw-bold">Your Points</Card.Title>
              <Card.Text>300</Card.Text>
            </Card.Body>

            <Card.Footer>10 More to next Reward</Card.Footer>
          </Card>
          <Card
            className="ms-2"
            style={{
              backgroundImage: `linear-gradient(${0}deg, #737DFE , #FFCAC9)`,
            }}
          >
            <Card.Body>
              <Card.Title className="fw-bold">Task Completed</Card.Title>
              <Card.Text>10</Card.Text>
            </Card.Body>

            <Card.Footer>2 Tasks left for this Week</Card.Footer>
          </Card>
          <Card
            className="ms-2 me-3"
            style={{
              backgroundImage: `linear-gradient(${0}deg, #737DFE , #FFCAC9)`,
            }}
          >
            <Card.Body>
              <Card.Title className="fw-bold">Longest Streak</Card.Title>
              <Card.Text>19 Days</Card.Text>
            </Card.Body>
            <Card.Footer> Beats 82% of people </Card.Footer>
          </Card>
        </CardGroup>
        <p>
          <PointsHistoryTable />
          <PieChart />
          <LineChart />
        </p>
        {/* ... */}
      </div>
    </>
  );
}

function MainContent() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  return (
    <div className={`main-content ${showOffcanvas} ? "offcanvas-opened" : ""}`}>
      {/* Your main content goes here */}
      <h1>Main Content</h1>
      <p>Your content here...</p>
      {/* ... */}
    </div>
  );
}

function UserDashboard() {
  return (
    <>
      <X />
    </>
  );
}

export default UserDashboard;
