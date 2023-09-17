// ============= Aqui van los scripts del proyecto ===========

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_7iq26ya';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      alert('Tu mensaje ha sido enviado con exito');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});