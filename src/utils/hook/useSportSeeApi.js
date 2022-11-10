import axios from "axios";
import { useState, useEffect } from "react";
import "../../data/mockedData";

/**
 * Hook used to extract data from SportSeeAPI to feed the dashboard.
 * @param {String} userId - id of the user
 * @param  {String} service - optional route of the API request
 * @returns {Object} - user's data
 */

function useSportSeeApi(userId) {
  let url = `http://localhost:3000/user/${userId}`;

  const [userData, setUserData] = useState({});
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setDataLoading(true);
    axios
      .get(`${url}`)
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
  }, [url]);
  return { userData, isDataLoading, error };
}
export default useSportSeeApi;
