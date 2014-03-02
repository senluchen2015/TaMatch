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
					$("#tblData tbody").append("<tr><td>"+item+"&nbsp;&nbsp;<img src='images/delete.png' class='btnDelete'/></td></tr>");
					$(".btnDelete").bind("click", Delete);	
					console.log(item);
				})
	})			
    $(".btnDelete").bind("click", Delete);
});
function Delete(){
    var par = $(this).parent().parent();
    par.remove();
}; 