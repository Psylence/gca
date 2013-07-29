function gca_swap_desc(hideClass, showName)
{
	$("." + hideClass).hide();
	$("#" + showName).show();
}

function scan_code_test(targetElement)
{
	try {
		var scanner = cordova.require("cordova/plugin/BarcodeScanner");
	
		scanner.scan(function(result) {
			$(targetElement).html(result.text);
		});
	} catch (ex) {
		console.log(ex.message);
	}
}