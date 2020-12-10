import React from "react";
import { useParams, Link } from "react-router-dom";
import Details from "./Details";

function User({ data }) {
  const { id } = useParams();
  const { results } = data;
  console.log(results);
  if (!results) {
    return null;
  }

  const matchingUsers = results.filter((elem) => elem.login.uuid === id);
  const user = matchingUsers[0];

  // const {name, location, email} = user;

  return (
    <>
      <Link to="/">&larr; Wróć do listy</Link>
      <div className="user-container">
        <h2>
          {user.name.first
            ? `${user.name.first} ${user.name.last}`
            : "Unavailable"}
        </h2>
        <Details userDetails={user} />
      </div>
    </>
  );
}

export default User;
