import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "./mockedData";

export function getUserMainDataMocked(userId) {
  for (let user of USER_MAIN_DATA) {
    if (user.id === parseInt(userId)) {
      let firstname = user.userInfos.firstName;
      let keydata = user.keyData;
      let score = user.todayScore;
      return { firstname, keydata, score };
    }
  }
  return "Unknown User";
}

export function getUserDailyActivityMocked(userId) {
  for (let user of USER_ACTIVITY) {
    if (user.userId === parseInt(userId)) {
      let sessions = user.sessions;
      return sessions;
    }
  }
}
