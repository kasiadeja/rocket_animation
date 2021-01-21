 var button = document.getElementById("mybutton");

button.addEventListener("click", myFunction);

function myFunction(){
   document.getElementById("rocket").classList.toggle("rocket_new");
   document.getElementById("circleone").classList.add("clicked"); 
}


button.addEventListener("mouseout", myFunctionTwo);

function myFunctionTwo(){
    
   document.getElementById("circleone").classList.remove("clicked"); 
}


 
 




















