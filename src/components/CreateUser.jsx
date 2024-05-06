import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "./createuser.css";

const notify = (text) => toast(text);

const CreateUser = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    made_password: "",
    backlogs: 0,
    gpa: 0,
    backlog_history: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "first_name" || name === "last_name") {
      // Generate username based on first name and last name
      const username = (user.first_name + user.last_name).toLowerCase();
      setUser({ ...user, [name]: value, username: username });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Creating user:", user);
    axios
      .post(`${process.env.REACT_APP_API_URL}/admin/create`, user)
      .then((response) => {
        notify("User Created Successfully!");
        console.log("User created:", response.data);
        // Reset user state after successful creation
        setUser({
          email: "",
          first_name: "",
          last_name: "",
          made_password: "",
          backlogs: 0,
          department: "",
          gpa: 0,
          backlog_history: true,
        });
      })
      .catch((error) => {
        notify("Error creating user!");
        console.error("Error creating user:", error);
      });
  };

  return (
    <div className="create-user-container">
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
      <form onSubmit={handleSubmit} className="create-user-form">
        <h2 className="create-user-heading">Create User</h2>
        <div className="form-attributes">
          <div className="attribute">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="attribute">
            <label>First Name:</label>
            <input
              type="text"
              name="first_name"
              value={user.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="attribute">
            <label>Last Name:</label>
            <input
              type="text"
              name="last_name"
              value={user.last_name}
              onChange={handleChange}
            />
          </div>
          <div className="attribute">
            <label>Password:</label>
            <input
              type="password"
              name="made_password"
              value={user.made_password}
              onChange={handleChange}
            />
          </div>
          <div className="attribute">
            <label>Backlogs:</label>
            <input
              type="number"
              name="backlogs"
              value={user.backlogs}
              onChange={handleChange}
            />
          </div>
          <div className="attribute">
            <label>Department:</label>
            <select value={user.department} onChange={handleChange}>
              <option value="Computer Science Engineering">
                Computer Science Engineering
              </option>
              <option value="Electronics And Communication">
                Electronics And Communication
              </option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Electrical And Electronics Engineering">
                Electrical And Electronics Engineering
              </option>
            </select>
          </div>
          <div className="attribute">
            <label>GPA:</label>
            <input
              type="number"
              name="gpa"
              value={user.gpa}
              onChange={handleChange}
            />
          </div>
          <div className="attribute">
            <label>Backlog History:</label>
            <select
              name="backlog_history"
              value={user.backlog_history}
              onChange={handleChange}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
        </div>
        <div className="create-user-button">
          <Button type="submit">Create User</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
