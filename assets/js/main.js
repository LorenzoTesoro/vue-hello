const { createApp } = Vue

createApp({
    data(){
        return{
            message: 'Hello World',
            image:'https://picsum.photos/id/684/600/400'
        }
    }
}).mount('#app')


// Aggiungere alla pagina un’immagine, presa anch’essa da un data.