/**
 * Get user firstname from data API
 * @param {Array} userInfoData - user's data
 * @returns {String} - user first name
 */
function getUserFirstName(userInfoData) {
  return userInfoData?.userData?.data?.userInfos?.firstName;
}
export default getUserFirstName;
