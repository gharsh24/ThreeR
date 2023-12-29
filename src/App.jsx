import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovingBg from "./Components/movingBg";
import Store from "./Components/Store";
import FeedbackForm from "./Components/FeedbackForm";
import UserDashboard from "./Components/UserDashboard";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carosel from "./Components/Carosel";
import Navbarr from "./Components/Navbar";
import Event from "./Components/Events";
import Publ from "./Components/Publications";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import { auth } from "./firebase-config";
import Footer from "./Components/Footer";
import News from "./Components/News";
import GoalsFinal from "./Components/GoalsFinal";
import RecycleRR from "./Components/RecycleRR";
import Points from "./Components/Points";


function App() {
  const [isAuth, setAuth] = useState(false);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbarr isAuth={isAuth} />
                <MovingBg />
                <RecycleRR />
                <GoalsFinal/>
                <Points />
                <News />
                <Event />
                <Publ />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/user"
            element={
              <>
                {" "}
                <UserDashboard />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/signin"
            element={
              <>
                <Login setAuth={setAuth} />
              </>
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <>
                <SignUp setAuth={setAuth} />
              </>
            }
          ></Route>
          <Route
            path="/store"
            element={
              <>
                <Navbarr isAuth={isAuth} />
                <Store />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/Feedback"
            element={
              <>
                <Navbarr isAuth={isAuth} />
                <FeedbackForm />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </Router>
      {/* <MovingBg /> */}
    </>
  );
}

export default App;

// Wolfram API App id -> 4A54TQ-UJH9LPK768
