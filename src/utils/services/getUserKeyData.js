/**
 * Get user firstname from data API
 * @param {Array} userInfoData - user's data
 * @returns {Objet} - user's keydata
 */
function getUserKeyData(userInfoData) {
  return userInfoData?.userData?.data?.keyData;
}
export default getUserKeyData;
