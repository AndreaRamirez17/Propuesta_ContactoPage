document.addEventListener("DOMContentLoaded", function() {
    /**document es un objeto que representa el documento HTML cargado en el navegador.
     * usamos addEvent Listener para que el código dentro de la función solo se ejecute una vez que todo el contenido HTML se haya cargado por completo.
     * "DOMContentLoaded":es un evento predefinido en el contexto del DOM,se dispara cuando el documento HTML ha sido completamente cargado por el navegador, sin esperar a que se carguen los estilos, imágenes y otros subrecursos.
     */
    const form = document.getElementById("form");
    const nombre = document.getElementById("name");
    const email = document.getElementById("email");
    const msj = document.getElementById("textarea");
    const text = document.getElementById("warnings");
    /**
     * Estas líneas obtienen referencias a los elementos del formulario usando getElementById. Cada constante almacena un elemento específico del DOM:
     * form: el formulario completo
     * nombre: el campo de entrada para el nombre.
     * email: el campo de entrada para el correo electrónico.
     * msj: el área de texto para el mensaje.
     * text: un elemento (posiblemente un div o p) donde se mostrarán las advertencias.
     */
    // Cargar datos de localStorage si existen
    if (localStorage.getItem("nombre")) {
        nombre.value = localStorage.getItem("nombre");
        console.log("Nombre cargado de localStorage:", nombre.value);
    }
    if (localStorage.getItem("email")) {
        email.value = localStorage.getItem("email");
        console.log("Email cargado de localStorage:", email.value);
    }
    if (localStorage.getItem("mensaje")) {
        msj.value = localStorage.getItem("mensaje");
        console.log("Mensaje cargado de localStorage:", msj.value);
    }
    form.addEventListener("submit", function(e) {
        //Este evento se activa cuando el formulario se envía. La función de manejo de eventos toma un parámetro e, que representa el evento del envío del formulario.
        e.preventDefault();
        /**
         * Esta línea previene que el formulario se envíe automáticamente y se recargue la página, permitiendo validar los datos primero.
         * Cuando un formulario se envía, el comportamiento predeterminado del navegador es intentar enviar los datos del formulario a la URL especificada en el atributo action del formulario y luego recargar la página. Al usar preventDefault(), se evita este comportamiento, permitiendo al desarrollador manejar el envío de manera personalizada
         */
        let warnings = "";

        /** 
         * una cadena donde se acumulan los mensajes de advertencia.
         * Esto asegura que cada vez que se intente enviar el formulario, warnings comience sin ningún contenido previo. 
         * El usuario verá todos los mensajes de advertencia concatenados, ayudándole a corregir todos los errores antes de volver a intentar enviar el formulario.
         * */
        
        let entrar = false;
        /**
         * Un booleano que indica si hay alguna advertencia que mostrar.
         * La variable entrar se inicializa como false porque esto indica que, inicialmente, no se han encontrado errores de validación. 
         * A medida que se validan los distintos campos del formulario, entrar se actualizará a true si se detecta algún error. 
         */
        
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; 
        /**
         * una expresión regular para validar el formato del correo electrónico.
         * ^\w+: Uno o más caracteres de palabra al inicio.
         * ([\.-]?\w+)*: Cero o más secuencias de un punto o guion seguidas de caracteres de palabra.
         * @\w+: Un símbolo arroba seguido de uno o más caracteres de palabra.
         * ([\.-]?\w+)*: Cero o más secuencias de un punto o guion seguidas de caracteres de palabra.
         * (\.\w{2,3})+: Uno o más puntos seguidos de 2 o 3 caracteres de palabra.
         * $: Fin de la cadena.*/
        if (nombre.value.trim().length < 3) { 
            //Esta condición verifica si el nombre tiene al menos 3 caracteres (después de eliminar espacios en blanco al principio y al final).
            warnings += `El nombre debe tener al menos 3 caracteres <br>`;
            entrar = true;
            //Si la longitud no cumple con el tamañao definido, se agrega una advertencia y entrar se establece en true
        }
        if (!regexEmail.test(email.value)) {
            /**
             * Esta condición verifica si el valor del correo electrónico cumple con el formato de la expresión regular. Si no es válido, se añade una advertencia y se marca entrar como true.
             * test es una función proporcionada por el objeto de expresiones regulares en JavaScript (RegExp) que se utiliza para verificar si una cadena cumple con el patrón definido por una expresión regular. 
             * Si el método test devuelve false (lo que significa que el valor no coincide con el patrón), la negación ! lo convierte en true.
             */
            warnings += `El email no es válido <br>`;
            entrar = true;
            //Si el correo electrónico no cumple con el formato de la expresión regular, se agrega una advertencia y entrar se establece en true
        }
        if (msj.value.trim() === "" && msj.value.trim().length<6){ 
            warnings+=`Debes colocar un mensaje en el cuadro de texto <br>`;
            entrar=true;
        } 

        //Si entrar es true (hay advertencias), se muestran los mensajes en el elemento text.Si no hay advertencias (entrar es false), se muestra el mensaje "Enviado" y se restablece el formulario (form.reset()), limpiando todos los campos.
        if (entrar) {
            text.innerHTML = warnings;
            //Esto significa que se encontraron errores durante la validación, y se muestran las advertencias acumuladas en el elemento text.
        } else {
            //Esto significa que no se encontraron errores y se puede proceder con el envío del formulario. Se muestra el mensaje "Enviado" y se restablece el formulario (form.reset()), limpiando todos los campos.
            text.innerHTML = "Enviado";
            // Guardar datos en localStorage
            localStorage.setItem("nombre", nombre.value);
            localStorage.setItem("email", email.value);
            localStorage.setItem("mensaje", msj.value);

            
            form.reset();

        }
        
        
        

    });
});
