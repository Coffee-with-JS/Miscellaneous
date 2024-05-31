 let date = new Date()

//  console.log(date, typeof date)

// time :  hour, minute, second 

// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())

// date : day, month, year

// console.log(date.getDate())
// console.log(date.getMonth())
// console.log(date.getFullYear())

// day of the week
let arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

console.log("week",date.getDay(), arr[date.getDay()] )
// 0 - 6, 0 => sunday .... 6 => saturday


function currentTime(){
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    console.log(`Current Time is ${hour}:${minute}:${second}`)
}

// currentTime()

// for(let i = 1; i<=10000; i++){
//     currentTime()
// }

// call this function once per sec

// setInterval(currentTime, 1000)