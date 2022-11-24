/**
 * Get user firstname from data API
 * @param {Array} data - user's main data from API
 * @returns {Object} - user firstname
 */
export function getUserFirstname(data) {
  const firstname = data?.data?.userInfos?.firstName;

  return firstname;
}

/**
 * Get user activities from API data
 * @param {Array} data - activities data from API
 * @returns {Array} - user's daily activities
 */
export function getUserDailyActivity(data) {
  const dailyActivity = [];

  data?.data?.sessions.forEach((element, index) => {
    dailyActivity.push({
      day: index + 1,
      kilogram: element.kilogram,
      calories: element.calories,
    });
  });
  return dailyActivity;
}

/**
 * Get user average sessions from data API
 * @param {Array} data - sessions data from API
 * @returns {Array} - user's average sessions
 */
export function getUserAverageSessions(data) {
  let sessions = data?.data?.sessions;

  // replace the number index by the day index
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
 * Get user performances from data API
 * @param {Array} data - perfomances data from API
 * @returns {Array} - user's performances
 */
export function getUserPerformance(data) {
  const ACTIVITY_BY_KIND = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };

  const activities = [];

  if (data) {
    // replace the english activity index by the french activity index
    data.data?.data?.forEach((element) => {
      activities.push({
        kind: ACTIVITY_BY_KIND[element.kind],
        value: element.value,
      });
    });

    return getOrderedActivities(activities);
  }
}

/**
 * Get user kind activities ordered
 * @param {Array} activities -
 * @returns {Array} - user's ordered activities
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

/**
 * Get user keydata information from data API
 * @param {Array} data - user's main data from API
 * @returns {Object} - user keydata
 */
export function getUserKeydata(data) {
  const keydata = data?.data?.keyData;

  return keydata;
}

/**
 * Get user score information from data API
 * @param {Array} data - user's main data from API
 * @returns {Number} - user score
 */
export function getUserScore(data) {
  if (data?.data?.todayScore) {
    return data?.data?.todayScore;
  } else {
    return data?.data?.score;
  }
}
