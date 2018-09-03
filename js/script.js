// Progress bars

var bar = new ProgressBar.Circle('#progress-circle1', {
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
// bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(0.9);  // Number from 0.0 to 1.0


var bar = new ProgressBar.Circle('#progress-circle2', {
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
// bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(0.5);  // Number from 0.0 to 1.0


var bar = new ProgressBar.Circle('#progress-circle3', {
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
// bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(0.75);  // Number from 0.0 to 1.0