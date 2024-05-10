document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const nombre = document.getElementById("name");
    const email = document.getElementById("email");
    const msj = document.getElementById("textarea");
    const text = document.getElementById("warnings");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let warnings = "";
        let entrar = false;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

        if (nombre.value.trim().length < 3) { 
            warnings += `El nombre debe tener al menos 3 caracteres <br>`;
            entrar = true;
        }
        if (!regexEmail.test(email.value)) {
            warnings += `El email no es válido <br>`;
            entrar = true;
        }
        if (entrar) {
            text.innerHTML = warnings;
        } else {
            text.innerHTML = "Enviado";
            form.reset();
        }
    });
});
