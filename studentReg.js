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
				// var options = document.getElementById("selCourse").options;
				// var selectedIndex = document.getElementById("selCourse").selectedIndex;
				// console.log(options[selectedIndex]);
				var values = $('#selCourse').val();
				values.forEach(function(item) {
					$(".courseBox").append(item + "<br>");
					console.log(item);
				})
	})			

});
