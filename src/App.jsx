// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import MovingBg from "./Components/movingBg";
// import Store from "./Components/Store";
// import FeedbackForm from "./Components/FeedbackForm";
// import UserDashboard from "./Components/UserDashboard";
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Carosel from "./Components/Carosel";
// import Navbarr from "./Components/Navbar";
// import Event from "./Components/Events";
// import Publ from "./Components/Publications";
// import SignUp from "./Components/SignUp";
// import Login from "./Components/Login";
// import { auth } from "./firebase-config";
// import Footer from "./Components/Footer";
// import News from "./Components/News";
// import GoalsFinal from "./Components/GoalsFinal";
// import RecycleRR from "./Components/RecycleRR";
// import Points from "./Components/Points";
// import { Audio } from "react-loader-spinner";

// function App() {
//   const [isAuth, setAuth] = useState(false);
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Audio
//                   height="80"
//                   width="80"
//                   radius="9"
//                   color="green"
//                   ariaLabel="three-dots-loading"
//                   wrapperStyle
//                   wrapperClass
//                 />
//                 <Navbarr isAuth={isAuth} />
//                 <MovingBg />
//                 <RecycleRR />
//                 <GoalsFinal />
//                 <Points />
//                 <News />
//                 <Event />
//                 <Publ />
//                 <Footer />
//               </>
//             }
//           ></Route>
//           <Route
//             path="/user"
//             element={
//               <>
//                 {" "}
//                 <UserDashboard />
//                 <Footer />
//               </>
//             }
//           ></Route>
//           <Route
//             path="/signin"
//             element={
//               <>
//                 <Login setAuth={setAuth} />
//               </>
//             }
//           ></Route>
//           <Route
//             path="/signup"
//             element={
//               <>
//                 <SignUp setAuth={setAuth} />
//               </>
//             }
//           ></Route>
//           <Route
//             path="/store"
//             element={
//               <>
//                 <Navbarr isAuth={isAuth} />
//                 <Store />
//                 <Footer />
//               </>
//             }
//           ></Route>
//           <Route
//             path="/Feedback"
//             element={
//               <>
//                 <Navbarr isAuth={isAuth} />
//                 <FeedbackForm />
//                 <Footer />
//               </>
//             }
//           ></Route>
//         </Routes>
//       </Router>
//       {/* <MovingBg /> */}
//     </>
//   );
// }

// export default App;

// // Wolfram API App id -> 4A54TQ-UJH9LPK768

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Triangle } from "react-loader-spinner";
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; // Import loader styles
import Navbarr from "./Components/Navbar";
import MovingBg from "./Components/movingBg";
import RecycleRR from "./Components/RecycleRR";
import GoalsFinal from "./Components/GoalsFinal";
import Points from "./Components/Points";
import News from "./Components/News";
import Event from "./Components/Events";
import Publ from "./Components/Publications";
import Footer from "./Components/Footer";
import UserDashboard from "./Components/UserDashboard";
import Store from "./Components/Store";
import FeedbackForm from "./Components/FeedbackForm";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

function App() {
  const [isAuth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading (replace with your actual logic)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {loading && (
                  <div className="loader">
                    <Triangle
                      height={80}
                      width={80}
                      radius={15}
                      color="#2b3035"
                      ariaLabel="three-dots-loading"
                    />
                  </div>
                )}
                {!loading && (
                  <>
                    <Navbarr isAuth={isAuth} />
                    <MovingBg />
                    <RecycleRR />
                    <GoalsFinal />
                    <Points />
                    <News />
                    <Event />
                    <Publ />
                    <Footer />
                  </>
                )}
              </>
            }
          ></Route>
          <Route
            path="/user"
            element={
              <>
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
    </>
  );
}

export default App;
