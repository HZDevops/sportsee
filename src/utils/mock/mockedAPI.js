import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "./mockedData";

/**
 * Get user main information from data API
 * @param {String} userId - user id
 * @returns {Object} - user main information
 */
export function getUserFirstname(userId) {
  for (let user of USER_MAIN_DATA) {
    if (user.id === parseInt(userId)) {
      let firstname = user.userInfos.firstName;
      return firstname;
    }
  }
}

/**
 * Get user keydata from mocked data
 * @param {String} userId - user id
 * @returns {Object} - user's keydata
 */
export function getUserKeydataMocked(userId) {
  for (let user of USER_MAIN_DATA) {
    if (user.id === parseInt(userId)) {
      let keydata = user.keyData;
      return keydata;
    }
  }
}

/**
 * Get user score from mocked data
 * @param {String} userId - user id
 * @returns {Object} - user's score
 */
export function getUserScoreMocked(userId) {
  for (let user of USER_MAIN_DATA) {
    if (user.id === parseInt(userId)) {
      if (user.todayScore) {
        return user.todayScore;
      } else {
        return user.score;
      }
    }
  }
}

/**
 * Get user activities from mocked data
 * @param {String} userId - user id
 * @returns {Array} - user's daily activities
 */
export function getUserDailyActivityMocked(userId) {
  for (let user of USER_ACTIVITY) {
    if (user.userId === parseInt(userId)) {
      let sessions = user.sessions;
      return sessions;
    }
  }
}

/**
 * Get user average sessions from mocked data
 * @param {String} userId - user id
 * @returns {Array} - user's average sessions
 */
export function getUserAverageSessionsMocked(userId) {
  for (let user of USER_AVERAGE_SESSIONS) {
    if (user.userId === parseInt(userId)) {
      return user.sessions;
    }
  }
}

/**
 * Get user performances from mocked data
 * @param {String} userId - user id
 * @returns {Array} - user's performances
 */
export function getUserPerformanceMocked(userId) {
  const ACTIVITY_BY_KIND = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };

  const activities = [];

  for (let user of USER_PERFORMANCE) {
    if (user.userId === parseInt(userId)) {
      user.data.forEach((element) => {
        activities.push({
          kind: ACTIVITY_BY_KIND[element.kind],
          value: element.value,
        });
      });
      return activities;
    }
  }
}
