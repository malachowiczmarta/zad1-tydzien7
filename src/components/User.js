import React from "react";
import Moment from "react-moment";

function User({ userDetails }) {
  const { registered, name, id, location, email, picture } = userDetails;

  const dateToFormat = registered.date;

  return (
    <>
      <img src={picture.large} alt="profile" />
      <ul key={id.value}>
        <li>
          <b>Name:&nbsp;</b>
          {name.first ? name.first : "Unavailable"}
        </li>
        <li>
          <b>Surname:&nbsp;</b>
          {name.last ? name.last : "Unavailable"}
        </li>
        <li>
          <b>Address:&nbsp;</b>
          {location
            ? `${location.city} ${location.street.name}`
            : "Unavailable"}
        </li>
        <li>
          <b>Email:&nbsp;</b>
          {email}
        </li>
        <li>
          <b>Registered at:&nbsp;</b>
          <Moment>{dateToFormat}</Moment>
        </li>
      </ul>
    </>
  );
}

export default User;
