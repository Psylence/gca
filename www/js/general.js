function gca_swap_desc(hideClass, showName)
{
	$("." + hideClass).hide();
	$("#" + showName).show();
}

function scan_code()
{
	var scanner = cordova.require("cordova/plugin/BarcodeScanner");

	scanner.scan(
		function (result) {
			if(result.text in urls) {
				$.mobile.changePage(urls[result.text]);
			} else {
				document.location.href = result.text;
			}
		}, 
		function (error) {
			alert("Failed to scan.");
		}
	);
}

$(document).ready(function() {
	$(".scanner_btn").click(function() {
		scan_code();
	});
});