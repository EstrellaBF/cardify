(() => {
  // heredando características
  $.fn.extend({
    // nombre de mi plugin
    cardify: function() {
      // crear el objeto aquí
      let defaultOption = {
        alt: 'alt'
      };
      // Se unirá los valores del defaultOptions y el defaultUser
      let opc = $.extend(defaultOption);
      // función constructora
      function init() {
        $(this).addClass('').wrap('<figure class="flex-item image"></figure>').parent().append(`<figcaption> ${$(this).attr('alt')} </figcaption>`);
      };
      // por cada elemento que se invoque inicializar el plugin
      return $(this).each(init);
    }
  });
})(jQuery);