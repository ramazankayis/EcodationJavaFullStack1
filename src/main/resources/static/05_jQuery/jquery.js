$(document).ready(function () {
  $('#has').click(function () {
    $('p').has('span').css('background-color', 'yellow');
  });

  $('#has2').click(function () {
    $('li').has('span').css('background-color', 'blue');
  });
});

$(document).ready;
