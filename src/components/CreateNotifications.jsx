import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios  from 'axios';
import './createnotifications.css';

const CreateNotifications = () => {   
    
    const [subject,setSubject] = useState("")
    const [description,setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Notification Created Successfully!",subject,description,formattedDate);
        // Handle form submission here
        

        axios
        .post(`${process.env.REACT_APP_API_URL}/user/notification/`,
        {
          message: description,
          created_at: formattedDate,
          subjects: subject
      }
      )
      .then((response) => {
        console.log(response);
        // notify("Drive Created Successfully");
          })
          .catch((error) => {
          console.log(error);
          // notify("Drive Creation Failed");
    
        });
      };

      const handleSubjectChange=(e)=>{
        setSubject(e.target.value);
      }

      const handleDescriptionChange=(e)=>{
        setDescription(e.target.value);
      }


      const currentDate = new Date();

      // Extract the individual components of the date (year, month, day)
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1; // Months are zero-based (0 = January)
      const day = currentDate.getDate();
    
      // Format the date as per your requirement (e.g., YYYY-MM-DD)
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
                        <input type="text" id="subject" name="subject" onChange={handleSubjectChange}
                        />
                    </div>
                    <div className="notification-div">
                        <label htmlFor="content">Content:</label>
                        <textarea id="content" name="content" onChange={handleDescriptionChange} rows="4" cols="30"></textarea>
                    </div>
                    <div className='notification-button'>
                    <button type="submit" onClick={handleSubmit}>Create Notification</button>
                    </div>
                </form>
            </div>
        
         
        </div>
      );
    
    
     
};

export default CreateNotifications;