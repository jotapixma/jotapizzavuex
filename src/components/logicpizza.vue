    addIngredient(ingredient){
      console.log('ingredient:', ingredient)
     
      this.pizzaCustom.push(ingredient)
      
      // var cantIngred = this.cantidad++;
      
      // this.incrementBarra ();

    },
    incrementBarra: function (){
      var increment = 33.33;
      this.barraDeliciosidad += increment;  
      var message;
      
      if (this.cantidad === 3){
        
        var resp = confirm("Has terminado de armar tu pizza, deseas agregar mas ingredientes?");
        
        if (resp == true) {
          alert(message = "Puedes agregar dos(2) ingredientes más");
          this.barraDeliciosidad = 33.33;
        } 
        else {
         alert(message = "Gracias! has completado tu pizza"); 
         this.barraDeliciosidad = 0;
        //  this.selectedPizza.ingredientes = [];
          this.cantidad = 0;
        }
        return message;
        
      }
      if (this.cantidad == 5){
        alert("Felicidades! Has terminado de armar tu pizza");
        this.barraDeliciosidad = 0;
        // this.selectedPizza.ingredientes = [];
        this.cantidad = 0;
      }

    }