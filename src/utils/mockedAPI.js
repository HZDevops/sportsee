import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "../data/mockedData";

function getUserMainData(userId) {
  //let firstname = "";
  for (let user of USER_MAIN_DATA) {
    if (user.id === userId) {
      let firstname = user.userInfos.firstName;
      return firstname;
      /*const keydata = user.keyData;
      const score = user.todayScore;
      return { firstname, keydata, score };*/
    }
  }
}
export default getUserMainData;
