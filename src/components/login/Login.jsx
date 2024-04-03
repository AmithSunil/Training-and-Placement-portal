import React, { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({setuser}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setuser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    localStorage.setItem("USER", JSON.stringify(username));
    //setting user type
    
    if(username === "admin")
      {
         navigate("/dashboard/create drives");
      }
    else{
       navigate("/dashboard/drives");
    }

  //   axios
  //     .post("http://localhost:3001/login", {
  //       username: username,
  //       password: password,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       navigate("/dashboard/Drives");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
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
            onChange={handlePasswordChange}
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
