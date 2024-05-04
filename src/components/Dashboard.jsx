import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Drives from './Drives';
import AppliedDrives from './AppliedDrives';
import Profile from './Profile';
import './dashboard.css';
import Notifications from './Notifications';
import CreateDrive from './CreateDrive';
import ActiveDrives from './ActiveDrives';
import Applicants from './Applicants';
import CreateNotifications from './CreateNotifications';
import EditUsers from './EditUser';
import CreateUser from './CreateUser';


const Dashboard = ({}) => {

  const USER = JSON.parse(localStorage.getItem("USER"));

  return(
    <div className="dash-body">
      <Sidebar USER={USER} />
      <Routes>
        {USER === "user" && (
          <>
            <Route path="drives" element={<Drives />} />
            <Route path="applied drives" element={<AppliedDrives />} />
            <Route path="profile" element={<Profile />} />
            <Route path="notifications" element={<Notifications />} /> 
            
          </>
        )}
        {
          USER === "admin" && (
            <>

              <Route path="create drive" element={<CreateDrive />} />
              <Route path="active drives" element={<ActiveDrives />} />
              <Route path="applicants" element={<Applicants/>} />
              <Route path="create notification" element={<CreateNotifications />} />
              <Route path="edit user" element={<EditUsers />} />
              <Route path="create user" element={<CreateUser />} />

         </> )
        }

      </Routes>
    </div>
  );
};

export default Dashboard;
