function gca_swap_desc(hideClass, showName)
{
	$("." + hideClass).hide();
	$("#" + showName).show();
}

function scan_code()
{
	alert("Called2");
	
	var scanner = cordova.require("cordova/plugin/BarcodeScanner");

	alert("Cordova");
	scanner.scan(
		function (result) {
			if(result.text in urls) {
				$.mobile.changePage(urls[result.text]);
			} else {
				alert("Outside page.");
			}
		}, 
		function (error) {
			alert("Failed to scan.");
		}
	);
	
	alert("End");
}

$(document).ready(function() {
	$(".scanner_btn").click(function() {
		scan_code();
	});
});