/**
 * Stampare a schermo un messaggio all’interno di un h1, utilizzando i data di Vue.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
 */


// creazione instanza Vue

const app = new Vue({
    el: '#app',
     // struttura dati
   
     data: {
         title: 'Benvenuto Vue',
         image: 'https://picsum.photos/200/300'
     }
})