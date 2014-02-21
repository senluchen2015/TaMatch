/* Javascript Here */

$(function(){
	$("#loginForm").dialog({
		autoOpen: false,
		height: 350,
		width: 300,
		modal: true,
		buttons: {
			"Login": function(){
			},
			"Cancel": function(){
				$(this).dialog("close");
			}
		}
	});
	$("#loginButton")	
		.click(function(){
		$("#loginForm").dialog("open");
		$('.ui-widget-overlay').css('background', 'grey');
		});

	$("#registerForm").dialog({
		autoOpen: false,
		height: 350,
		width: 300,
		modal: true
	});

	$("#registerButton")
		.click(function(){
			$("#registerForm").dialog("open");
			$('.ui-widget-overlay').css('background', 'grey');
		});

});


