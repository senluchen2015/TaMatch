$(function(){
	$("#postingDetails").dialog({
		autoOpen: false,
		height: 450,
		width: 400,
		modal: true,
		draggable: false,
		dialogClass: "no-close",
		buttons: {
			"Cancel": function(){
				$(this).dialog("close");
			},
			"Submit": function(){
				
			}
		}
	});
	$("#newPostButton").click(function(){
		$("#postingDetails").dialog("open");
		$('.ui-widget-overlay').css('background', 'grey');
		});
});