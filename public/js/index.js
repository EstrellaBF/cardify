'use strict';

(function () {
  // heredando características
  $.fn.extend({
    // nombre de mi plugin
    cardify: function cardify() {
      // crear el objeto aquí
      var defaultOption = {
        alt: 'alt'
      };
      // Se unirá los valores del defaultOptions y el defaultUser
      var opc = $.extend(defaultOption);
      // función constructora
      function init() {
        // console.log($(this).attr('alt'));
        $(this).addClass('img-plugin').wrap('<figure></figure>').parent().append('<figcaption> ' + $(this).attr('alt') + ' </figcaption>');
      };
      // por cada elemento que se invoque inicializar el plugin
      return $(this).each(init);
    }
  });
})(jQuery);