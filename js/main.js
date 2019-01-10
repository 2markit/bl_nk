$(document).ready(function() {
  logoFadeInit();
  setTimeout(section1Panels, 3000);
});
// Set Variable for header
var navbarHeader = $('#navbarHeader');

//      contact form animations
$(function() {
	 $('#contact-us').click(function() {
		 $('#contact-area').fadeToggle();
	 })

	$(document).mouseup(function (e) {
	 var container = $('#contact-area');

	 if (!container.is(e.target) // if the target of the click isn't the container...
	     && container.has(e.target).length === 0) // ... nor a descendant of the container
	 {
	     container.fadeOut();
	 }
	});
});


//      ===== Scroll to Top ====
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {
    // If page is scrolled more than 50px
    $('#return-to-top').fadeIn(200); // Fade in the arrow
  } else {
    $('#return-to-top').fadeOut(200); // Else fade out the arrow
  }
});

$('#return-to-top').click(function() {
  // When arrow is clicked
  $('body,html').animate({
      scrollTop: 0, // Scroll to top of body
    },
    800
  );
  section1Panels();
});


//      LOGO HEADER SHRINK animation
function logoFadeInit() {
  $('#logo').animate({
    opacity: '1',
  }, 1000);
  setTimeout(headerShrink, 1800);
}


function headerShrink() {
  $('#navbarHeader').animate({
    height: '5.5vh',
  }, 1200);
  $('#logo').animate({
    marginTop: '0.5vh',
    height: '4.5vh',
  }, 1200);
  $('#logo .st0').addClass('logoFadeAnim').css({
    'stroke': '#fff',
  });
  $('#logo .st1').addClass('logoFade2Anim').css({
    'stroke': '#fff',
  });
	$('#logo .st2').addClass('logoFade3Anim').css({
		'fill': '#fff',
	});
  $('#navbarHeader').addClass('headerFadeAnim').css({
    'backgroundColor': '#000',
  });
}


//   FIRST PANEL
function section1Panels() {
  $('#contact-us').fadeIn('slow'); // Fade in the button
  $('#section1').removeClass('hidden2');
  $('#section1 .frontLeft').fadeIn('fast').addClass('leftAnim');
  $('#section1 .mobileFrontLeft').fadeIn('fast').addClass('leftAnim');
  $('#section1 .frontRight').fadeIn('fast').addClass('rightAnim');
  $('#section1 .mobileFrontRight').fadeIn('fast').addClass('rightAnim');
  $('#section1 .backLeft').addClass('leftAnim').delay(200).fadeOut('fast');
  $('#section1 .mobileBackLeft').addClass('leftAnim').delay(200).fadeOut('fast');
  $('#section1 .backRight').addClass('rightAnim').delay(200).fadeOut('fast');
  $('#section1 .mobileBackRight').addClass('rightAnim').delay(200).fadeOut('fast');
  $('#section1 div').fadeIn('slow').removeClass('hidden');
  $('#section1 a').delay(800).fadeIn('slow');
}


//   Next Button
$('#section1 a').click(function() {
  $('html, body').animate({
      scrollTop: $('#section2').offset().top - (navbarHeader.height()),
    },
    1000
  );
  $('#section1 a').fadeOut(500);
  setTimeout(section2Panels, 250);
});


//   SECOND PANEL
function section2Panels() {
  $('#section2 div').removeClass('hidden2 hidden');
  $('#section2 .frontLeft').fadeIn('fast').addClass('leftAnim');
  $('#section2 .frontRight').fadeIn('fast').addClass('rightAnim');
  $('#section2 .backLeft').addClass('leftAnim').delay(275).fadeOut('fast');
  $('#section2 .backRight').addClass('rightAnim').delay(275).fadeOut('fast');
  $('#section2 div').fadeIn('slow').removeClass('hidden2 hidden');
  $('#section2 a').delay(800).fadeIn('slow');
}


//   Next Button
$('#section2 a').click(function() {
  $('html, body').animate({
      scrollTop: $('#section3').offset().top - (navbarHeader.height()),
    },
    1000
  );
  $('#section2 a').fadeOut(500);

  setTimeout(section3Panels, 250);
});


//   THIRD PANEL
function section3Panels() {
  $('#section3 div').removeClass('hidden2 hidden');
  $('#section3 .frontLeft').fadeIn('fast').addClass('leftAnim');
  $('#section3 .frontRight').fadeIn('fast').addClass('rightAnim');
  $('#section3 .backLeft').addClass('leftAnim').delay(275).fadeOut('fast');
  $('#section3 .backRight').addClass('rightAnim').delay(275).fadeOut('fast');
  $('#section3 div').fadeIn('slow').removeClass('hidden2 hidden');
  $('#section3 a').delay(800).fadeIn('slow');
}


//   Next Button
$('#section3 a').click(function() {
  $('html, body').animate({
      scrollTop: $('#section4').offset().top - (navbarHeader.height()),
    },
    1000
  );
  $('#section3 a').fadeOut(500);

  setTimeout(section4Panels, 250);
});

//   FOURTH PANEL
function section4Panels() {
  $('#section4 div').removeClass('hidden2 hidden');
  $('#section4 .frontLeft').fadeIn('fast').addClass('leftAnim');
  $('#section4 .frontRight').fadeIn('fast').addClass('rightAnim');
  $('#section4 .backLeft').addClass('leftAnim').delay(200).fadeOut('fast');
  $('#section4 .backRight').addClass('rightAnim').delay(200).fadeOut('fast');
  $('#section4 div').fadeIn('slow').removeClass('hidden2 hidden');
  $('#section4 a').delay(800).fadeIn('slow');
}


//   Next Button
$('#section4 a').click(function() {
  $('html, body').animate({
      scrollTop: $('#section5').offset().top - (navbarHeader.height()),
    },
    1000
  );
  $('#section4 a').fadeOut(500);

  setTimeout(section5Panels, 250);
});


//   FIFTH PANEL
function section5Panels() {
  $('#section5 div').removeClass('hidden2 hidden');
  $('#section5 .frontLeft').fadeIn('fast').addClass('leftAnim');
  $('#section5 .frontRight').fadeIn('fast').addClass('rightAnim');
  $('#section5 .backLeft').addClass('leftAnim').delay(200).fadeOut('fast');
  $('#section5 .backRight').addClass('rightAnim').delay(200).fadeOut('fast');
  $('#section5 div').fadeIn('slow').removeClass('hidden2 hidden');
  $('#section5 a').delay(800).fadeIn('slow');
}


//   Next Button
$('#section5 a').click(function() {
  $('html, body').animate({
      scrollTop: $('#section6').offset().top - (navbarHeader.height()),
    },
    1000
  );
  $('#section5 a').fadeOut(500);

  setTimeout(section6Panels, 250);
});


//   SIXTH PANEL
function section6Panels() {
  $('#section6 div').removeClass('hidden2 hidden');
  $('#section6 .frontLeft').fadeIn('fast').addClass('leftAnim');
  $('#section6 .frontRight').fadeIn('fast').addClass('rightAnim');
  $('#section6 .backLeft').addClass('leftAnim').delay(200).fadeOut('fast');
  $('#section6 .backRight').addClass('rightAnim').delay(200).fadeOut('fast');
  $('#section6 div').fadeIn('slow').removeClass('hidden2 hidden');
  $('#section6 a').delay(800).fadeIn('slow');
}


//   Next Button
$('#section6 a').click(function() {
  $('html, body').animate({
      scrollTop: $('#section7').offset().top - (navbarHeader.height()),
    },
    1000
  );
  $('#section6 a').fadeOut(500);
});
