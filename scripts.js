// ============= Aqui van los scripts del proyecto ===========

// ==== Alerta de Formulrario ====

const from_name = document.getElementById("from_name");
const email_id = document.getElementById("email_id");
const message = document.getElementById("message");
const form = document.getElementById("form");
const parrafo = document.getElementById("alertas");
const btn = document.getElementById('button');

form.addEventListener("submit", e=>{
  e.preventDefault();
  let alertas = "";
  let entrar = false;
  let regexName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  parrafo.innerHTML = "";
  if(!regexName.test(from_name.value)){
    alertas += '* El nombre no es válido <br>';
    entrar = true;
  };
  if(!regexEmail.test(email_id.value)){
    alertas += '* El email no es válido <br>';
    entrar = true;
  };
  if(message.value.length < 3){
    alertas += ' * El mensaje no es Válido <br>';
    entrar = true;
  };
  if(entrar){
    parrafo.innerHTML = alertas;
  }else{
    
 document.getElementById('form')
 .addEventListener('submit', function(event) {
  event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_7iq26ya';

   emailjs.sendForm(serviceID, templateID, this)
     .then(() => {
      btn.value = 'Enviar Mensaje';
      swal.fire({
        title:'Tu mensaje ha sido enviado con exito',
        showConfirmButton: false,
        showDenyButton: true,
        denyButtonText: 'Cerrar',
      });
      from_name.value = "";
      email_id.value = ""
      message.value = "";      
     }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert(JSON.stringify(err));
     });
 });
}
}); 