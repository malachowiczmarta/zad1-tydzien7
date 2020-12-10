import React from "react";
import Moment from "react-moment";

function Details({ userDetails }) {
  if (!userDetails) {
    return null;
  }

  const dateToFormat = userDetails.registered.date;

  return (
    <div className="user-details-container">
      <img src={userDetails.picture.large} alt="profile" />
      <ul className="user-details">
        <li>
          <b>Address:&nbsp;</b>
          {userDetails.location
            ? `${userDetails.location.city} ${userDetails.location.street.name}`
            : "Unavailable"}
        </li>
        <li>
          <b>Email:&nbsp;</b>
          {userDetails.email}
        </li>
        <li>
          <b>Registered at:&nbsp;</b>
          <Moment format="YYYY/MM/DD">{dateToFormat}</Moment>
        </li>
      </ul>
    </div>
  );
}

export default Details;
