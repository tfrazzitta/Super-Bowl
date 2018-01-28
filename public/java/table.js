
var scoreArray=[];
$(document).ready(function(){

	$.ajax({
        method: "GET",
        url: '/show-answer'
      }).done(function(answer) {
      	console.log(answer.length)
		$.ajax({
	        method: "GET",
	        url: '/show-all-in-table'
	      }).done(function(data) {
	      	for(i=0;i<data.length;i++){
	      		if(answer.length===0){
		      		$("#t-body").append(
			       	"<tr><td>"+data[i].firstName+
			       	"</td><td>"+data[i].lastName+
			       	"</td><td>"+data[i].q1+
			       	"</td><td>"+data[i].q2+
			       	"</td><td>"+data[i].q3+
			       	"</td><td>"+data[i].q4+
			       	"</td><td>"+data[i].q5+
			       	"</td><td>"+data[i].q6+
			       	"</td><td id='"+i+"'>"+data[i].score+
			       	"</td></tr>");
	      		}  //if 

	      		else{

		      		if(data[i].q1===answer[0].q1){
		      			data[i].score++;
		      		}

		      		if(data[i].q2===answer[0].q2){
		      			data[i].score++;
		      		}

		      		if(data[i].q3===answer[0].q3){
		      			data[i].score++;
		      		}

		      		if(data[i].q4===answer[0].q4){
		      			data[i].score++;
		      		}

		      		if(data[i].q5===answer[0].q5){
		      			data[i].score++;
		      		}

		      		if(data[i].q6===answer[0].q6){
		      			data[i].score++;
		      		}

		      		// if(data[i].q7===answer[0].q7){
		      		// 	data[i].score++;
		      		// }

		      		// if(data[i].q8===answer[0].q8){
		      		// 	data[i].score++;
		      		// }

		      		// if(data[i].q9===answer[0].q9){
		      		// 	data[i].score++;
		      		// }

		      		// if(data[i].q10===answer[0].q10){
		      		// 	data[i].score++;
		      		// }

		      		
		      		scoreArray.push(data[i])
		      		
		      		// $("#t-body").append(
			       // 	"<tr><td>"+data[i].firstName+
			       // 	"</td><td>"+data[i].lastName+
			       // 	"</td><td>"+data[i].q1+
			       // 	"</td><td>"+data[i].q2+
			       // 	"</td><td>"+data[i].q3+
			       // 	"</td><td>"+data[i].q4+
			       // 	"</td><td>"+data[i].q5+
			       // 	"</td><td>"+data[i].q6+
			       // 	"</td><td id='"+i+"'>"+data[i].score+
			       // 	"</td></tr>");

	      		}  //else

	    	}     //for loop end
	    	ArrangeScore(scoreArray,answer);
	   //  	  	scoreArray.sort(function(a, b){
				//   return b.score-a.score;
				// })

				// for(i=0;i<scoreArray.length;i++){
				// 	if(scoreArray.length===0){
				// 		return false;
				// 	}
				// 	else{
				// 	$("#t-body").empty()	
				// 	$("#t-body").append(
			 //       	"<tr><td>"+scoreArray[i].firstName+
			 //       	"</td><td>"+scoreArray[i].lastName+
			 //       	"</td><td>"+scoreArray[i].q1+
			 //       	"</td><td>"+scoreArray[i].q2+
			 //       	"</td><td>"+scoreArray[i].q3+
			 //       	"</td><td>"+scoreArray[i].q4+
			 //       	"</td><td>"+scoreArray[i].q5+
			 //       	"</td><td>"+scoreArray[i].q6+
			 //       	// "</td><td id="'score'+i+">"+data[i].score+
			 //       	"</td><td id='"+i+"'>"+scoreArray[i].score+
			 //       	"</td></tr>");
				// 	}

				// }	 
	    });    // .done end

  	});	 
})			

	    	

function ArrangeScore(scoreArray,answer){
console.log(scoreArray)
	if(answer.length>0){
		console.log(answer)
	    $("#t-body").append(
	   	"<tr style='background-color:lightgreen'><td>"+answer[0].firstName+
	   	"</td><td>"+answer[0].lastName+
	   	"</td><td>"+answer[0].q1+
	   	"</td><td>"+answer[0].q2+
	   	"</td><td>"+answer[0].q3+
	   	"</td><td>"+answer[0].q4+
	   	"</td><td>"+answer[0].q5+
	   	"</td><td>"+answer[0].q6+
	   	"</td><td>"+answer[0].score+
	   	"</td></tr>");	
	} 

 	scoreArray.sort(function(a, b){
		return b.score-a.score;
	});

	for(i=0;i<scoreArray.length;i++){
		if(scoreArray.length===0){
			return false;
		}
		else{
			$("#t-body").append(
	       	"<tr id='winner'><td>"+scoreArray[i].firstName+
	       	"</td><td>"+scoreArray[i].lastName+
	       	"</td><td>"+scoreArray[i].q1+
	       	"</td><td>"+scoreArray[i].q2+
	       	"</td><td>"+scoreArray[i].q3+
	       	"</td><td>"+scoreArray[i].q4+
	       	"</td><td>"+scoreArray[i].q5+
	       	"</td><td>"+scoreArray[i].q6+
	       	"</td><td id='"+i+"'>"+scoreArray[i].score+
	       	"</td></tr>");

	       	if(i===0){
	       		$("#winner").css("background-color","gold");
	       	}
		}

	}

}