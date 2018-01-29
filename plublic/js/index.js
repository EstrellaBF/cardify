// Funcion anonima autoejecutable
(function($) {
  // jquery le hereda todas sus caracteristicas al nvo objeto
  $.fn.extend({
    // nombre del componente
    plugin: function() {
      // funcion constructora del componente donde ira toda la programacion
      function inicializar() {
        // alert("funciona mi plugin")
        
      }
      return $(this).each(inicializar);
    }
  });
})(jQuery);