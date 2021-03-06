<template>
  <div class="detail-pizza-container">  

    <div class="pizza-detail">

    <h3>Factura Menú "Pizzas personalizadas"</h3>

      <div class="col-lg-10 ml-auto mr-auto mt-4">
        <div class="row">
          <div class="col-lg-4 left-side">
            <h5>Ingredientes</h5>
            <div v-for="(pizza,index) in pizzasOrder" :key="index">
              <ul> Pizza nro {{index+1}}
                <li v-for="ingredient in pizza.ingredients" :key="ingredient">
                  <span>- {{ ingredient.name }} </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-8 right-side">
            <h5>Precio</h5>
            <div v-for="(pizza,index) in pizzasOrder" :key="index" class="d-flex align-items-center justify-content-between">
              <ul> {{ pizza.basePrice }}$ (precio base)
                <li v-for="ingredient in pizza.ingredients" :key="ingredient">
                  <span>{{ ingredient.price }}$ </span>
                  <div @click="deleteIngredient(pizza, ingredient)">
                    <custom-icon name="x-circle" base-class="custom-icon"></custom-icon>
                  </div>
                </li>
              </ul>
              <div @click="deleteOrder(index)">
                <p style="font-weight: bold;"> <custom-icon name="trash-2" base-class="trash-icon"></custom-icon> Eliminar pizza</p>
              </div>
            </div>
          </div>
        </div>

        <h4 class="text-right mt-4" style="font-weight:bold">El monto total de su pedido es de: ${{ totalPizzasOrder }} </h4>
      </div>
  
    </div>

    
  </div>
</template>

<script>
  import customIcon from 'vue-icon/lib/vue-feather.esm'
  export default {
  name: "BillPizzaCustom",
  props: ['pizzasOrder'],
  components: {
    customIcon
  },
  data() {
    return {
      baseClass: 'v-icon'
    }
  },
  methods: {
    deleteIngredient(pizza,ingredient) {
      const indexIngredient = pizza.ingredients.findIndex(ingredient_ => ingredient_.id === ingredient.id)
      if (pizza.ingredients.length > 2) {
        pizza.ingredients.splice(indexIngredient,1)
      } else {
        alert('Tu pizza no puede contener menos de dos(2) ingredientes')
      }
    },
    deleteOrder(index){
      this.pizzasOrder.splice(index,1)
      if (this.pizzasOrder.length <= 0) {
        this.$emit('update-bill-order')
      }
    }
  },
  computed: {
    totalPizzasOrder() {
      let subPizzasOrder = 0
      this.pizzasOrder.forEach(pizza => {
        subPizzasOrder += pizza.basePrice
        pizza.ingredients.forEach(ingredient => {
          subPizzasOrder += parseInt(ingredient.price)
        })
      })
      return subPizzasOrder
    }
  }
}
</script>

<style lang="stylus" scoped>
  
.v-icon,.custom-icon
  width: 15px
  color: red
  margin-left: 10px
  &:hover
    cursor: pointer
p,.trash-icon
  &:hover
      cursor: pointer
.trash-icon
  width: 30px
  

.detail-pizza-container
  padding-top: 30px
  .pizza-detail
    background : #EDEDED
    list-style: none
    border: 2px solid black
    height: 100%
    padding: 2rem
    ul
      padding-left: 0
      list-style: none
      li
        display: flex
        align-items: center
    h6
      text-align: center
</style>