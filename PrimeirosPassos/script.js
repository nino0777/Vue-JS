

let app = new Vue({
    el: '#app',
    data: {

       
name: 'jadeilson'

    },
    directives: {
       
    },
    
    methods: {
 send(e) {
     let form = e.target.form;
     let data = new FormData(form);

     for(let value of  data.entries()) {
         console.log(`${value[0]}: ${value[1]}`)
     }
    
 },
 exec(e) {
     console.log(e.key)
 }
   },
    
    
    computed: {
   
    }
})

