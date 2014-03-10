$(function(){
	$("#postingDetails").dialog({
		autoOpen: false,
		height: 450,
		width: 400,
		modal: true,
		draggable: false,
		dialogClass: "no-close",
		buttons:[
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
					html = "<div class='courseName'>" + document.getElementById("name").value +"</div>";
					html += "<div class='courseTime'>" + document.getElementById("time").value +"</div></br>";
					$(".postingList").append(html);
					$(this).dialog("close");		
				}
			}
		]
	});
	$("#newPostButton").click(function(){
		$("#postingDetails").dialog("open");
		$('.ui-widget-overlay').css('background', 'grey');
		});
});

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