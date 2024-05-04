import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./editusers.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";



const notify = (text) => toast(text)

const EditUsers = () => {
  const [user, setUserData] = useState({
    email: "",
    first_name: "John",
    last_name: "Doe",
    made_password: "password",
    backlogs: 0,
    gpa: 7.5,
    backlog_history: true
  });

  const [userval, setUser] = useState("");
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...user, [name]: value });
  };

  const handleSearchChange = (e) => {
    setUser (e.target.value );
  };

  const handleSearch = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/users/admin/`,{
        params: {
            username: userval
        }
        
    })
        .then((response) => {
          console.log(response);
          setUserData(response.data);
          if (response.message === "User Details") {
                notify("User Found!");
            setEditing(true);
          }
          else {
            notify("User Not Found!");
          }
        })
        .catch((error) => {
            console.log(error);
        })

    setEditing(true);
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    axios.put(`${process.env.REACT_APP_API_URL}/users/admin/`, user)
      .then((response) => {
        console.log(response);
        notify("User Updated Successfully!");
      })
      .catch((error) => {
        console.log(error);
        notify("Error Updating User!");
      });
  };

  const handleDelete = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/users/admin/`, user)
      .then((response) => {
        console.log(response);
        notify("User Deleted Successfully!");
      })
      .catch((error) => {
        console.log(error);
        notify("Error Deleting User!");
      });
  };

  return (
    <div className="edit-users-container">
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
      <h2 className="edit-users-heading">Edit User</h2>
      {!editing && (
        <div className="search-bar">
          <label className="search-label">Enter Username:</label>
          <input
            type="text"
            name="username"
            value={userval}
            onChange={handleSearchChange}
            className="search-input"
          />
          <Button onClick={handleSearch} className="search-button">Search</Button>
        </div>
      )}
      {editing && (
        <form className="edit-form">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <label>First Name:</label>
          <input
            type="text"
            name="first_name"
            value={user.first_name}
            onChange={handleChange}
          />
          <label>Last Name:</label>
          <input
            type="text"
            name="last_name"
            value={user.last_name}
            onChange={handleChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="made_password"
            value={user.made_password}
            onChange={handleChange}
          />
          <label>Backlogs:</label>
          <input
            type="number"
            name="backlogs"
            value={user.backlogs}
            onChange={handleChange}
          />
          <label>GPA:</label>
          <input
            type="number"
            name="gpa"
            value={user.gpa}
            onChange={handleChange}
          />
          <label>Backlog History:</label>
          <select
            name="backlog_history"
            value={user.backlog_history}
            onChange={handleChange}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <Button type="button" onClick={handleSubmit}>Update User</Button>
          <Button type="button" onClick={handleDelete}>Delete User</Button>
        </form>
      )}
    </div>
  );
};

export default EditUsers;
