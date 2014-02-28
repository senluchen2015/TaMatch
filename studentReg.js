function GetFolder() {
    document.folderForm.folderLocation.value=document.folderForm.file.value;
}

$("#submit")
	.click(function(){
		window.location.href = "studentHome.html";
	})