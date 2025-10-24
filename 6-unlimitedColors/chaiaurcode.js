//generate the random color ....(its done through random hex values)

const randomColor = function(){
  const hex = "0123456789ABCDEF";  //hex values starts from 0 and end at 9 and then F.

  //Now we need color ...
  let color = "#";
  // 1.Need to apply loop on this # ...
  for(let i = 0 ; i<6; i++)
  {
    color += hex[Math.floor(Math.random() *16)]
  }
  return color;
}
console.log(randomColor())
  
  //2. We also need to genrate random values...
  // console.log(Math.floor(Math.random() *16));  //By this , we will get the random values from 0 to 16.



// let stop;
// const startColorchange= function(){
//   // const Change = document.body.style.backgroundColor=randomColor()
//   // its generating color but not continously after click on start button...Hence, we have to declare it in another function and then ----
//   stop = setInterval(change1,1500)

//   function change1(){
//     const color = document.body.style.backgroundColor=randomColor()
//   }
// }

// const stopColorchange=function(){
//   clearInterval(stop);
// }
// document.querySelector("#start").addEventListener("click",startColorchange)
// document.querySelector("#stop").addEventListener("click",stopColorchange)



let stop;
const startColorchange= function(){
  //Safety check ... 
  if(!stop){
    stop = setInterval(change1,1000)
  }
  function change1(){
    const color = document.body.style.backgroundColor=randomColor()
  }
  
}

const stopColorchange=function(){
  clearInterval(stop);
  stop = null;    //cleaner process to free space
}
document.querySelector("#start").addEventListener("click",startColorchange)
document.querySelector("#stop").addEventListener("click",stopColorchange)
