import React, { Component } from 'react';

const Profile = ({ firstName, lastName, imageURL }) => {

    return (
        <div className="profile">
          <div>
            <img src={ imageURL } alt="User Avatar " />
          </div>
          <p>Name: {firstName} {lastName}</p>
        </div>
    );
  }


export default Profile;
