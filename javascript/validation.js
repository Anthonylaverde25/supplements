export function showForm() {
  const modal = document.createElement("DIV");
  modal.classList.add("modal");
  modal.innerHTML = `
  <form class="formulario">

   <div class="container__form">
      <div class="campo">
         <label for="name">Nombre</label>
         <input type="text" id="name" name="name" placeholder="Ingresa tu nombre">
      </div>

      <div class="campo">
         <label for="email">Email</label>
         <input type="email" id="email" name="email" placeholder="Ingresa tu email">
      </div>

      <div class="campo">
         <label for="textarea">Mensaje</label>
         <textarea class="textarea" id="textarea" placeholder="Ingresa tu mensaje"></textarea>
      </div>

      <div class="opciones">
        <input  type="submit" class="send-message btnModal btnModal-enviar " value="Enviar mensaje">
        <button type="button" class="cerrar-modal  btnModal btnModal-cerrar ">Cancelar</button>
      </div>
   </div>
    
   <div class="iframe__container">
   <iframe
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168881864515!2d-58.3841453255361!3d-34.60373445749684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1694908840355!5m2!1ses-419!2sar"
     width="100%"
     height="100%"
     style="border: 0"
     allowfullscreen=""
     loading="lazy"
     referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
   </div>
    
  </form>  
   
  `;

  setTimeout(() => {
    const form = document.querySelector(".formulario");
    form.classList.add("animar");
  }, 0);

  modal.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.classList.contains("cerrar-modal")) {
      const formulario = document.querySelector(".formulario");
      formulario.classList.add("cerrar");
      console.log(formulario);
      setTimeout(() => {
        modal.remove();
      }, 400);
    }
  });

  const body = document.querySelector("body").appendChild(modal);
}
