const clock=document.querySelector("#clock")
document.getElementById('#clock')    //can also use this as well 

//Since it is a digital clock, therefore, it should change per second.
//Lets display date ---

let date = new Date() //Date()->object
console.log(date.toLocaleTimeString()) //in this way, can display date,but it is displaying in the console and every time i refresh the page , time also changes.

//Method that runs on every moment or i have the control of it --

//setInterval()

setInterval(function () {
  let date = new Date()
//console.log(date.toLocaleTimeString())   -- commented as i dont want it to run on console
  // clock.innerHTML= date.toLocaleTimeString();
  clock.innerHTML= date.toLocaleTimeString();
}, 1000)  //its the format . 1000ms = 1sec (its the time). Here , we can see that we are getting the value every sec. in console.
 
