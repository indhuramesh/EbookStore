import React from 'react';
import profileLogo from '../img/profile-logo.png'; // Replace with the path to your logo file

function ProfileLogo() {
  return (
    <div className="profile-logo">
      <img src={profileLogo} alt="Profile Logo" />
    </div>
  );
}

export default ProfileLogo;
