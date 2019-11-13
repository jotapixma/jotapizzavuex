<template>
  <div class="detail-pizza-container">  

    <div class="pizza-detail">
      <div class="row">
        <div class="col-lg-6 left-side">
          <h5>Ingredientes</h5>
            <div v-for="(pizza,index) in pizzasOrder">
              <ul> Pizza nro {{index+1}}
                <li v-for="ingredient in pizza.ingredients">
                  <span>- {{ ingredient.name }} </span>
                </li>
              </ul>
            </div>
        </div>
        <div class="col-lg-6 right-side">
          <h5>Precio</h5>
            <div v-for="(pizza,index) in pizzasOrder">
              <span>---------------</span>
              <li v-for="ingredient in pizza.ingredients">
                <span>{{ ingredient.price }} </span>
              </li>
            </div>
        </div>
      </div>
    </div>

    <h6>El subtotal de su pedido es de:  </h6>
    <h6>El total de su pedido es de XYZ</h6>
  </div>
</template>

<script>
  export default {
  name: "BillPizzaCustom",
  props: ['pizzasOrder'],
  data() {
    return {
      // amountTypePizza: null
    }
  },
  mounted() {
    console.log('orden de pizzas from BillCustom:', this.pizzasOrder)
  },
  computed: {
   
  }
}
</script>

<style lang="stylus" scoped>     
.detail-pizza-container
  padding-top: 30px
  .pizza-detail
    list-style: none
    border: 1px solid black
    height: 100%
    padding: 20px
    li
      list-style: none
      margin-left: 10px
      ul
        padding-left: 0
    h6
      text-align: center
</style>