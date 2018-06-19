$(document).ready(function() {
	$('#imagem').fadeIn("slow");

	$('#facebook').animate({right: '1125px'});
	$('#instagram').animate({right: '1220px'});
	$('#twitter').animate({right: '1125px'});
	$('#telefone').animate({left: '1125px'});
	$('#behance').animate({left: '1220px'});
	$('#email').animate({left: '1125px'});

	$('#blogImg').fadeIn("slow");
	$('#blogTxt1').fadeIn(3000);
	$('#blogTxt2').fadeIn(6000);

	$('#coin-slider').coinslider({ width: 850, height: 478, navigation: true, delay: 5000, opacity: 0.5, effect: 'rain'});
});