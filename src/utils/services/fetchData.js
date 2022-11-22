import axios from "axios";

export async function fetchData(id, service) {
  let url = service
    ? `http://localhost:3000/user/${id}/${service}`
    : `http://localhost:3000/user/${id}`;
  axios
    .get(`${url}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}
