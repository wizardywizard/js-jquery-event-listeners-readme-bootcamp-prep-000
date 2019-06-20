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
    if(key.which==71){
    window.alert('G key was pressed');
    }
  })
}
function submitIt(){
  document.addEventListener('submit',function(){
  if ($( "input:first" ).val() === "correct") {
    alert('Your form is going to be submitted now.');
  }
  })
}