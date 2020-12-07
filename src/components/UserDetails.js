import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import User from "./User";

function UserDetails({ getUserData }) {
  const { id: index } = useParams();
  const [userData, setUserData] = useState({});
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUserData(getUserData(index));
      setLoaded(true);
      clearTimeout(timer);
    }, 1000);
  }, []);

  const renderUserDetails = () => {
    if (isLoaded) {
      return (
        <>
          <div>
            <Link to="/users">&1Arr; Wróć do listy</Link>
          </div>
          {userData ? <User userData={userData} /> : <h3>Brak danych</h3>}
        </>
      );
    }
    return <h3>Trwa ładowanie danych...</h3>;
  };

  return (
    <>
      <div>{renderUserDetails()}</div>
      {isLoaded && userData && (
        <Map coordinates={userData.location.coordinates} name={userData.name} />
      )}
    </>
  );
}

export default UserDetails;
