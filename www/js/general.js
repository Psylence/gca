function gca_swap_desc(hideClass, showName)
{
	$("." + hideClass).hide();
	$("#" + showName).show();
}

function scan_code_test(targetElement)
{
	$("#called").text("Called");

	var scanner = cordova.require("cordova/plugin/BarcodeScanner");

	scanner.scan(
		function (result) {
			$("#result").text("We got a barcode\n" +
					"Result: " + result.text + "\n" +
					"Format: " + result.format + "\n" +
					"Cancelled: " + result.cancelled);
		}, 
		function (error) {
			$("#result").text("Scanning failed: " + error);
		}
	);
}