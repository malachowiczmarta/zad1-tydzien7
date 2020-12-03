import React from "react";
import Moment from "react-moment";

function User({ userDetails }) {
  const { registered, name, id, location, email, picture } = userDetails;

  const dateToFormat = registered.date;

  return (
    <>
      <img src={picture.large} alt="profile" />
      <ul key={id.value}>
        <li>{name.first || "First name not provided"}</li>
        <li>{name.last || "Last name not provided"}</li>
        <li>{location.city + " " + location.street.name}</li>
        <li>{email}</li>
        <li>
          <Moment>{dateToFormat}</Moment>
        </li>
      </ul>
    </>
  );
}

export default User;
