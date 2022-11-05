/**
 * Extract user activities from API data
 * @param {Array} userActivityData - user activities from API
 * @returns {Array} - user's daily activities
 */
function getUserDailyActivity(userActivityData) {
  return userActivityData?.data?.sessions;
}
export default getUserDailyActivity;
