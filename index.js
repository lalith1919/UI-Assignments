const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date("2023-02-09");
let day = days[d.getDay()];
document.getElementById("day").innerHTML = "Today is: "  +  day;
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(time)








