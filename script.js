let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
// let msec = document.getElementById("msec");

setInterval(() =>{

let currentTime = new Date();

console.log(currentTime.getHours()<10?"0":"") + currentTime.getHours();
console.log(currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
console.log(currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();

hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
// msec.innerHTML = (currentTime.getMilliseconds()<10?"0":"") +currentTime.getMilliseconds();
},10)