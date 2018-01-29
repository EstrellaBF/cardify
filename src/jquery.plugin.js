// Funcion anonima autoejecutable
(($) => {
  $.fn.extend({
    plugin: () => {
      let initialize = () => {
        alert('Funciona mi plugin');
        // Lógica del plugin
        //
      };
      return $(this).each(initialize);
    }
  });
})(jQuery);
