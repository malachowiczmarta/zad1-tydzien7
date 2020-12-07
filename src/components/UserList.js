import React, { useEffect, useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import User from "./User";
import UserDetails from "./UserDetails";

const API_URL = "https://randomuser.me/api/?results=10";
const USERS_LIMIT = "10";

function UserList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const getUsers = () => {
    fetch(`${API_URL}?results=${USERS_LIMIT}`)
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
        throw new Error("Wystąpił błąd");
      })
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const generateUsers = () =>
    users.map((user, index) => {
      const linkUrl = `/users/${index}`;
      return (
        <Link to={linkUrl} key={user.login.uuid}>
          <User userData={user} />
        </Link>
      );
    });

  const getUserData = (index) => users[index];

  const renderUsersList = () => {
    if (!isLoading) {
      return !hasError ? (
        generateUsers()
      ) : (
        <h3>Wystąpił błąd. Spróbuj później</h3>
      );
    }
    return <h3>Trwa ładowanie danych...</h3>;
  };

  return (
    <section className="userList">
      <Router>
        <Switch>
          <Route path="/users/:id">
            <div>
              <UserDetails getUserData={getUserData} />
            </div>
          </Route>
          <Route path="/users">
            <div>{renderUsersList()}</div>
          </Route>
          <Route path="/">
            <Redirect to="/users" />
          </Route>
        </Switch>
      </Router>
    </section>
  );
}

export default UserList;
