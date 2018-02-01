module.exports = {myPlugin: (() => {
  // heredando características
  $.fn.extend({
    // nombre de mi plugin
    cardify: function(defaultUser) {
      // crear el objeto aquí
      let defaultOption = {
        alt: 'alt'
      };
      // Se unirá los valores del defaultOptions y el defaultUser
      opc = $.extend(defaultOption, defaultUser);
      // función constructora
      function init() {
        // console.log($(this).attr('alt'));
        $(this).addClass('img-plugin').wrap('<figure></figure>').parent().append(`<figcaption> ${$(this).attr('alt')} </figcaption>`);
      };
      // por cada elemento que se invoque inicializar el plugin
      return $(this).each(init);
    }
  });
})}(jQuery);

$(document).ready(() => {
  $('.container-img').find('img').cardify();
});
