/**
 * Get user performances from data API
 * @param {Array} userPerformanceData - user's data from fetch API
 * @returns {Array} - user's performances
 */
function getUserPerformance(userPerformanceData) {
  const ACTIVITY_BY_KIND = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };

  const activities = [];

  if (userPerformanceData) {
    userPerformanceData.data?.data?.forEach((element) => {
      activities.push({
        kind: ACTIVITY_BY_KIND[element.kind],
        value: element.value,
      });
    });

    return activities;
  }
}
export default getUserPerformance;
