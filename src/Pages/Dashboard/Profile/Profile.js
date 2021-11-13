import React from "react";
import useAuth from "../../../hook/useAuth";
import "./Profile.css";
const Profile = () => {
  const { Allcontext } = useAuth();
  const { user } = Allcontext;
  return (
    <div>
      <div style={{width:"37%",backgroundColor:"#FFFFFF"}} className="profile mx-auto py-5 my-5 shadow">
        <div>
          <div className="profile-img">
            <img style={{width:"100px",borderRadius:"100px"}} src={user.photoURL} alt="" />
          </div>
          <div>
            <h3>{user.displayName}</h3>
          </div>
          <div>
            <h5>{user.email}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
