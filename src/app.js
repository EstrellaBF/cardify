(() => {
  $.fn.extend({
    // nombre de mi plugin
    cardify: function(defaultUser) {
      // crear el objeto aquí
      let defaultOption = {
        alt: 'alt'
      };
      // Se unirá los valores del defaultOptions y el defaultUser
      opc = $.extend(defaultOption, defaultUser);
      let init = () => {
        $(this).addClass('img-plugin').wrap('<figure></figure>').parent().append(`<figcaption>' ${$(this).attr('alt')}</figcaption>`);
      };
      // por cada elemento que se invoque inicializar el plugin
      return $(this).each(init);
    }
  });
})(jQuery);