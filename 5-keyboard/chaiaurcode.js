//First taking the reference of key that presses.
const insert = document.getElementById('insert')

//Now apply eventListner on whole window ---
window.addEventListener('keydown',(e) => {
  insert.innerHTML = `
   <div class = 'color'>
                       //  Now we bring a table here ....
  
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
                         // here, we extract from the event ...
    
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
   </div>
  `;
}); 

