/**
 * Get user activities from data API
 * @param {Array} userActivityData - user activity's data
 * @returns {Array} - user's daily activity
 */
function getUserDailyActivity(userActivityData) {
  return userActivityData?.serviceData?.data?.sessions;
}
export default getUserDailyActivity;
