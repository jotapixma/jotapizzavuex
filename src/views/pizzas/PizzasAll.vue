<template>
  <section class="pizzas" id="pizzas">
    <div class="container">
      <div id="app-card">
        <h3 class="title">Nuestras Pizzas</h3>
        <div class="card-deck">
          <div class="card" v-for="pizza in $store.state.pizzas" v-bind:key="pizza.id" >
            <img :src="pizza.img" class="card-img-top" @click="goToRoute(pizza)">
            <div class="card-body">
              <h5 class="card-title">{{ pizza.name }}</h5>
              <p class="card-text">{{ pizza.description }}</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

// import {mapState} from 'vuex';
// import PizzaSingle from "@/components/PizzaSingle.vue"

export default {
  name: "PizzasAll",
  components: {
    // PizzaSingle
  },
  methods: {
    // goToSinglePizza(pizzaId){
    //   console.log(pizzaId)
    //   this.$router.push({ name: 'pizzas::id', params: { id: pizzaId }})
    // },
    goToRoute(pizza){
      console.log(pizza)
      this.$router.push({ name: 'pizzas::id', params: { pizza }})
    },
  }
}
</script>

<style lang="scss" scoped>
.card-deck { 
  cursor: pointer;
  justify-content: center;
  .card {
    .card-body {
      position: relative;
      padding: 0.5rem;
      .card-title {
        margin-bottom: 0.25rem;
      }
    }
    flex: 0 0 17%;
    margin: 0 5px;
    margin-bottom: 20px;
  }
}
</style>