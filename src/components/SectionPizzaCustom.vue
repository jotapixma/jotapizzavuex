<template>
  <section class="pizzas-custom">
    <div class="d-flex flex-wrap items-container justify-content-center">
      <div class="col-lg-2 col-4 order-3 order-lg-1 left-side">
        <div class="container-barra">
          <div class="progress progress-bar-vertical">
            <div class="progress-bar progress-bar-striped progress-bar-animated" :class="estadoBarra" role="progressbar" :style = "{height: barraDeliciosidad + '%'}" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
      <!-- Panel de Ingredientes -->
      <div class="col-lg-10 col-12 order-1 order-lg-2 right-side">
        
        <div class="row ingredients-panel">
          
          <div class="col-6 col-md-4 col-lg-2 ingredient" v-for="ingredient in ingredients" :key="ingredient.name">
            <div class="img">
              <img class="img-fluid" id="ingredient" :src="ingredient.img"/>
            </div>
            <div class="btn-section">
              {{ingredient.name}}
              <button class="btn btn-primary">Añadir</button>
              <!-- <button class="btn btn-primary" v-on:click="agregarIngrediente(ingredient)"> Añadir </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'SectionPizzaCustom',
  data() {
    return {
      barraDeliciosidad: 30,
    }
  },
  computed: {
    ...mapState(['ingredients']),
    estadoBarra() {
      const deliciosidad = this.barraDeliciosidad;
      return {
        "bg-success": deliciosidad <= 33.33,
        "bg-warning": deliciosidad > 33.33 && deliciosidad <= 66.66,
        "bg-danger": deliciosidad > 66.66
      }
    }
  },
  methods: {
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
  }
}
</script>

<style lang="stylus" scoped>
  section.pizzas-custom 
    padding: 50px 0
    .left-side 
      .container-barra 
        height: 100%
        width: 50px
        border: 2px solid black
        position: relative
        .progress-bar-vertical
          width: 100%
          height: 100% !important
          min-height: 100px;
          display: flex;
          align-items: flex-end;
          /* margin-right: 20px; */
          float: left;
          border-radius: 0 !important;
          .progress-bar
            width: 100%
            height: 0
            -webkit-transition: height 0.6s ease
            -o-transition: height 0.6s ease
            transition: height 0.6s ease
        .barra-deliciosidad 
          position: absolute
          height: 0%
          width: 100%
          background-color: green
          bottom: 0
    .right-side
      display: flex
      align-items: center
      .btn-section
        text-align: center;
        .btn
          display: block;
          margin: 0 auto;
    
      .ingredients-panel 
        .ingredient
          margin-bottom: 25px
          .img
            height: 115px;
            text-align: center;
            img {
              max-height: 90px;
            }
            #ingredient 
              animation: floatitem 4s infinite;
            @keyframes floatitem
              0%
                transform: translateY(10px)
              50%
                transform: translateY(15px)
              100%
                transform: translateY(10px)
</style>