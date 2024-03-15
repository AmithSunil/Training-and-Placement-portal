import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Drives from './Drives';
import AppliedDrives from './AppliedDrives';
import Profile from './Profile';
import './dashboard.css';


const Dashboard = () => {
  return (
      <div className="dash-body">
      <Sidebar />
        <Routes>
          <Route path="drives" element={<Drives />} />
          <Route path="applieddrives" element={<AppliedDrives />} />
          <Route path="profile" element={<Profile />} />
          {/* <Route path="/upcoming" component={Upcoming}>
        </Route> */}
        </Routes>
    </div>
 
 
  );
};

export default Dashboard;
