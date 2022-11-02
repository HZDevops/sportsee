/**
 * Get user main information from data API
 * @param {Array} userInfoData - user's data
 * @returns {String} - user first name
 */
function getUserMainData(userInfoData) {
  const firstname = userInfoData?.userData?.data?.userInfos?.firstName;
  const keydata = userInfoData?.userData?.data?.keyData;
  return { firstname, keydata };
}
export default getUserMainData;
