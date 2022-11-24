import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "./mockedData";

/**
 * Get user firstname from mocked data
 * @param {String} userId - user id
 * @returns {StringObject} - user firstname
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
 * @returns {Number} - user's score
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
  const dailyActivity = [];
  let sessions = [];

  for (let user of USER_ACTIVITY) {
    if (user.userId === parseInt(userId)) {
      sessions = user.sessions;
    }
  }
  sessions.forEach((element) => {
    const [yyyy, mm, dd] = element.day.split("-");

    dailyActivity.push({
      day: `${dd}`,
      kilogram: element.kilogram,
      calories: element.calories,
    });
  });
  return dailyActivity;
}

/**
 * Get user average sessions from mocked data
 * @param {String} userId - user id
 * @returns {Array} - user's average sessions
 */
export function getUserAverageSessionsMocked(userId) {
  let sessions = [];

  for (let user of USER_AVERAGE_SESSIONS) {
    if (user.userId === parseInt(userId)) {
      sessions = user.sessions;
    }
  }

  // replace the number index with the day index
  const days = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };
  if (sessions) {
    for (let element of sessions) {
      if (element.day in days) {
        element.day = days[element.day];
      }
    }
  }
  return sessions;
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
      return getOrderedActivities(activities);
    }
  }
}

/**
 * Get user kind activities ordered
 * @param {Array} activities -
 * @returns {Array} - user's redered activities
 */
function getOrderedActivities(activities) {
  const ACTIVITIES_ORDER_FOR_CHART = [
    "Intensité",
    "Vitesse",
    "Force",
    "Endurance",
    "Energie",
    "Cardio",
  ];

  const orderedActivities = [];

  for (let activity of ACTIVITIES_ORDER_FOR_CHART) {
    for (let item of activities) {
      if (item.kind === activity) {
        orderedActivities.push({
          kind: activity,
          value: item.value,
        });
      }
    }
  }
  return orderedActivities;
}
