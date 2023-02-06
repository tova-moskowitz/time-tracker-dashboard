import React from "react";
import "../style/App.css";
import ProfilePic from "../images/image-jeremy.png";
import Timeframes from "./Timeframes";

function UserProfileCard({ user, clickHandler }) {
  return (
    <>
      <div className="profileWrapper">
        <div className="profile">
          <img className="profilePic" src={ProfilePic} alt="" />
          <p>Report For </p>
          <span className="userName">{user}</span>
        </div>
        <Timeframes clickHandler={clickHandler} />
      </div>
    </>
  );
}

export default UserProfileCard;
