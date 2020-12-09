import React from "react";
import { useParams } from "react-router-dom";
// import Moment from "react-moment";

function User({ data }) {
  const { id } = useParams();
  const { results } = data;
  if (!results) {
    return null;
  }

  const matchingUsers = results.filter((user) => user.login.uuid === id);
  const user = matchingUsers[0];

  return <div>{user && user.name.first}</div>;

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
