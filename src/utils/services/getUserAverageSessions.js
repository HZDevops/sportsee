/**
 * Get user average sessions from data API
 * @param {Array} userSessionData - user data from fetch API
 * @returns {Array} - user's average sessions
 */
function getUserAverageSessions(userSessionData) {
  return userSessionData?.data?.sessions;
}
export default getUserAverageSessions;
