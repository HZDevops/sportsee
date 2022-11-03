/**
 * Get user average sessions from data API
 * @param {Array} userData - user data from fetch API
 * @returns {Array} - user's average sessions
 */
function getUserAverageSessions(userData) {
  return userData?.serviceData?.data?.sessions;
}
export default getUserAverageSessions;
