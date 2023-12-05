const mostrar = document.getElementById('mostrar');
const ocultar = document.getElementById('ocultar');

mostrar.addEventListener('click', () => {
    const divsOcultos = document.querySelectorAll('.ocultar');
    divsOcultos.forEach(div => div.style.display = 'block');
    mostrar.style.display = 'none';
    ocultar.style.display = 'block';
});

ocultar.addEventListener('click', () => {
    const divsOcultos = document.querySelectorAll('.ocultar');
    divsOcultos.forEach(div => div.style.display = 'none');
    mostrar.style.display = 'block';
    ocultar.style.display = 'none';
});



// const form = document.getElementById('login-form');

//         form.addEventListener('submit', async (event) => {
//             event.preventDefault();

//             const username = document.getElementById('username').value;
//             const password = document.getElementById('password').value;

//             if (username === 'admin' && password === 'password') {
//                 window.location.href = './index.html';
//             } else {
//                 alert('Usuario o contraseña incorrectos');
//             }
//         });
