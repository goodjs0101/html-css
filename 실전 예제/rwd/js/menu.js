$(function() {
	$('.gnb .btn').click(function (){
		$(this).next().slideToggle();
	});
});