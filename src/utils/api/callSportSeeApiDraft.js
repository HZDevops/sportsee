import axios from "axios";
import { useEffect, useState } from "react";

/**
 * Hook used to get user main data (firstname, score, keydata...)from API to feed HeaderDashboard, KeyData and ScoreChart components
 * @param {String} userId - id of the user
 * @returns {Object} - user's main data
 */

export function useSportSeeApiMainData(userId) {
  //State initialisation
  const [userMainData, setData] = useState({});
  const [userError, setUserError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${userId}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setUserError(error);
      });
  }, [userId]);

  return { userMainData, userError };
}

/**
 * Hook used to get user activities data from API to feed DailyActivityChart component
 * @param {String} userId - id of the user
 * @returns {Object} - user's activities data
 */

export function useSportSeeApiActivity(userId) {
  const [activityData, setActivityData] = useState({});
  const [activityError, setActivityError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${userId}/activity`)
      .then((response) => {
        setActivityData(response.data);
      })
      .catch((error) => {
        setActivityError(error);
      });
  }, [userId]);

  return { activityData, activityError };
}

/**
 * Hook used to get user average sessions data from API to feed SessionDurationChart component
 * @param {String} userId - id of the user
 * @returns {Object} - user's sessions data
 */

export function useSportSeeApiSessions(userId) {
  const [sessionData, setSessionData] = useState({});
  const [sessionError, setSessionError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${userId}/average-sessions`)
      .then((response) => {
        setSessionData(response.data);
      })
      .catch((error) => {
        setSessionError(error);
      });
  }, [userId]);

  return { sessionData, sessionError };
}

/**
 * Hook used to get user performance data from API to feed PerformanceChart component
 * @param {String} userId - id of the user
 * @returns {Object} - user's performance data
 */

export function useSportSeeApiPerformance(userId) {
  const [performanceData, setPerformanceData] = useState({});
  const [performanceError, setPerformanceError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${userId}/performance`)
      .then((response) => {
        setPerformanceData(response.data);
      })
      .catch((error) => {
        setPerformanceError(error);
      });
  }, [userId]);

  return { performanceData, performanceError };
}
