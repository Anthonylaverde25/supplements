document.addEventListener('DOMContentLoaded', (event) => {
    console.log(location.search) // lee los argumentos pasados a este formulario
    var id = location.search.substring(4)
    console.log(id)

    const { createApp } = Vue
    createApp({
        data() {
            return {
                id: 0,
                usuario: "",
                imagen: "",
                texto: "",
                url: 'https://gerarevrol.pythonanywhere.com/comentarios/' + id,
            }
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        this.id = data.id
                        this.usuario = data.usuario;
                        this.imagen = data.imagen
                        this.texto = data.texto
                    })
                    .catch(err => {
                        console.error(err);
                        this.error = true
                    })
            },
            modificar() {
                let comentario = {
                    usuario: this.usuario,
                    texto: this.texto,
                    imagen: this.imagen
                }
                var options = {
                    body: JSON.stringify(comentario),
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    redirect: 'follow'
                }
                fetch(this.url, options)
                    .then(function () {
                        alert("Registro modificado")
                        window.location.href = "./index.html";
                    })
                    .catch(err => {
                        console.error(err);
                        alert("Error al Modificar")
                    })
            }
        },
        created() {
            this.fetchData(this.url)
        },
    }).mount('#app')
})