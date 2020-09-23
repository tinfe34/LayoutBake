
function displayMenu(){
    
  var x =  document.getElementById("nav");
 
  if (x.style.top === '-320px') {
    x.style.top = '61px';
    x.style.transition = 'all 1s';
    // x.style.display = 'block';
   
  } else {
    x.style.top = '-320px';
    x.style.transition = 'all 1s';
    // x.style.display = 'none';
    
  }
  
}
document.getElementById("btnCheck").addEventListener("click", displayMenu);
