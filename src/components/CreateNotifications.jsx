import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import './createnotifications.css';
import 'react-toastify/dist/ReactToastify.css';

const notify = (text) => toast(text);

const CreateNotifications = () => {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URL}/user/notification/`, {
        message: description,
        created_at: formattedDate,
        subjects: subject,
      })
      .then((response) => {
        console.log(response);
        notify('Notification Created Successfully');
        setDescription('');
        setSubject('');
      })
      .catch((error) => {
        console.log(error);
        notify('Notification Creation Failed');
      });
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

  return (
    <div className="notification-main">
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
      <div className="notifications-body">
        <form className="notification-form">
          <h2>Create Notification</h2>
          <div className="notification-div">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" value={subject} onChange={handleSubjectChange} />
          </div>
          <div className="notification-div">
            <label htmlFor="content">Content:</label>
            <textarea id="content" name="content" value={description} onChange={handleDescriptionChange} rows="4" cols="30"></textarea>
          </div>
          <div className="notification-button">
            <button type="submit" onClick={handleSubmit}>Create Notification</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNotifications;
