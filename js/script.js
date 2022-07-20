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
        email: '',
        randomEmails: [],
    },
    methods: {},
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) => {
            for( i < 0 ; i < 10 ; i++) {
                email = res.data.response;
                getInList.innerHTML= `<li> ${email} </li>`;
                return randomEmails.push(email)
            }
        })
    }
})