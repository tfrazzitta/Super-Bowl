



$('form').submit(function(event) {
event.preventDefault();

var firstName=$("#first-name").val();
var lastName=$("#last-name").val();
var anthemTime=$("#anthem-time").val();
var commercial=$("#commercial").val();
var coinToss=$("#coin-toss").val();
var firstTeamThatScores=$("#first-team-that-scores").val();
var firstTypeOfScore=$("#first-type-of-score").val();
var trump=$("#trump").val();

    if( firstName===""||
    	lastName===""||
    	anthemTime===""||
    	commercial==="" 
    	coinToss===""||
    	firstTeamThatScores===""||
    	firstTypeOfScore===""||
    	trump===""||
    	){
       //$("#modal-message").addClass("alert alert-danger");
   	   //$("#modal-message").html("Please Submit all Requirements");
   	   
   	   return false;
    }
    else{
		//$("#modal-message").addClass("alert alert-success");
		//$("#modal-message").append("<h3> Success<img id='appen-img' src='css/img/green.png'/></h3>");
	    var form = this;
	    setTimeout( function () { 
	        form.submit();
	    }, 2000);

	}

}); 
