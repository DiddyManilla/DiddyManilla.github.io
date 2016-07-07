$(document).ready(function() {
	$("#dropdown-arrow").on("click", function() {
		$(this).toggleClass("down");
		$(this).closest("div").find("ul").toggleClass("open");
	})
});