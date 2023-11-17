import { suplementosEnergeticos } from "./../data/suplementosData.js";

const button = document.querySelector(".btnAllProduct"); // Botón para desplegar/ocultar los productos
const contenedor = document.querySelector(".ourProduct__title"); // Contenedor donde se despliegan nuestros productos
let productosMostrados = false; // Variable para rastrear si los productos están mostrados o no
let cardContainer; // Variable para el contenedor de tarjetas

button.addEventListener("click", () => {
  if (!productosMostrados) {
    mostrarProductos();
  } else {
    ocultarProductos();
  }
});

const mostrarProductos = () => {
  cardContainer = document.createElement("div");
  cardContainer.classList.add("container__cards");

  suplementosEnergeticos.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("cardProducto", "m-2", "shadow-sm"); // Clases de Bootstrap para tarjeta, margen y sombra

    const imagen = document.createElement("img");
    imagen.src = `../data/images/${producto.image}`;
    imagen.classList.add("card-img-top"); // Clase de Bootstrap para imagen en la parte superior

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const titulo = document.createElement("h5");
    titulo.classList.add("card-title");
    titulo.textContent = producto.title;

    const precio = document.createElement("p");
    precio.classList.add("card-text");
    precio.textContent = `Precio: ${producto.price}`;

    cardBody.appendChild(titulo);
    cardBody.appendChild(precio);

    card.appendChild(imagen);
    card.appendChild(cardBody);

    cardContainer.appendChild(card);
  });

  contenedor.insertBefore(cardContainer, button.nextSibling);
  productosMostrados = true;
};

const ocultarProductos = () => {
  if (productosMostrados && cardContainer) {
    contenedor.removeChild(cardContainer);
    productosMostrados = false;
  }
};
