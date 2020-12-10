$(document).ready(function(){
  console.log("cancel js is here");
  const button= document.getElementById('cancelbtn');
  button.addEventListener('click', function(e){
    console.log('button was clicked');
    fetch('/cancel', {method: 'POST'})
      .then(function(response){
        if(response.ok){
          
          console.log('click recorded');
          return;
        }
      });
  });

});
