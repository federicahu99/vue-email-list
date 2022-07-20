/*
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

console.log('ok', Vue)
const getInList= document.getElementById('email-list');

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
            axios.get(this.endPoint) //axios
            .then((res) => {         
                this.emailRandom = res.data.response;
                return this.randomEmailsList.push(this.emailRandom);
                })
            },
        getTenRandomEmails() {
            for( i < 0 ; i < this.numberOfEmails ; i++ ) {
                getRandomEmail();
                return console.log(this.randomEmailsList);
            }
        },
       
    },
})