import React from "react";
import { useParams, Link } from "react-router-dom";
import Moment from "react-moment";

function User({ data }) {
  const { id } = useParams();
  const { results } = data;
  console.log(results);
  if (!results) {
    return null;
  }

  const matchingUsers = results.filter((elem) => elem.login.uuid === id);
  const user = matchingUsers[0];
  const dateToFormat = user.registered.date;

  console.log(dateToFormat);
  // const {name, location, email} = user;

  return (
    <>
      <Link to="/">&larr; Wróć do listy</Link>
      <div className="user-container">
        <img src={user.picture.large} alt="profile" />
        <h2>
          {user.name.first
            ? `${user.name.first} ${user.name.last}`
            : "Unavailable"}
        </h2>
        <ul>
          <li>
            <b>Address:&nbsp;</b>
            {user.location
              ? `${user.location.city} ${user.location.street.name}`
              : "Unavailable"}
          </li>
          <li>
            <b>Email:&nbsp;</b>
            {user.email}
          </li>
          <li>
            <b>Registered at:&nbsp;</b>
            <Moment format="YYYY/MM/DD">{dateToFormat}</Moment>
          </li>
        </ul>
      </div>
    </>
  );

  // return (
  //   <>
  //     <img src={picture.large} alt="profile" />
  //     <ul key={id.value}>
  //       <li>
  //         <b>Name:&nbsp;</b>
  //         {name.first ? name.first : "Unavailable"}
  //       </li>
  //       <li>
  //         <b>Surname:&nbsp;</b>
  //         {name.last ? name.last : "Unavailable"}
  //       </li>
  //       <li>
  //         <b>Address:&nbsp;</b>
  //         {location
  //           ? `${location.city} ${location.street.name}`
  //           : "Unavailable"}
  //       </li>
  //       <li>
  //         <b>Email:&nbsp;</b>
  //         {email}
  //       </li>
  //       <li>
  //         <b>Registered at:&nbsp;</b>
  //         <Moment>{dateToFormat}</Moment>
  //       </li>
  //     </ul>
  //   </>
  // );
}

export default User;
