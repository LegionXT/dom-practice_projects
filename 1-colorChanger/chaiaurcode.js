const but = document.querySelectorAll(".button")   //selected buttons
const body = document.querySelector("body") // selected body

//little knowledge of Events -- Whenever you click any event,then you can take that event into function and also can perform activites with it.

//since , console.log(but) -> gives a nodelist , hence , we can use "ForEach".

but.forEach(function (button) {
      console.log(button)
      //Now we apply EventListener on every button. How to apply events ?
      button.addEventListener("click", function(e){
        console.log(e)                         //now on click any color,gives op e->pointerevent
        console.log(e.target)             //gives op that from which target this event has come.
        
       // switch ---
        // switch(e.target.id){
        //   case "grey":
        //      body.style.backgroundColor = e.target.id;
        //   break;
        //   case "white":
        //      body.style.backgroundColor = e.target.id;
        //   break;
        //   case "blue":
        //   body.style.backgroundColor = e.target.id;
        //   break;
        //   case "yellow":
        //   body.style.backgroundColor = e.target.id;
        //   break;

        // default:

      //if --
        if(e.target.id === "grey"){
          body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "white"){
          body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "blue"){
          body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "yellow"){
          body.style.backgroundColor = e.target.id;
        }
      })  // .addEventListener -> here,it will listen only "click" and here, (e)-> event object. Whenever an event happens , we have to carry that event as well, as an obj.
  })
