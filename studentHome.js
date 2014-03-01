function displaySelected(){
	document.getElementById("courseTable").innerHTML = "";
	var options =	document.getElementById("departments").options
	var selectedIndex =document.getElementById("departments").selectedIndex; 
	console.log(options[selectedIndex].text);
	if(options[selectedIndex].text =="EECS - Elect Engineering & Comp Sci"){
		var nameEECS=["EECS 111", "EECS 211", "EECS 213"];
		var instructorEECS = ["Ian Horswill", "Larry Henschen", "Peter Dinda"];
		var timeEECS = ["12:00-12:50 MWF", "2-2:50 MTuWF", "2-3:20 TuTh"];
		var html=""; 

		for(i=0;i<nameEECS.length;i++){
			if(i%2==0){
				html+='<div class="coursesHomeEven">'
				+'<a href="'
				+nameEECS[i]+ '" style="color:#432F21">'
				+'<div class="nameCourse">'				
				+nameEECS[i]+"      "
				+'</div>' 
				+'<div class="instructorCourse">'
				+instructorEECS[i]
				+'</div>'
				+'<div class="timeCourse">'
				+timeEECS[i]
				+'</div>'
				+'</a>'
				+'</div>';
			}
			else{
				html+='<div class="coursesHomeOdd">'
				+'<a href="'
				+nameEECS[i]+ '" style="color:#432F21">'
				+'<div class="nameCourse">'				
				+nameEECS[i]+"      "
				+'</div>' 
				+'<div class="instructorCourse">'
				+instructorEECS[i]
				+'</div>'
				+'<div class="timeCourse">'
				+timeEECS[i]
				+'</div>'
				+'</a>'
				+'</div>';
			}
		}
		document.getElementById("courseTable").innerHTML = html;
	}
}



$(document).ready(function(){
$( "#notification" ).click(function(){
	$('#notficationList').toggle();
	console.log("wtf");
});
});
