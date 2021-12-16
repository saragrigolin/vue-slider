/*
Descrizione:
Partendo dal markup allegato, rifare lo slider ma questa volta usando Vue.

Bonus:
1- al click su uno dei pallini mostrare l’immagine in posizione corrispondente
2- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
Consigli del giorno:
Leggete sempre la documentazione, partite dalle cose basilari per poi aggiungere complessità.
Ricordiamo sempre che è necessario capire bene prima che dati dobbiamo andare a manipolare.
*/

//utilizzo VueJS
const app = new Vue (
    {
        el: '#app', //dichiaro l'elemento da usare
        data: { //dichiaro i dati
            images: [
                'image1.jpg',
                'image2.jpg',
                'image3.jpg',
                'image4.jpg'
            ],
            counter: 0,
        },
        methods: { //funzioni
            nextImg: function(){ //funzione per andare avanti
                this.counter += 1;
                if (this.counter > this.images.length - 1) {
                    this.counter = 0;
                }
            },
            prevImg: function(){ //funzione per tornare indietro
                this.counter -= 1;
                if (this.counter < 0) {
                    this.counter = this.images.length - 1;
                }
            },
            dotClick: function(index){ //funzione per rendere cliccabili i pallini
                this.counter = index;
            },
            play: function(){ //funzione per l'autoplay
                this.timer = setInterval(() => {
                    this.nextImg();
                }, 3000);
            }
        },
        created: function () {
            this.play();
        }
    }
)