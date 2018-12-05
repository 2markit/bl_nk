$(document).ready(function() {
  section1Panels();
  $("#section1 div")
    .fadeIn(1200)
    .removeClass("hidden");
  $("#section1 a")
    .delay(800)
    .fadeIn("slow");
});

// ===== Scroll to Top ====
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {
    // If page is scrolled more than 50px
    $("#return-to-top").fadeIn(200); // Fade in the arrow
  } else {
    $("#return-to-top").fadeOut(200); // Else fade out the arrow
  }
});
$("#return-to-top").click(function() {
  // When arrow is clicked
  $("body,html").animate(
    {
      scrollTop: 0 // Scroll to top of body
    },
    800
  );
});

// FIRST PANEL

function section1Panels() {
  $("#section1 .frontLeft").addClass("leftAnim")
    .delay(10)
    .fadeIn("slow");
  $("#section1 .frontRight").addClass("rightAnim")
    .delay(10)
    .fadeIn("slow");
  $("#section1 .backLeft").addClass("leftAnim")
    .delay(750)
    .fadeOut("fast");
  $("#section1 .backRight").addClass("rightAnim")
    .delay(750)
    .fadeOut("fast");
}

      // Next Button
$("#section1 a").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#section2").offset().top - 40
    },
    1000
  );
  $("#section1 a").fadeOut(500);
  $("#section2 a")
    .delay(1000)
    .fadeIn("slow");
  $("#section2 div")
    .fadeIn(1600)
    .removeClass("hidden2 hidden");
  $("#section2 .frontLeft")
    .addClass("leftAnim");
  $("#section2 .frontRight")
    .addClass("rightAnim");

    section2Panels();
});


// SECOND PANEL

function section2Panels() {
  $("#section2 .frontLeft").addClass("leftAnim")
    .delay(10)
    .fadeIn("slow");
  $("#section2 .frontRight").addClass("rightAnim")
    .delay(10)
    .fadeIn("slow");
  $("#section2 .backLeft").addClass("leftAnim")
    .delay(750)
    .fadeOut("fast");
  $("#section2 .backRight").addClass("rightAnim")
    .delay(750)
    .fadeOut("fast");
}


      // Next Button


$("#section2 a").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#section3").offset().top - 40
    },
    1000
  );
  $("#section2 a").fadeOut(500);
  $("#section3 a")
    .delay(1000)
    .fadeIn("slow");
  $("#section3 div")
    .fadeIn(1600)
    .removeClass("hidden2 hidden");
  $("#section3 .frontLeft")
    .addClass("leftAnim");
  $("#section3 .frontRight")
    .addClass("rightAnim");

    section3Panels();
});


// THIRD PANEL

function section3Panels() {
$("#section3 .frontLeft").addClass("leftAnim")
  .delay(10)
  .fadeIn("slow");
$("#section3 .frontRight").addClass("rightAnim")
  .delay(10)
  .fadeIn("slow");
$("#section3 .backLeft").addClass("leftAnim")
  .delay(750)
  .fadeOut("fast");
$("#section3 .backRight").addClass("rightAnim")
  .delay(750)
  .fadeOut("fast");
}


      // Next Button

$("#section3 a").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#section4").offset().top - 40
    },
    1000
  );
  $("#section3 a").fadeOut(500);
  $("#section4 a")
    .delay(1000)
    .fadeIn("slow");
  $("#section4 div")
    .fadeIn(1600)
    .removeClass("hidden2 hidden");
  $("#section4 .frontLeft")
    .addClass("leftAnim");
  $("#section4 .frontRight")
    .addClass("rightAnim");

    section4Panels();
});


// FOURTH PANEL

function section4Panels() {
  $("#section4 .frontLeft").addClass("leftAnim")
    .delay(10)
    .fadeIn("slow");
  $("#section4 .frontRight").addClass("rightAnim")
    .delay(10)
    .fadeIn("slow");
  $("#section4 .backLeft").addClass("leftAnim")
    .delay(750)
    .fadeOut("fast");
  $("#section4 .backRight").addClass("rightAnim")
    .delay(750)
    .fadeOut("fast");
}


      // Next Button

$("#section4 a").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#section5").offset().top - 40
    },
    1000
  );
  $("#section4 a").fadeOut(500);
  $("#section5 a")
    .delay(1000)
    .fadeIn("slow");
  $("#section5 div")
    .fadeIn(1600)
    .removeClass("hidden2 hidden");
  $("#section5 .frontLeft")
    .addClass("leftAnim");
  $("#section5 .frontRight")
    .addClass("rightAnim");

    section5Panels();
});



// FIFTH PANEL

function section5Panels() {
  $("#section5 .frontLeft").addClass("leftAnim")
    .delay(10)
    .fadeIn("slow");
  $("#section5 .frontRight").addClass("rightAnim")
    .delay(10)
    .fadeIn("slow");
  $("#section5 .backLeft").addClass("leftAnim")
    .delay(750)
    .fadeOut("fast");
  $("#section5 .backRight").addClass("rightAnim")
    .delay(750)
    .fadeOut("fast");
}


      // Next Button

$("#section5 a").click(function() {
  $("html, body").animate(
    {
      scrollTop: $("#section5").offset().top - 40
    },
    1000
  );
  $("#section5 a").fadeOut(500);
  $("#section6 a")
    .delay(1000)
    .fadeIn("slow");
  $("#section6 div")
    .fadeIn(1600)
    .removeClass("hidden2 hidden");
  $("#section6 .frontLeft")
    .addClass("leftAnim");
  $("#section6 .frontRight")
    .addClass("rightAnim");
});
