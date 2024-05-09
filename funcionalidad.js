const nombre=document.getElementById("name");
const email=document.getElementById("email");
const msj=document.getElementById("textarea");
const form=document.getElementById("form");
const text=document.getElementById("warnings");
form.addEventListener("Enviar",e=>{
    e.preventDefault()
    let warnings="";
    let entrar=false;
    let regexEmail= /^\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(nombre.value.lenght<3){
        warnings+=`El nombre no es valido <br>`;
        entrar=true;
    }
    if(!regexEmail.test(email.value)){
        warnings+=`El email no es valido <br>`
        entrar=true;
    }
    if (entrar){
        text.innerHTML=warnings;
    }else{
        text.innerHTML="Enviado";
    }
});