$(document).ready(function() {

	//change the nav style based on scroll position
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 500) {
	        $('.nav').addClass('nav-mini'); 
	    } else {
	        $('.nav').removeClass('nav-mini');
	    }
	});

	//on click slide down the navigation list and toggle the active class;
	$('.nav__burger').click(function() {
		$('.nav__list--mobile').slideToggle();
	});

	//animated scroll effect after clicking a nav link
	$('a').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 1000);
		return false;
	});


	if($(window).width() <= 800) {
		$('.nav__link--mobile').click(function () {
			$('.nav__list--mobile').slideToggle();
		});
	}
});
