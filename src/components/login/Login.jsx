import React, { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "boxicons/css/boxicons.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const notify = (text) => toast(text);

const Login = ({ setProfile}) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const [result,setResult] = useState({});

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    //setting user type

    axios
      .post(`${process.env.REACT_APP_API_URL}/user/login/`,
      {
        email: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data.data);
        setResult(response.data.data);
        notify("Login Successful");
        window.localStorage.setItem("PROFILE",JSON.stringify(response.data.data));
        window.localStorage.setItem("USER_ID", response.data.data.id);
        if (response.data.data.is_superuser === true) {
          console.log("admin");
          window.localStorage.setItem("USER", "admin");
          navigate("/dashboard/create drive");
        } else {
        window.localStorage.setItem("USER", "user");
        navigate("/dashboard/drives");
      }
      }).catch((error) => {
        notify("Login Failed");
        console.log(error);
      });

      

    // axios
    //   .get(`${process.env.REACT_APP_API_URL}/user/login/`,
    //   {

    //   }
    //   )
    //   .then((response) => {
    //   console.log(response);
    //   })
    //   .catch((error) => {
    //   console.log(error);
    //   });
  };

  return (
    <div className="sign-in-main">
            <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
            <i className="bx bx-user"></i>
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
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
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
