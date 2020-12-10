//jshint esversion: 6
$(document).ready(function(){
  $("#1A").on("click", (event)=> {
  $("#1B").prop('disabled',true);

});

$("#1B").on("click", (event)=> {
  $("#1A").prop('disabled',true);

});

$("#1C").on("click", (event)=> {
  $("#1D").prop('disabled',true);
});

$("#1D").on("click", (event)=> {
  $("#1C").prop('disabled',true);

});


$("#2A").on("click", (event)=> {
$("#2B").prop('disabled',true);

});

$("#2B").on("click", (event)=> {
$("#2A").prop('disabled',true);

});

$("#2C").on("click", (event)=> {
$("#2D").prop('disabled',true);
});

$("#2D").on("click", (event)=> {
$("#2C").prop('disabled',true);

});



$("#3A").on("click", (event)=> {
$("#3B").prop('disabled',true);

});

$("#3B").on("click", (event)=> {
$("#3A").prop('disabled',true);

});

$("#3C").on("click", (event)=> {
$("#3D").prop('disabled',true);
});

$("#3D").on("click", (event)=> {
$("#3C").prop('disabled',true);

});




$("#4A").on("click", (event)=> {
$("#4B").prop('disabled',true);

});

$("#4B").on("click", (event)=> {
$("#4A").prop('disabled',true);

});

$("#4C").on("click", (event)=> {
$("#4D").prop('disabled',true);
});

$("#4D").on("click", (event)=> {
$("#4C").prop('disabled',true);

});




$("#5A").on("click", (event)=> {
$("#5B").prop('disabled',true);

});

$("#5B").on("click", (event)=> {
$("#5A").prop('disabled',true);

});

$("#5C").on("click", (event)=> {
$("#5D").prop('disabled',true);
});

$("#5D").on("click", (event)=> {
$("#5C").prop('disabled',true);

});

$(document).on('click','#generate',function(){
//   const pdf = new jsPDF();
//   pdf.setProperties({
//   title: 'Reservation ticket',
//   subject: 'Ticket',
//   author: 'Airport Manager',
//   keywords: 'generated, javascript, web 2.0, ajax',
//   creator: 'ABC Airlines'
//   });
//   let button = document.querySelector('button');
//   var intro="\t\t\t\tFLIGHT RESERVATION TICKET";
//   var name=document.getElementById("name").textContent;
//   var phone=document.getElementById("phone").textContent;
//   var from=document.getElementById("from").textContent;
//   var to=document.getElementById("to").textContent;
//   var date=document.getElementById("date").textContent;
//   var seat_no=document.getElementById("seat-no").textContent;
//   var health=document.getElementById("health").textContent;
//   var confirm=document.getElementById("confirm").textContent;
//   var thanks="\t\t\tHave a nice flight!!";
//   var courtesy="\t\t\tCourtesy: ABC Airlines";
//   var whitespace="";
//   var pdfcontent=[];
//   var PNR="12345";
//   pdfcontent.push(intro,whitespace,whitespace,name,whitespace,phone,whitespace,from,whitespace,to,whitespace,date,whitespace,
//   seat_no,whitespace,health,whitespace,confirm,whitespace,whitespace,thanks,whitespace,whitespace,whitespace,courtesy);
//   button.addEventListener('click', printPDF);
//   function printPDF() {
//     pdf.text(10, 10, pdfcontent);
//     pdf.save(PNR+".pdf");
//   }
//   var modal = document.getElementById('id01');
 console.log("Hello");
 });

});
