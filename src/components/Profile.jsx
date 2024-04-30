import React,{useState,useEffect} from 'react';
import './profile.css'
import axios from 'axios';

const Profile = () => {

  const [profile,setProfile] = useState({
    id:"1",
    name: "Kshiti Ghelani",
    role: "Student",
    department: "Computer Science",
    batch: "D",
    cgpa: "5.4",
    email: "abcd@gmail.com",
    phone: "1234567890",
   });


  // axios.get('https://660e2d256ddfa2943b35fefd.mockapi.io/DRIVE')
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
      <div class="container emp-profile">
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
        <div class="col-md-4"></div>
        <div class="col-md-6">
          <div class="profile-head">
          <h5>{profile.name}</h5>
          <h6>{profile.role}</h6>
          </div>
        </div>
        <div class="col-md-2">
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
            <label>Department</label>
          </div>
          <div class="col-md-6">
            {!editMode ? (
            <p>{profile.department}</p>
            ) : (
            <input
              type="text"
              value={profile.department}
              onChange={(e) =>
              setProfile({ ...profile, department: e.target.value })
              }
            />
            )}
          </div>
          </div>
          <div class="row">
          <div class="col-md-6">
            <label>Batch</label>
          </div>
          <div class="col-md-6">
            {!editMode ? (
            <p>{profile.batch}</p>
            ) : (
            <input
              type="text"
              value={profile.batch}
              onChange={(e) =>
              setProfile({ ...profile, batch: e.target.value })
              }
            />
            )}
          </div>
          </div>
          <div class="row">
          <div class="col-md-6">
            <label>CGPA</label>
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
            <label>Email</label>
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
            <label>Phone</label>
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