# <a href="https://platform.mediamind.com"><img src="http://www.sizmek.es/eb/users/javiegido_/__logos/HTML5.png" alt="Sizmek" width="26" height="36" /></a> Responsive Liquido <a href="https://platform.mediamind.com"><img src="http://www.sizmek.es/eb/users/javiegido_/__logos/logo-dark.png" alt="Sizmek" width="57" height="15" /></a>

Plantilla genérica con todo lo necesario para crear formatos responsive que se adaptan al tamaño de su contenedor utilizando workspaces de Sizmek.

## Descripción

La plantilla para montar la creatividad esta preparada para cambiar la imagen de fondo directamente o incluir cualquier tipo de animacion. Este formato permite no sólo cambiar ajustar la creatividad al ancho del contenedor, tambien permite modificar la altura de nuestra pieza para adaptarse a las resoluciones más pequeñas.


## Configuración 

Para cambiar el tamaño del formato, modifica los valores del fichero *core.js* que se encuentra en el directorio *scripts* de la plantilla.

```javascript
var config = {
	breakPoints: [
		{"min-width": 1030, "banner": 240},
		{"min-width": 749, "max-width": 1029, "banner": 240},
		{"max-width": 499, "banner": 240}
	]
};
```

El valor de "banner" será la altura de la creatividad. Si quieres añadir más breakpoints para modificar la altura simplemente añade una linea más. Con esta configuración por defecto, nuestra creatividad siempre medirá 240px de alto.

También tienes que modificar el valor del parámetro de expansión para que encaje con el tamaño de la imagen de backup que vais a utilizar. Este tamaño marcará el tamaño mínimo al que se reducirá la pieza. El tamaño recomendado es 240x240px o 320x240px.

La funcionalidad responsive del formato no se puede probar en local correctamente, es necesario subir la pieza a la [Plataforma de Sizmek](https://platform.mediamind.com) y probarla a nivel de tag para poder revisar que todo funciona correctamente. 

Cuando tengas terminada la creatividad, sube la pieza a la plataforma. En este caso, el formato que debes seleccionar en la plataforma es **RESPONSIVE PUSHDOWN**. ¿No tienes claro cómo? Puedes seguir esta pequeña guía [Subir Creatividades Sizmek](http://sizmek.es/wiki/doku.php?id=subir_creatividades_html5).

Cuando hayas hecho esto deberias tener algo como en este ejemplo de PRISA:

![Responsive Liquid Setup](https://cloud.githubusercontent.com/assets/15161388/11283835/e2a3c1fe-8f06-11e5-9e66-508431a85069.png)

Este formato necesita reemplazar el JS por defecto que crea la plataforma por este otro, pero no te preocupes, si no sabes como hacerlo lo realizará el equipo de Sizmek.

```
http://a248.e.akamai.net/7/248/7290/v001/eyeblaster.download.akamai.com/7290/HostingServices/Iframe/JEgido/__JS_Finales/PL_Responsive.js
```

Recuerda que si tienes cualquier duda puedes ponerte en contacto con el equipo de <a href="mailto:creativesupport-spain@sizmek.com">Soporte Creativo de Sizmek</a>

***
