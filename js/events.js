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
  $(document).on('keydown',function(key){
    if(key.which==71){
    alert('G key was pressed');
    }
  })
}
function submitIt(){
  $(document).on('submit',function(){
  if ($( "input:first" ).val() === "correct") {
    alert('Your form is going to be submitted now.');
  }
  })
}