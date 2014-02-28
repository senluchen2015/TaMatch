function displaySelected(){
	document.getElementById("courseTable").innerHTML = "";
	var options =	document.getElementById("departments").options
	var selectedIndex =document.getElementById("departments").selectedIndex; 
	console.log(options[selectedIndex].text);
	if(options[selectedIndex].text =="ACCOUNT - Accounting"){
		document.getElementById("courseTable").innerHTML = '<div class="coursesHome">Accounting 101</div>';
	}
}

function openNotification(){
		
}