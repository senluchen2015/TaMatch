$(function(){
	$("#submit")
		.click(function(){
			window.location.href = "studentHome.html";
		})
	$("#cancel")
		.click(function(){
			window.location.href = "index.html";
		})
	$("#add")
		.click(function(){
			$.pageslide({ direction: 'left', href: 'courseHistory.html'})
		})
});