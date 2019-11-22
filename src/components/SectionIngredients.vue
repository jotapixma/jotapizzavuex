<template>
  <section class="ingredientes bg-black" id="ingredientes">
    <div class="container">

      <h3 class="title">Ingredientes</h3>

      <div class="row">
        
        <div class="fadeInLeft ingredient-item holder" v-wow data-wow-delay="1s" data-wow-duration="4s">
          <div class="img">
            <img class="img-fluid" src="@/assets/pizzas/tomates-3.jpg"/>
          </div>
        </div>
        <div class="fadeInDown ingredient-item holder" v-wow data-wow-delay="1s" data-wow-duration="4s">
          <div class="img">
            <img class="img-fluid" src="@/assets/pizzas/albahaca.jpg"/>
          </div>
        </div>
        <div class="fadeInRight ingredient-item holder" v-wow data-wow-delay="1s" data-wow-duration="4s">
          <div class="img">
            <img class="img-fluid" src="@/assets/pizzas/pepperoni-ingredient.jpg"/>
          </div>
        </div>
        <div class="fadeInLeft ingredient-item holder" v-wow data-wow-delay="1s" data-wow-duration="3s">
          <div class="img">
            <img class="img-fluid" src="@/assets/pizzas/oregano.jpg"/>
          </div>
        </div>
        <div class="fadeIn ingredient-item holder" v-wow data-wow-delay="1s" data-wow-duration="7s">
          <div class="img">
            <img class="img-fluid" src="@/assets/pizzas/masa-pizza.jpg"/>
          </div>
        </div>
        <div class="fadeInRight ingredient-item holder" v-wow data-wow-delay="1s" data-wow-duration="3s">
          <div class="img">
            <img class="img-fluid" src="@/assets/pizzas/queso-mozzarella.jpg"/>
          </div>
        </div>
        <div class="fadeInLeft ingredient-item holder" v-wow data-wow-delay="1s" data-wow-duration="4s">
          <div class="img">
            <img class="img-fluid" src="@/assets/pizzas/jalapeño.jpg"/>
          </div>
        </div>
        <div class="fadeInUp ingredient-item holder" v-wow data-wow-delay="1s" data-wow-duration="4s">
          <div class="img">
            <img class="img-fluid" src="@/assets/pizzas/champiñones-2.jpg"/>
          </div>
        </div>
        <div class="fadeInRight ingredient-item holder" v-wow data-wow-delay="1s" data-wow-duration="4s">
          <div class="img">
            <img class="img-fluid" src="@/assets/pizzas/tocineta.png"/>
          </div>
        </div> 
      </div>
    </div>
  </section>
</template>

<script>
// import {UAnimateContainer, UAnimate} from 'vue-wow'

export default {
  name: 'SectionIngredients',
  // components: {
  //   UAnimateContainer,
  //   UAnimate
  // },
}
</script>

<style lang="stylus">
.ingredientes
  padding: 50px 0
  background-color: black
  .ingredient-item
    width: 33%
    overflow-x: hidden
    .img
      max-height:180px 
      overflow-y:hidden
      min-width: 320px
      padding: 0 5px
      margin-bottom: 10px 
</style>