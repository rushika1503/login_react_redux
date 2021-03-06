import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import "./Login.css"
import { login } from '../features/userSlice';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        var data = {email:email,password:password}
        e.preventDefault();
        dispatch(
            login({
           
              email: email,
              password: password,
              loggedIn: true,
            })
          );
      
          setEmail("");
          setPassword("");
    };
        
    
    return (
        <div className="login">
          <form className="login_form" onSubmit={(e) => handleSubmit(e)} >
             <h1>Login Here</h1>
             <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
             <input type="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} />
             <button type="submit" className="submit_button">Submit </button>
         
          </form>

        </div>
    )
}

export default Login
