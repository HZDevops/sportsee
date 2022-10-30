import axios from "axios";
import { useState, useEffect } from "react";

const urlApi = "http://localhost:3000/user";

/**
 * Hook used to extract data from SportSeeAPI to feed the dashboard.
 * @param {string} userId
 * @returns {undefined|Object}
 */
function useFetch(userId) {
  const [userData, setUserData] = useState({});
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // fetchData()
    if (!urlApi) return;
    setDataLoading(true);
    axios
      .get(`${urlApi}/${userId}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setDataLoading(false);
      });
  }, [userId]);

  return { userData, isDataLoading, error };
}
export default useFetch;
