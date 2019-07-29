$(function() {
	$('.gnb>ul>li>a')
	.mouseover(function() {
		$(this).parent().addClass('act').siblings().removeClass('act');
		})
	.focus(function() {
		$(this).trigger('mouseover');
	});
});