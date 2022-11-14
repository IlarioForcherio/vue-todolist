var app = new Vue({
    el: '#root',
    data: {

      todoList:[
        {testo:'comprare cose',done:true},
        {testo:'pulire cose',done:true},
      ],

      indice: 0,
    },

    created(){

    },

    mounted(){

    },


    methods: {

      eliminaFaccenda: function(index){
       //devo rimuovere un certo oggetto dall'array secondo l'index
       //si deve usare il metodo splice()
       this.todoList.splice(index,1);
      },
      
    }
  })

  
  














    


















  










