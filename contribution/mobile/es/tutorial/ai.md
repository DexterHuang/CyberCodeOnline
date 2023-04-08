### ¿Cómo agrego mi lore o conocimiento del juego al conjunto de conocimientos de AI?
 Simplemente puedes editar los siguientes archivos en nuestra página de github:
 - contribución/móvil/{lang}/tutorial/FAQ.md
 - contribución/móvil/{lang}/ai/knowledge.md

Una vez que se haya aprobado tu pull request, la IA aprenderá automáticamente el nuevo conocimiento.

NOTA: si el archivo aún no existe en su idioma, simplemente crealo.

 ### ¿Qué se permite agregar al conjunto de conocimientos de IA?  ¿Y a qué archivo agregarlo?
 #### Debes agregar lo siguiente al archivo FAQ.md:

 - Datos del juego como "¿cómo xxxx?", "¿qué es xxxx?"
 - Consejos del juego

 #### Debes agregar lo siguiente a Knowledge.md:

 - Lores

NO hagas autoinserción en los archivos, no se aprobará.

A menos que se trate de una situación especial, si tu edición contiene nombres de jugadores, no se aprobará para garantizar la equidad para todos.

 ### ¿Cuál debe ser el formato?
 Siempre debe seguir el siguiente formato:
 ```
 ### ¿Puedo usar equipo que sea más alto que nuestro nivel de personaje?
 No. El jugador no puede usar equipo que sea más alto que el nivel actual del personaje.


 ### ¿Otra pregunta?
 La respuesta de otra pregunta


 ```
 Ten en cuenta que:
 - Formatea siempre el fragmento de conocimiento en forma de pregunta-respuesta-par, así es como el bot recibirá consultas, por lo que es la forma más efectiva de proporcionar conocimiento
 - La pregunta debe tener el prefijo `###`, este es el formato de markdown para el título.
 - La pregunta debe ser lo que se espera que los jugadores le pregunten a la IA, esto aumentará el rendimiento y es probable que la IA le "recuerde/vincule" su conocimiento cuando el jugador haga una pregunta más similar/la misma
 - Siempre termina la sección del par de preguntas y respuestas con **2 líneas vacías**, esto ayudará al algoritmo a separar su fragmento de conocimiento de otro fragmento
 - Indica solo hechos y se conciso sin agregar emociones/emojis en la respuesta o pregunta, esto ayudará a filtrar información irrelevante para la IA.
