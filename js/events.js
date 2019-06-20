//define functions here

$(document).ready(function(){

// call functions here

});

function getIt(){
  document.addEventListener('click',function() {
    alert('Hey!')
})}
function frameIt(){
   $('img').addClass('tasty')
}
function pressIt(){
  document.addEventListener('keydown',function(key){
<<<<<<< HEAD
    if(key.which==71){
    alert('G key was pressed');
    }
=======
    alert('G key was pressed')
>>>>>>> 4a89829b2c09644eadcc78e2b745b1695a95b5c4
  })
}
function submitIt(){
  document.addEventListener('submit',function(){
  if ($( "input:first" ).val() === "correct") {
<<<<<<< HEAD
    alert('Your form is going to be submitted now.');
=======
    alert('your form is going to be submitted now.');
  }
  })
}