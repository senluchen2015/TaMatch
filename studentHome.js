function displaySelected(){
	document.getElementById("courseTable").innerHTML = "";
	var options =	document.getElementById("departments").options
	var selectedIndex =document.getElementById("departments").selectedIndex; 
	console.log(options[selectedIndex].text);
	if(options[selectedIndex].text =="ACCOUNT - Accounting"){
		document.getElementById("courseTable").innerHTML = "Accounting 101";
	}
}