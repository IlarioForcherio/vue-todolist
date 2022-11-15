var app = new Vue({
    el: '#app',
    data: {

      inputFaccende: '',

      todoList:[
        {testo:'comprare cose', done: false},
        {testo:'pulire cose', done: false},
      ],

      indice: 0,
     
      faccendeFatte:[],

    },

    beforeUpdate(){
      this.todoList.forEach( (element , index) =>{
        if ( element.done == true){
          this.faccendeFatte.push(element);
          this.todoList.splice(index,1);
          
        }

      });
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

      faccendaCompletata: function(index){
        console.log( this.todoList[index] );

        if (this.todoList[index].done == false){
          this.todoList[index].done = true;
        }else{
          this.todoList[index].done = false;
        }


      },

       aggiungiFaccenda: function(){
        this.todoList.push(
          {
            testo: this.inputFaccende,
            done: false
          }
        );
       },

    }
  })

  
  














    


















  










