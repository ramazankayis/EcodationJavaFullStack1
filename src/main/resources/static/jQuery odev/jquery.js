$(document).ready(function () {
  $('#has').click(function () {
    $('p').has('span').css('background-color', 'yellow');
  });

  $('#has2').click(function () {
    $('li').has('span').css('background-color', 'blue');
  });

  $('#img_id').attr('width', '50%').attr('height', '100px');
});

$(document).ready;
