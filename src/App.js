import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserList from "./components/UserList";
import User from "./components/User";
import "./styles.css";
import api from "./api";
import Axios from "axios";

const API_URL = "https://randomuser.me/api/";
const USERS_LIMIT = "10";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get(`${API_URL}?results=${USERS_LIMIT}`).then((response) =>
      setUsers(response.data)
    );
  }, []);
  console.log(users);

  return (
    <div className="App">
      <Router>
        <Route exact path="/users/:id">
          <User data={users} />
        </Route>
        <Route exact path="/">
          <UserList data={users} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
