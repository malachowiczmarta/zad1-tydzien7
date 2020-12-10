import React from "react";
import { useParams, Link } from "react-router-dom";
import Details from "./Details";
import MapUser from "./Map";

function User({ data }) {
  const { id } = useParams();
  const { results } = data;

  if (!results) {
    return null;
  }

  const matchingUsers = results.filter((elem) => elem.login.uuid === id);
  const user = matchingUsers[0];

  // const {name, location, email} = user;

  return (
    <>
      <Link to="/">&larr; Wróć do listy</Link>
      <article className="user-details-wrapper">
        <div>
          <h2>
            {user.name.first
              ? `${user.name.first} ${user.name.last}`
              : "Unavailable"}
          </h2>
          <Details userDetails={user} />
        </div>
        <MapUser coordinates={user.location.coordinates} name={user.name} />
      </article>
    </>
  );
}

export default User;
