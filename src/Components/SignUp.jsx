import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Navbarr from "./Navbar";
import Footer from "./Footer";
import "./styles/login.css";

function SignUp({ setAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setAuth(true);
        console.log(user);
        navigate("/user");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  return (
    <div className="login-page">
      <Navbarr />
      <div className="background mt-4">
        <div className="shape mt-4"></div>
        <div className="shape mt-4"></div>
      </div>
      <form className=" formm" style={{ color: "black" }}>
        <h3>Sign Up</h3>

        <label className="labell">Email</label>
        <input
          className="inputt"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          id="username"
        />

        <label className="labell">Password</label>
        <input
          className="inputt"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          id="password"
        />

        <button className="buttonn" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default SignUp;
