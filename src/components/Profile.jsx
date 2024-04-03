import React from 'react';

import './profile.css'
import profimg from './logo.svg'

const Profile = () => {
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
          <div class="col-md-4">
            <div class="profile-img">
              <img src={profimg} alt="" />
              <div class="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="profile-head">
              <h5>Kshiti Ghelani</h5>
              <h6>Student</h6>
            </div>
          </div>
          <div class="col-md-2">
            <input
              type="submit"
              class="profile-edit-btn"
              name="btnAddMore"
              value="Edit Profile"
            />
          </div>
        </div>
        <div class="row-2">
          <div class="tab-content profile-tab" id="myTabContent">
            <div class="row">
              <div class="col-md-6">
                <label>Department</label>
              </div>
              <div class="col-md-6">
                <p>Computer Science</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label>Batch</label>
              </div>
              <div class="col-md-6">
                <p>D</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label>Email</label>
              </div>
              <div class="col-md-6">
                <p>whoareyou@gmail.com</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label>Phone</label>
              </div>
              <div class="col-md-6">
                <p>1234567890</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label>Address</label>
              </div>
              <div class="col-md-6">
                <p>123, Green Valley Cherthala, Alappuzha Kerala, India</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
     );
}
 



export default Profile;