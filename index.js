/* Javascript Here */

$(function(){
	$("#loginForm").dialog({
		autoOpen: false,
		height: 350,
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
				text:"Login",
				id: "okButtons",			
			 	click: function(){
					window.location.href="studentHome.html";
				}
			}
		]

	});
	$("#loginButton")	
		.click(function(){
		$("#loginForm").dialog("open");
		$('.ui-widget-overlay').css('background', 'grey');
		});

	$("#registerForm").dialog({
		autoOpen: false,
		height: 600,
		width: 500,
		modal: true,
		draggable: false,
		// dialogClass: "no-close",
		buttons: [
		{
				text: "Cancel",
				id:"cancelButtons",
				click: function(){
					$(this).dialog("close");
				}
		}
		]
	});

	$("#registerButton")
		.click(function(){
			$("#registerForm").dialog("open");
			$('.ui-widget-overlay').css('background', 'grey');

		});

	$("#studentButton")
		.click(function(){
			window.location.href = "studentReg.html";
		})


	$("#instructorButton")
		.click(function(){
			window.location.href = "instructorReg.html";
		})

	

});


