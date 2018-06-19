$(function() {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

// initialize all tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//slider

$(document).ready(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [75, 300],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    }
  });
  $("#amount").val("$" + $("#slider-range").slider("values", 0) +
  " - $" + $("#slider-range").slider("values", 1));

});

// accordion

$(document).ready(function () {
  $('.ui.accordion')
  .accordion();
}
);

// ui dropdown

$(document).ready(function () {
  $('.ui.dropdown')
  .dropdown();
}
)

//slider value

$(document).ready(function () {
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;

  slider.oninput = function () {
    output.innerHTML = this.value;
  }
});


// slider range

$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 200,
    max: 800,
    values: [ 200, 800 ],
    slide: function( event, ui ) {
      $( "#amount" ).val(ui.values[ 0 ] + " - " + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) +
  " - " + $( "#slider-range" ).slider( "values", 1 ) );
} );

$(document).ready(function () {
  $("#slider-range").slider();
});


// numerical up down

// Constants
var KEY_UP = 38,
KEY_DOWN = 40;

// Variables
var min = 0,
max = 30,
step = 1;


$(document).ready(function () {
  $('.ui.icon.button').click(function () {
    var command = $(this).attr('command');
    HandleUpDown(command);
  });

  $('#txtNum').keypress(function (e) {
    var code = e.keyCode;
    if (code != KEY_UP && code != KEY_DOWN) return;
    var command = code == KEY_UP ? 'Up' : code == KEY_DOWN ? 'Down' : '';
    HandleUpDown(command);
  });

  function HandleUpDown(command) {
    var val = $('#txtNum').val().trim();
    var num = val !== '' ? parseInt(val) : 0;
    console.log("thingy");
    switch (command) {
      case 'Up':
      if (num < max) num += step;
      break;
      case 'Down':
      if (num > min) num -= step;
      break;
    }

    $('#txtNum').val(num);
  }
});
