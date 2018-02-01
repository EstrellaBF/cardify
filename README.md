# CARDIFY

* **Track:** _Common Core_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_

***

Implementar un plugin de jQuery que dado un contenedor debe buscar todas las imágenes que encuentre dentro del contenedor y reemplazarlas por un nuevo elemento **figure** que contenga la imagen **img** además de un **figcaption** con el texto del atributo alt de la imagen.

## HERRAMIENTAS TECNOLÓGICAS USADAS
* **HTML:**_Lenguaje de marcado para la elaboración de páginas web._
* **CSS:**_Es un lenguaje para definir el estilo o la apariencia de las páginas web._
* **JavaScript:** _Se usa ECMAScript 5 y ECMAScript6._
* **JQuery:** _Se usa con ECMAScript 5 y ECMAScript6._
* **Babel:** _Es un transcompilador que nos permite convertir nuestro código de JavaScript ES6 en código de ES5._
* **Mocha:** _Framework de pruebas de JavaScript que se ejecuta en Node.js. Nos da la posibilidad de crear tanto tests síncronos como asíncronos de una forma muy sencilla._

## PROPÓSITO
Tener un Plugin que pueda dinámicamente atrapar las imágenes en un contenedor 'figure' con un respectivo figcaption, en el cual se almacenará el valor 'alt' de la imágen y esta se verá reflejada con un bonito efecto al pasar el mouse.

## REQUISITOS DE USO
Para poder hacer uso correcto del Plugin, sólo deberá incluir esta línea en su código:

```js
 $('aquí la clase o id del contenedor de sus imágenes').find('img').cardify();
```

## VISTA PREVIA

![Texto alternativo](/ruta/a/la/imagen.jpg)