Juego del Amigo Secreto

Descripción

El Juego del Amigo Secreto es una aplicación interactiva cuyo objetivo es fortalecer las habilidades en lógica de programación. Permite a los usuarios agregar nombres a una lista y realizar un sorteo aleatorio para elegir un "amigo secreto".

Funcionalidades

Agregar nombres a una lista con un máximo de 11 amigos.

Validación de nombres (solo letras, sin caracteres especiales o números).

Prevención de nombres duplicados en la lista.

Mostrar la lista de amigos agregados.

Realizar el sorteo del amigo secreto de manera aleatoria.

Mensajes de error y éxito según la interacción del usuario.

Reinicio del juego para volver a comenzar.

Requisitos

Para ejecutar este proyecto, es necesario contar con:

Un navegador web moderno con soporte para JavaScript.

Un archivo HTML que contenga los elementos de entrada, botones y contenedores de resultados.

Uso

Iniciar la aplicación (por defecto, muestra las instrucciones y permite la entrada de nombres).

Ingresar nombres en la caja de texto y presionar el botón "Agregar Amigo".

Una vez que la lista esté completa o contenga los amigos deseados, hacer clic en "Sortear Amigo".

Se mostrará el nombre del amigo secreto seleccionado al azar.

Para reiniciar el juego, presionar "Reiniciar Juego".

Código Principal

El código se basa en funciones JavaScript que permiten:

Manejar la interfaz de usuario mediante document.querySelector y document.getElementById.

Validar entradas con una expresión regular (regex).

Gestionar la lista de amigos en un array (listaAmigos).

Implementar un sorteo aleatorio usando Math.random().

Funciones Clave

asignarTextoElemento(elemento, texto): Modifica el contenido de un elemento HTML.

limpiarCaja(): Limpia el campo de entrada de nombres.

mostrarAmigos(): Muestra la lista de amigos agregados.

agregarAmigo(): Agrega un nombre validado a la lista.

sortearAmigo(): Selecciona aleatoriamente un amigo secreto.

condicionesIniciales(): Configura el estado inicial del juego.

reiniciarJuego(): Restablece los valores iniciales.

Personalización

Puedes modificar las siguientes variables para ajustar el comportamiento del juego:

numeroMaximoAmigos: Número máximo de amigos permitidos en la lista.

regex: Expresión regular para validar nombres.

estilos CSS: Puedes agregar estilos personalizados para mejorar la apariencia del juego.

Autor

Proyecto desarrollado como parte de un desafío para mejorar la lógica de programación con JavaScript.

¡Diviértete jugando al Amigo Secreto!
