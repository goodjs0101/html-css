$(function() {
	$('.over').each(function() {
		$(this).mouseenter(function() {
			$(this).attr("src", $(this).attr("src").replace("_off", "_on"));
		});
		$(this).mouseleave(function() {
			$(this).attr("src", $(this).attr("src").replace("_on", "_off"));
		});
	});
});