import React from "react";
import { Link } from "react-router-dom";
import Details from "./Details";

function UserList({ data }) {
  const { results } = data;

  return (
    <section className="userList">
      <h1>Users list</h1>
      {results &&
        results.map((user) => (
          <div key={user.login.uuid} className="user-container">
            <Link to={`/users/${user.login.uuid}`}>
              {user.name.first} {user.name.last}
            </Link>
            <Details userDetails={user} />
          </div>
        ))}
    </section>
  );
}

export default UserList;
