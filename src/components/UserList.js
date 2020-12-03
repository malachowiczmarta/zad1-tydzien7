import React, { useEffect, useState } from "react";
import User from "./User";

function UserList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, []);
  console.log(users);
  return (
    <section className="UserList">
      {isLoading && <p>Loading...</p>}
      {hasError && <p>An Error has occured</p>}

      {users.map((user) => (
        <div className="userContainer">
          <User userDetails={user} />
        </div>
      ))}
    </section>
  );
}

export default UserList;
