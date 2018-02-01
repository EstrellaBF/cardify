'use strict';

// Funcion anonima autoejecutable
(function ($) {
  $.fn.extend({
    plugin: function plugin() {
      var initialize = function initialize() {
        alert('Funciona mi plugin');
        // Lógica del plugin
        //
      };
      return $(undefined).each(initialize);
    }
  });
})(jQuery);