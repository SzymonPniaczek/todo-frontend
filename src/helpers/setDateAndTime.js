export const setDateAndTime = (dateandtime) => {
  try {
    const dateObject = new Date(dateandtime);
    const date = dateObject.toISOString().split("T")[0];
    const time = dateObject.toTimeString().split(" ")[0];
    return { date: date, time: time };
  } catch (e) {
    return e.message;
  }
};
