/**
 * Get user activities from data API
 * @param {Array} userData - user data from fetch API
 * @returns {Array} - user's daily activity
 */
function getUserDailyActivity(userData) {
  return userData?.serviceData?.data?.sessions;
}
export default getUserDailyActivity;
