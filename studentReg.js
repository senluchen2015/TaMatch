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
				var values = $('#selCourse').val();
				values.forEach(function(item) {
					$("#tblData tbody").append("<tr><td>"+item+"&nbsp;&nbsp;<img src='images/redx.png' class='btnDelete'/></td></tr>");
					$(".btnDelete").bind("click", Delete);	
					var element = $(".addCourses");
					$(element).html("Edit Courses");
				})
	})			
    $(".btnDelete").bind("click", Delete);
});
function Delete(){
    var par = $(this).parent().parent();
    par.remove();
}; 