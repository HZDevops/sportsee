import axios from "axios";
import { useEffect, useState } from "react";

/**
 * Hook used to extract data from SportSeeAPI to feed the dashboard.
 * @param {String} userId - id of the user
 * @param  {String} service - optional route of the API request
 * @returns {Object} - user's data
 */

export function useSportSeeApi(userId, service) {
  let url = service
    ? `http://localhost:3000/user/${userId}/${service}`
    : `http://localhost:3000/user/${userId}`;

  const [data, setData] = useState({});
  //const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    //setIsLoading(true);
    axios
      .get(`${url}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error: ", error);
        setError(error);
      })
      .finally(() => {
        //setIsLoading(false);
      });
  }, [url]);

  return { data, error };
}
