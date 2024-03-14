import React, { useEffect, useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username,password)
    navigate('/dashboard');
  };



  return (
    <div className="signinbody">
        <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="Enter email"
            onChange={handleUsernameChange}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter password"
            onClick={handlePasswordChange}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
         
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
     
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  );
};

export default Login;



// <h1>Login</h1>
// <form onSubmit={handleSubmit}>
//   <div>
//     <label htmlFor="username">Username:</label>
//     <input
//       type="text"
//       id="username"
//       value={username}
//       onChange={handleUsernameChange}
//     />
//   </div>
//   <div>
//     <label htmlFor="password">Password:</label>
//     <input
//       type="password"
//       id="password"
//       value={password}
//       onChange={handlePasswordChange}
//     />
//   </div>
//   <button type="submit">Login</button>
  