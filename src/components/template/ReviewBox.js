import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function ReviewBox() {
  return (
    <div id="reviewBox">
      <span id="message">
        Thanks for sharing your experience with us! loved it!
      </span>
      <div id="profile">
        <AccountCircleIcon fontSize="large" />
        <p>Naresh Jangir</p>
      </div>
    </div>
  );
}

export default ReviewBox;
