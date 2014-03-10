function displaySelected(){
	document.getElementById("courseTable").innerHTML = "";
	var options =	document.getElementById("departments").options;
	var selectedIndex =document.getElementById("departments").selectedIndex; 

	if(options[selectedIndex].text =="EECS - Elect Engineering & Comp Sci"){
		var nameEECS=["EECS 111", "EECS 211", "EECS 213"];
		var instructorEECS = ["Ian Horswill", "Larry Henschen", "Peter Dinda"];
		var timeEECS = ["12:00-12:50 MWF", "2-2:50 MTuWF", "2-3:20 TuTh"];
		var quarterEECS = ["Spring", "Spring","Spring"];
		var timeCommitmentEECS = ["10", "15", "20"];
		var classSizeEECS = ["50", "30", "20"];
		var detailEECS = ["Must understand functional programming, Meta, Scheme", 
						  "Teach basic C++ programming, such as pointers, loops, object-oriented designs",
						  "Computer System, host TA sections for labs, must already taken the class and completed the lab"];
		var html=""; 

		for(i=0;i<nameEECS.length;i++){
			var classArray = new Array();
				classArray[0] = nameEECS[i];
				classArray[1] =	instructorEECS[i];
				classArray[2] = timeEECS[i];
				classArray[3] = quarterEECS[i];
				classArray[4] = timeCommitmentEECS[i];
				classArray[5] = classSizeEECS[i];
				classArray[6] = detailEECS[i];

			console.log(classArray[0]);
			if(i%2==0){
				html+='<div class="coursesHomeEven">'
				// +'<a href="'
				// +nameEECS[i]+ '" style="color:#432F21">'
				+ '<a id="courseDetail" style="cursor:pointer;" onClick="loadDetail('
				+ "'" + nameEECS[i]+ "','"+instructorEECS[i]+"','"+timeEECS[i]+"','"
				+ quarterEECS[i]+"','"+timeCommitmentEECS[i]+"','"+classSizeEECS[i]+"','"+detailEECS[i]+"','"+i+"')" +';">'
				+'<div class="nameCourse">'				
				+nameEECS[i]
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
				+ '<a id="courseDetail" style="cursor:pointer;" onClick="loadDetail('
				+ "'" + nameEECS[i]+ "','"+instructorEECS[i]+"','"+timeEECS[i]+"','"
				+ quarterEECS[i]+"','"+timeCommitmentEECS[i]+"','"+classSizeEECS[i]+"','"+detailEECS[i]+"')" +';">'
				+'<div class="nameCourse">'				
				+nameEECS[i]
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



function loadDetail(name,instructor,time,quarter,commitment,size,details,oddOrEven){
	// classArray = classArray.split(" ");

	document.getElementById("detailName").innerHTML = "Name: " + name;
	document.getElementById("detailInstructor").innerHTML = "Instructor: " + instructor;
	document.getElementById("detailTime").innerHTML = "Time: " + time;
	document.getElementById("detailQuarter").innerHTML ="Quarter: " + quarter;
	document.getElementById("detailTimeCommitment").innerHTML = "Time Comitment: " + commitment +" hr";
	document.getElementById("detailClassSize").innerHTML = "Class Size:" + size;
	document.getElementById("detailDetails").innerHTML = "Details: " + details;


	document.getElementById("detailForm").style.visibility="visible";
	$(function(){
		$("#detailForm").dialog({
			autoOpen: true,
			height: 400,
			width: 600,
			modal: true,
			draggable: false,
			dialogClass: "no-close",
			buttons: [
				{
					text:"Cancel",
					id:"cancelButtons",
					click: function(){
						$(this).dialog("close");
					}
				},
				{
					text:"Favorite",
					id:"favoriteButtons",
					click: function(){
					$(this).dialog("close");
					html= "<div class=coursesHomeEven>" + name +'&nbsp;&nbsp;<img src="images/delete.png" class="btnDelete"</div>'; 
					$("#favoriteText").append(html);
					$(".btnDelete").bind("click", Delete);
					}
				},
				{ 
					text:"Apply",
					id:"okButtons",
					click: function(){
					document.getElementById("applicationForm").style.visibility="visible";
					$(".className").html( name +" Personal Statement")
					$("#applicationForm").dialog({
							autoOpen: true,
							height: 400,
							width: 600,
							modal: true,
							draggable: false,
							dialogClass: "no-close",
							buttons: [
								{ 
									text:"Cancel",
									id:"cancelButtons",
									click: function(){
										$(this).dialog("close");
									}
								},
								{
								
									text:"Submit",
									id:"okButtons",
									click: function(){
										document.getElementById("confirmForm").style.visibility="visible";								
									$("#confirmForm").dialog({
										autoOpen: true,
										height: 200,
										width: 300,
										modal: true,
										draggable: false,
										dialogClass: "no-close",
										buttons: [
											{
												text: "Cancel",
												id:"cancelButtons",
												click: function(){
													$(this).dialog("close");
												}
											},
											{	
												text:"Submit",
												id:"okButtons",
												click: function(){
													html= "<div class=coursesHomeEven>" + name +'&nbsp;&nbsp;<img src="images/delete.png" class="btnDelete"</div>'; 
													$("#openText").append(html);
													$(".btnDelete").bind("click", Delete);
													$(".ui-dialog-content").dialog("close");
												}
											}					
										]			
									});
									$('.ui-widget-overlay').css('background', 'grey');
									}
								}

							]
					});
					$('.ui-widget-overlay').css('background', 'grey');
				}
			}
			]
		});
	$('.ui-widget-overlay').css('background', 'grey');
	});
}

$(document).ready(function(){
	$( "#notification" ).click(function(){
		if(document.getElementById("notificationList").style.visibility=="hidden"){
			document.getElementById("notificationList").style.visibility="visible";
		}
		else{
			document.getElementById("notificationList").style.visibility="hidden";
		}
		console.log("hi");
	});

});


function Delete(){
    var par = $(this).parent();
    par.remove();
}; 