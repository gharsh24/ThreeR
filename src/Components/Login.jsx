import {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {auth} from "../firebase-config";
import {signInWithEmailAndPassword} from 'firebase/auth';
import Navbarr from './Navbar';
import "./styles/login.css";


function Login({setAuth}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate=useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setAuth(true);
                navigate('/user');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
      };
    return <>
        <Navbarr/>
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
    <form style={{color:'black '}} className='formm'>
        <h3>Login</h3>

        <label className='labell' for="username">Email</label>
        <input className='inputt' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email or Phone" id="username"/>

        <label className='labell' for="password">Password</label>
        <input className='inputt' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" id="password"/>

        <button className='buttonn' onClick={handleSignUp}>Login</button><br/>
        <p>New user? <Link to="/signup" style={{color:'black', textDecoration:'none'}}>Sign Up</Link></p>
    </form>
    </>
}

export default Login;
