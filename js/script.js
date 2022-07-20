/*
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

console.log('ok', Vue);
const tag = document.getElementById('emails-list')

const root = new Vue ({
    el: "#root",
    data : {
        numberOfEmails: 10, //email da creare
        emailRandom: '', //email random
        randomEmailsList: [], //array di 10 email create randomicamente
        endPoint: 'https://flynn.boolean.careers/exercises/api/random/mail',
    },
    methods: {
        getRandomEmail() {
            for(let i = 0; i< this.numberOfEmails; i++ ) {
                axios.get(this.endPoint) //axios all'interno del ciclo for per non fare ripetere più volte lo stesso email random
                .then((res) => {         
                    this.emailRandom = res.data.response;
                    this.randomEmailsList.push(this.emailRandom);
                    })
            }
        },
    },
    created() {
        this.getRandomEmail();
    }
})