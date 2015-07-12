window.onload = function() {

	var viewLinks = document.getElementsByClassName("viewcode-link");
	var viewBackLinks = document.getElementsByClassName("viewcode-back");
	
	if (viewLinks){
		for (i = 0; i < viewLinks.length; i++) {
		    viewLinks[i].innerHTML = "source";
		}
	}

	if (viewBackLinks){
		for (i = 0; i < viewBackLinks.length; i++) {
		    viewBackLinks[i].innerHTML = "docs";
		}
	}

}