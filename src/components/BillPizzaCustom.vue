<template>
  <div class="detail-pizza-container">  

    <div class="pizza-detail">
      <div class="col-lg-10">
        <div class="row">
          <div class="col-lg-4 left-side">
            <h5>Ingredientes</h5>
            <div v-for="(pizza,index) in pizzasOrder">
              <ul> Pizza nro {{index+1}}
                <li v-for="ingredient in pizza.ingredients">
                  <span>- {{ ingredient.name }} </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-8 right-side">
            <h5>Precio</h5>
            <div v-for="(pizza,index) in pizzasOrder" class="d-flex align-items-center justify-content-between">
              <ul> {{ pizza.basePrice }}$ (precio base)
                <li v-for="ingredient in pizza.ingredients">
                  <span>{{ ingredient.price }}$ </span>
                  <div @click="deleteIngredient(pizza, ingredient)">
                    <custom-icon name="x-circle" base-class="custom-icon"></custom-icon>
                  </div>
                </li>
              </ul>
              <div @click="deleteOrder(index)">
                <custom-icon name="trash-2" base-class="trash-icon"></custom-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </div>

    <h6>El monto total de su pedido es de: {{ totalPizzasOrder }} </h6>
    <!-- <h6>El total de su pedido es de XYZ</h6> -->
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
      // console.log('indexIng',indexIngredient)
      if (pizza.ingredients.length > 2) {
        pizza.ingredients.splice(indexIngredient,1)
      } else {
        alert('Tu pizza no puede contener menos de dos(2) ingredientes')
      }
      console.log(pizza.ingredients.length)
    },
    deleteOrder(index){
      this.pizzasOrder.splice(index,1)
      if (this.pizzasOrder.length <= 0) {
        console.log('holix')
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
.trash-icon
  width: 50px
  &:hover
    cursor: pointer

.detail-pizza-container
  padding-top: 30px
  .pizza-detail
    list-style: none
    border: 1px solid black
    height: 100%
    padding: 20px
    ul
      padding-left: 0
      list-style: none
      li
        display: flex
        align-items: center
    h6
      text-align: center
</style>