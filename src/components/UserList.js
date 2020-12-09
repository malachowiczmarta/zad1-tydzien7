import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserList({ data }) {
  const { results } = data;

  // const [isLoading, setLoading] = useState(true);
  // const [hasError, setError] = useState(false);

  // const renderUsersList = () => {
  //   if (!isLoading) {
  //     return !hasError ? (
  //       generateUsers()
  //     ) : (
  //       <h3>Wystąpił błąd. Spróbuj później</h3>
  //     );
  //   }
  //   return <h3>Trwa ładowanie danych...</h3>;
  // };

  return (
    <section className="userList">
      <h1>Users list</h1>
      {results &&
        results.map((user) => (
          <div key={user.login.uuid}>
            <Link to={`/users/${user.login.uuid}`}>
              {user.name.first} {user.name.last}
            </Link>
          </div>
        ))}
    </section>
  );
}

export default UserList;
