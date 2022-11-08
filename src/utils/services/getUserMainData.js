/**
 * Get user main information from data API
 * @param {Array} userInfoData - user's data
 * @returns {String} - user first name
 */
function getUserMainData(userInfoData) {
  const firstname = userInfoData?.userData?.data?.userInfos?.firstName;
  const keydata = userInfoData?.userData?.data?.keyData;
  const score = userInfoData?.userData?.data?.todayScore;
  return { firstname, keydata, score };
}
export default getUserMainData;
