import React, { useState, useEffect } from "react";
import "./applicants.css";
import axios from "axios";

const Applicants = (id) => {
  const [applicants,setApplicants] = useState([])




  const getApplicants = async () => {
    
    const user = await axios
    .patch("https://tpc-backend.onrender.com/drives/apply-drive/", 
    {
      drive_id: id.id
    }
   
  )
    .then((response) => {
      console.log(response);
      setApplicants(response.data)
    })
    .catch((error) => {

    });
    return user

  }

  useEffect(() => {
    getApplicants();
    console.log("id",id)
   
  }, []);
  

  return (
    <div className="applicants-main">
      <table className="table">
        <thead> 
          <tr>
            <th scope="col">Index</th>
            <th scope="col">Name</th>
            <th scope="col">Branch</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant,ind) => (
            <tr key={applicant.id}>
              <th scope="row">{ind+1}</th>
              <td>{applicant.first_name+" "+applicant.last_name}</td>
              <td>{applicant.department}</td>
              <td>{applicant.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Applicants;
