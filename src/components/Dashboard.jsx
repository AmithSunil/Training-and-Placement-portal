import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Drives from './Drives';
import AppliedDrives from './AppliedDrives';
import Profile from './Profile';
import './dashboard.css';
import Notifications from './Notifications';


const Dashboard = ({USER}) => {
  return (
    <div className="dash-body">
      <Sidebar user={USER} />
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
              <Route path="create drive" element={<Drives />} />
              <Route path="active drives" element={<AppliedDrives />} />
         </> )
        }

      </Routes>
    </div>
  );
};

export default Dashboard;
