import {getCountDownTime} from './countDown.js'

let eventTime = new Date('Nov 25 2021')

setInterval(() => {
  console.log(getCountDownTime(eventTime))  
}, 1000);

