// ============= Aqui van los scripts del proyecto ===========

// ==== Alerta de Formulrario ====

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
      btn.value = 'Enviar Mensaje';
      alert(JSON.stringify(err));
    });
});