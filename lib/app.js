'use strict';

(function ($) {
  // heredando características
  $.fn.extend({
    // nombre de mi plugin
    cardify: function cardify(defaultUser) {
      var _this = this;

      // crear el objeto aquí
      var defaultOption = {
        alt: 'alt'
      };
      // Se unirá los valores del defaultOptions y el defaultUser
      opc = $.extend(defaultOption, defaultUser);
      var init = function init() {
        $(_this).addClass('img-plugin').wrap('<figure></figure>').parent().append('<figcaption>' + $(_this).attr('alt') + '</figcaption>');
      };
      // por cada elemento que se invoque inicializar el plugin
      return $(this).each(init);
    }
  });
})(jQuery);