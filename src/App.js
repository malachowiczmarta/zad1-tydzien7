import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserList from "./components/UserList";
import User from "./components/User";
import "./styles.css";
import Axios from "axios";

const API_URL = "https://randomuser.me/api/";
const USERS_LIMIT = "10";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const getUsers = async () => {
    try {
      return Axios.get(`${API_URL}?results=${USERS_LIMIT}`).then((response) => {
        setUsers(response.data);
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      {isLoading && <p>Loading...</p>}
      {hasError && <p>An error has occurred</p>}
      {users && (
        <Router>
          <Route exact path="/users/:id">
            <User data={users} />
          </Route>
          <Route exact path="/">
            <UserList data={users} />
          </Route>
        </Router>
      )}
    </div>
  );
}

export default App;
