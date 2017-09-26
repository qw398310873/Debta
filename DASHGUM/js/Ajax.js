function ajax(url,file,fnsucc,fnfaild) {
	if(window.XMLHttpRequest) {
		var oAjax = new XMLHttpRequest();
	} else {
		var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	oAjax.open('POST', url, true);
	
		oAjax.send(file);
	
	oAjax.onreadystatechange = function() {
		if(oAjax.readyState == 4) {
			if(oAjax.status == 200) {
				fnsucc(oAjax.responseText);
			} else {
				if(fnfaild) {
					fnfaild(oAjax.status);
				}
			}
		}
	}
}