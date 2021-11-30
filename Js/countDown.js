export const getCountDownTime = (eventTime) => {
  let timeNow = new Date().getTime()

  let countDown = eventTime - timeNow

  let days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  let hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  var timeObj = {
    days : days,
    hour : hours,
    minute : minutes,
    second : seconds
  }

  return timeObj
}
