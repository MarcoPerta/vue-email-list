// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

var app = new Vue({
    el: '#app',
    data: {
      emailList : [],
      success: false,
    },

    mounted() {

            // for(let i=0; i<10 ; i++){
            //     axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            //     .then( (response) => {
            //     let email = response.data.response;
            //     this.emailList = email;
            // })
    },
 
    methods: {

        inizia() {

            for(let i=0; i<10 ; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (response) => {
                let email = response.data.response;
                this.emailList.push(email);
            })}
            console.log(this.emailList);
        }
    }
  })