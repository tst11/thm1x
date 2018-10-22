$(window).on('load', function(){
  $(window).scrollTop(0);
  $('.spinner').css('display', 'none');
  $('.page-content').css('visibility', 'visible');
  $('.page-content').addClass("visible");
})

// Progress bars

var bar1 = new ProgressBar.Circle('#progress-circle1', {
  color: '#FF6065',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#FF6065', width: 1 },
  to: { color: '#FF6065', width: 3 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 161);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar1.text.style.fontSize = '2rem';


var bar2 = new ProgressBar.Circle('#progress-circle2', {
  color: '#71B3FF',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1200,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#71B3FF', width: 1 },
  to: { color: '#71B3FF', width: 3 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 156);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar2.text.style.fontSize = '2rem';


var bar3 = new ProgressBar.Circle('#progress-circle3', {
  color: '#AB71FF',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1000,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#AB71FF', width: 1 },
  to: { color: '#AB71FF', width: 3 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 170);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar3.text.style.fontSize = '2rem';

$('.to-top').click(function() {
  $('html, body').animate({ scrollTop: 0 }, "slow");
  return false;
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

var elemTop = $(".circle-progress").offset().top;

function animateProgress() {
  bar1.animate(0.9);  // Number from 0.0 to 1.0
  bar2.animate(0.5);  // Number from 0.0 to 1.0
  bar3.animate(0.75);  // Number from 0.0 to 1.0
}

var docViewBottom;
var executed = false;
$(window).scroll(function() {
  var docViewTop = $(window).scrollTop();
  docViewBottom = docViewTop + $(window).height();

  if(docViewBottom > elemTop + 100 && executed === false) {
    animateProgress(docViewBottom);
    executed = true;
  }
  
});

AOS.init({
  duration: 1000
});

$(".owl-carousel").owlCarousel({
  nav:true,
  loop:false,
  rewind: true,
  responsive:{
        0:{
            items:1,
            nav:false
        },
        576:{
            items:2,
            nav:false
        },
        992:{
            items:3,
            nav:true
        }
    }
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $('nav').addClass('nav-color');
    } else {
        $('nav').removeClass('nav-color');
    }

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("to-top").style.display = "block";
    } else {
        document.getElementById("to-top").style.display = "none";
    }
}