
$('form').submit(function(event) {
  $("#error-message").html("");
  event.preventDefault();
  var firstName=$("#first-name").val();
  var lastName=$("#last-name").val();
  var q1=$("#q1").val();
  var q2=$("#q2").val();
  var q3=$("#q3").val();
  var q4=$("#q4").val();
  var q5=$("#q5").val();
  var q6=$("#q6").val();
  console.log(firstName)
  console.log(lastName)
  console.log(q1)
  console.log(q2)
  console.log(q3)
  console.log(q4)
  console.log(q5)
  console.log(q6)

    if(firstName===""||lastName===""||q1===""||q2===""||q3===""||q4===""||q5===""||q6===""){
      $("#error-message").html("Please Submit All Bets!");
       //$("#modal-message").addClass("alert alert-danger");
   	   //$("#modal-message").html("Please Submit all Requirements");
   	   return false;
    }
    
    else{
	    var form = this;
      console.log(this)
	    setTimeout( function () { 
	        form.submit();
	    }, 1000);

	  }

}); 


$(document).on("click","body",function(){
  $("#error-message").html("");
})