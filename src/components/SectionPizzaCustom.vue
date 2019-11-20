<template>
  <section class="pizzas-custom">
    <div class="container">
      <div class="col-12" v-if="!orderFinish">
        <div class="cantpizzas-panel">
          <h4>Cuantas pizzas desea?</h4>
          <div class="img ">
            <img class="img-fluid big" id="pizza" src="@/assets/pizzas/pizza-vector.png"/>
          </div>
          <div class="btn-panel">
            <b-button pill variant="danger" :disabled="true">-</b-button>
            {{pizzasOrder.length}}
            <b-button pill variant="success" @click="addPizza">+</b-button>
          </div>
          <b-button pill variant="success" @click="goToBuildPizza">Siguiente</b-button>
        </div>
      </div>
      <div class="d-flex flex-wrap items-container justify-content-center" v-if="putIngredientsFinish">
        <div class="col-lg-2 col-4 order-3 order-lg-1 left-side">
          <div class="container-barra">
            <div class="progress progress-bar-vertical">
              <div class="progress-bar progress-bar-striped progress-bar-animated" :class="statusBar" role="progressbar" :style = "{height: capacityBarIngredients + '%'}" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
        <!-- Panel de Ingredientes -->
        <div class="col-lg-10 col-12 order-1 order-lg-2 right-side">
          
          <div class="row ingredients-panel">
            <div class="col-12">
              <h3>Pizza personalizada nro {{ idPizzaSelected+1 }}</h3>
              <b-button pill variant="primary" @click="goToBuildPizza" >Ir a siguiente Pizza</b-button>
            </div>
            <div class="col-6 col-md-4 col-lg-2 ingredient" v-for="ingredient in ingredients" :key="ingredient.id">
              <div class="img">
                <img class="img-fluid" id="ingredient" :src="ingredient.img"/>
              </div>
              <div class="btn-section">
                {{ingredient.name}}
                <button class="btn btn-primary" @click="addIngredient(ingredient)">Añadir</button>
                <!-- <button class="btn btn-primary" v-on:click="agregarIngrediente(ingredient)"> Añadir </button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        
        <b-button v-if="showBillButton" @click="openBill" variant="primary">Ver detalle de pedido</b-button>
      </div>
      <BillPizzaCustom @update-bill-order="statusBillOrder" v-if="showBill" :pizzasOrder="pizzasOrder"/>
    </div>
  </section>


</template>

<script>
import {mapState} from 'vuex'

import BillPizzaCustom from './BillPizzaCustom.vue'

export default {
  name: 'SectionPizzaCustom',
  components: {
    BillPizzaCustom
  },
  data() {
    return {
      capacityBarIngredients: 0,
      idPizzaSelected: -1,
      selectedPizza: {},
      pizzasOrder: [],
      orderFinish: false,
      putIngredientsFinish: false,
      showBill: false,
      showBillButton: false,
      handleCantIngredients: 0
    }
  },
  methods: {
    openBill() {
      this.showBill = true
      this.showBillButton = false
    },
    statusBillOrder() {
      this.showBill = false
      this.orderFinish = false
      this.idPizzaSelected = -1
    },
    goToBuildPizza() {
      this.orderFinish = true
      this.putIngredientsFinish = true
      this.selectedPizza=this.pizzasOrder[++this.idPizzaSelected]
      // console.log('pizzaSelected:', this.idPizzaSelected)
      // console.log('order Length:', this.pizzasOrder.length)
      if (this.pizzasOrder.length > 0) {
        if (this.idPizzaSelected === this.pizzasOrder.length) {
          console.log('hola')
          alert('felicidades, has terminado tu pedido!')
          this.putIngredientsFinish = false
          this.showBillButton = true
          // this.showBill = true
        }
      }
      // this.selectedPizza.ingredients = []
    },
    addPizza(){
      this.pizzasOrder.push({
        ingredients:[], 
        basePrice: 3000
      })
      console.log('orden de pizza:', this.pizzasOrder)
    },
    addIngredient(ingredient){
      const existIngredient = this.selectedPizza.ingredients.find(ingredient_ => ingredient_.id === ingredient.id )
      if (existIngredient === undefined) {
        this.selectedPizza.ingredients.push({
          id: ingredient.id,
          name: ingredient.name,
          price: ingredient.price,
        })
        this.handleCantIngredients = this.selectedPizza.ingredients.length
        this.incrementBar()
      } else {
        alert('Este ingrediente ya se encuentra en tu pizza!')
      }
      console.log('cant Ingredientes:', this.handleCantIngredients)
    },
    incrementBar(){
      let increment = 33.33
      this.capacityBarIngredients += increment
      let message
      
      if (this.handleCantIngredients === 3){
        
        let resp = confirm("Has terminado de armar tu pizza, deseas agregar mas ingredientes?")
        
        if (resp == true) {
          alert(message = "Puedes agregar dos(2) ingredientes más")
          this.capacityBarIngredients = 33.33
        } 
        else {
         alert(message = "Gracias! has completado tu pizza"); 
          this.capacityBarIngredients = 0
          this.handleCantIngredients = 0
          this.goToBuildPizza()
        }
        return message;
      }
      if (this.handleCantIngredients == 5){
        alert("Felicidades! Has terminado de armar tu pizza")
        this.capacityBarIngredients = 0
        this.handleCantIngredients = 0
        this.goToBuildPizza()
      }

    },
  },
  computed: {
    ...mapState(['ingredients']),
    // enabledNextPizza() {
    //   return this.selectedPizza.ingredients.length < 1
    //   // this.idPizzaSelected > this.pizzasOrder.length
    // },
    statusBar() {
      const statusBar = this.capacityBarIngredients;
      return {
        "bg-success": statusBar <= 33.33,
        "bg-warning": statusBar > 33.33 && statusBar <= 66.66,
        "bg-danger": statusBar > 66.66
      }
    }
  }

}
</script>

<style lang="stylus" scoped>
  section.pizzas-custom 
    // background-color: black
    padding: 50px 0
    .cantpizzas-panel
      text-align: center
      .img {
        min-height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            max-height: 110px;
            margin: 0 auto;
        }
      }
      .btn-panel
        justify-content: space-around
        display: flex
        max-width: 150px
        margin: 15px auto
        button
          min-width: 40px;
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