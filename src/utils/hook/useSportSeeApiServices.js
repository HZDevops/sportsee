import axios from "axios";
import { useState, useEffect } from "react";

/**
 * Hook used to extract data from SportSeeAPI to feed the dashboard.
 * @param {String} userId - id of the user
 * @param  {String} service - optional route of the API request
 * @returns {Object} - user's data service
 */

function useSportSeeApiServices(userId, service) {
  let url = `http://localhost:3000/user/${userId}/${service}`;

  const [serviceData, setServiceData] = useState({});
  const [isServiceLoading, setServiceLoading] = useState(false);
  const [serviceError, setServiceError] = useState(false);

  useEffect(() => {
    setServiceLoading(true);
    axios
      .get(`${url}`)
      .then((response) => {
        setServiceData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setServiceError(true);
      })
      .finally(() => {
        setServiceLoading(false);
      });
  }, [url, service]);
  return { serviceData, isServiceLoading, serviceError };
}
export default useSportSeeApiServices;
