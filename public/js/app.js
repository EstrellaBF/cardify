'use strict';

$(document).ready(function() {
  $('#try-plugin').on('click', function() {
    $('.container-img').find('img').cardify();
    $('#try-plugin').addClass('disabled');
  });
  /* $('.container-img').find('img').cardify(); */
});