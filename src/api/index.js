const API_URL = "https://randomuser.me/api/";
const USERS_LIMIT = "10";

const getUsers = () => {
  fetch(`${API_URL}?results=${USERS_LIMIT}`)
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      }
      throw new Error("Wystąpił błąd");
    })
    .then((data) => {})
    .catch((error) => {
      console.log(error);
      setError(true);
      setLoading(false);
    });
};

export default getUsers;
