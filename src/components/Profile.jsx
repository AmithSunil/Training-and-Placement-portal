import React,{useState,useEffect} from 'react';
import './profile.css'
import axios from 'axios';

const Profile = () => {

  const [profile,setProfile] = useState({
    id:"1",
    name: "Kshiti Ghelani",
    role: "Student",
    department: "Computer Science",
    cgpa: "5.4",
    email: "abcd@gmail.com",
    phone: "1234567890",
    backlogs: "0",
    backlog_history: false,
    password : "12345678"
   });


  // axios.get(`${process.env.REACT_APP_API}/user/admin`,{{username:}})
  //   .then((response) => {
  //     setProfile(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });



    const [editMode, setEditMode] = useState(false);

    const handleEditProfile = () => {
      setEditMode(true);
    };

    const handleSaveProfile = () => {
      // Save the updated profile data
      // You can use axios.put() or any other method to update the profile data

      setEditMode(false);
      console.log(profile);
    };

    return (
      <div class="emp-profile">
      <header>
        <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
        ></link>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      </header>
      <form method="post">
        <div class="row-1">
        <div class="col-md-6">
          <div class="profile-head">
          <h5>{profile.name}</h5>
          <h6>{profile.role}</h6>
          </div>
        </div>
        <div class="col-md-6">
          {!editMode ? (
          <input
            type="button"
            class="profile-edit-btn"
            name="btnAddMore"
            value="Edit Profile"
            onClick={handleEditProfile}
          />
          ) : (
          <input
            type="button"
            class="profile-edit-btn"
            name="btnSave"
            value="Save Profile"
            onClick={handleSaveProfile}
          />
          )}  
        </div>
        </div>
        <div class="row-2">
        <div class="tab-content profile-tab" id="myTabContent">
          <div class="row">
          <div class="col-md-6">
            <label>Password:</label>
          </div>
          <div class="col-md-6">
            {!editMode ? (
            <p>{profile.password}</p>
            ) : (
            <input
              type="text"
              value={profile.password}
              onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
              }
            />
            )}
          </div>
          <div class="col-md-6">
            <label>Department:</label>
          </div>
          <div class="col-md-6">
            {!editMode ? (
            <p>{profile.department}</p>
            ) : (
              <select
              value={profile.department}
              onChange={(e) =>
                setProfile({ ...profile, department: e.target.value })
              }
            >
              <option value="Computer Science Engineering">Computer Science Engineering</option>
              <option value="Electronics And Communication">Electronics And Communication</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              <option value="Electrical And Electronics Engineering">Electrical And Electronics Engineering</option>
            </select>
            
            )}
          </div>
          </div>
          <div class="row">
          <div class="col-md-6">
            <label>Backlogs:</label>
          </div>
          <div class="col-md-6">
            {!editMode ? (
            <p>{profile.backlogs}</p>
            ) : (
            <input
              type="text"
              value={profile.backlogs}
              onChange={(e) =>
              setProfile({ ...profile, backologs: e.target.value })
              }
            />
            )}
          </div>
          <div class="col-md-6">
            <label>Backlog History:</label>
          </div>
          <div class="col-md-6">
          {!editMode ? (
            <p>{profile.backlog_history}</p>
            ) : (
              <select
              value={(profile.backlog_history?"YES":"NO")}
              onChange={(e) =>
                setProfile({ ...profile, backlog_history: e.target.value })
              }
            >
              <option value={true}>YES</option>
              <option value={false}>NO</option>
            </select>
            
            )}
          </div>
          </div>
          <div class="row">
          <div class="col-md-6">
            <label>CGPA:</label>
          </div>
          <div class="col-md-6">
            {!editMode ? (
            <p>{profile.cgpa}</p>
            ) : (
            <input
              type="text"
              value={profile.cgpa}
              onChange={(e) =>
              setProfile({ ...profile, cgpa: e.target.value })
              }
            />
            )}
          </div>
          </div>
          <div class="row">
          <div class="col-md-6">
            <label>Email:</label>
          </div>
          <div class="col-md-6">
            {!editMode ? (
            <p>{profile.email}</p>
            ) : (
            <input
              type="text"
              value={profile.email}
              onChange={(e) =>
              setProfile({ ...profile, email: e.target.value })
              }
            />
            )}
          </div>
          </div>
          <div class="row">
          <div class="col-md-6">
            <label>Phone:</label>
          </div>
          <div class="col-md-6">
            {!editMode ? (
            <p>{profile.phone}</p>
            ) : (
            <input
              type="text"
              value={profile.phone}
              onChange={(e) =>
              setProfile({ ...profile, phone: e.target.value })
              }
            />
            )}
          </div>
          </div>
          <div class="row">
          <div class="col-md-6">
          </div>
          </div>
        </div>
        </div>
      </form>
      </div>
    );
}
 



export default Profile;



// "id": "ea3e6612-cba6-4197-8509-788b6706b521",
//         "username": "Sunil",
//         "email": "sunikuttan@gmail.com",
//         "first_name": "suni",
//         "last_name": "Sunil",
//         "is_superuser": false,
//         "last_login": "2024-05-04T15:07:45.643445Z",
//         "made_password": "unda",
//         "backlogs": 0,
//         "gpa": 7.5,
//         "backlog_history": true,
//         "department": "CSE",
//         "groups": [],
//         "user_permissions": []
    