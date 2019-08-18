<template>
  <div>
    <!-- Dirigiendo a ruta con metodo -->
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
    
    <!-- Usando routerlink -->
    <!-- <h3 class="title">Nuestras Pizzas</h3> -->
    <!-- <div class="row">
      <router-link
        :to=" {name: 'pizzas::id', params: { id : pizza.id, pizza: pizza } }"
        v-for="pizza in $store.state.pizzas" v-bind:key="pizza.id" class="col-4 router-card">
        <div id="app-card">
          <div class="card-deck">
            <div class="card">
              <img :src="pizza.img" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{{ pizza.name }}</h5>
                <p class="card-text">{{ pizza.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div> -->
      <!-- <button>pizza {{pizza.id}}</button> -->
    <!-- <PizzaSingle/> -->
  </div>
</template>

<script>
// import PizzaSingle from '@/components/PizzaSingle.vue';

export default {
  name: "PizzasAll",
  components: {
    // PizzaSingle
  },
  methods: {
    // solo envio id
    // goToSinglePizza(pizzaId){
    //   console.log(pizzaId)
    //   this.$router.push({ name: 'pizzas::id', params: { id: pizzaId }})
    // },
    goToRoute(pizza) {
      console.log(pizza);
      this.$router.push({ name: "pizzas::id", params: { id: pizza.id, pizza: pizza } });
    }
  }
};
</script>

<style lang="scss" scoped>
  .card-deck { margin: 0 20px;
    justify-content: center;
    .card {
      flex: 0 0 25%;
      margin-bottom: 20px;
      &:hover{ 
        cursor: pointer;
        transform: scale(1.1);
        transition-duration: 1s;
      }
      .card-body {
        position: relative; 
        padding: 0.5rem;
        .card-title { margin-bottom: 0.25rem; color: black; }
        .card-text{ color: black; }
      }
    }
  }
.router-card { 
  &:hover{ text-decoration: none; cursor: default; }
  .card-deck { margin: 0 20px;
    justify-content: center;
    .card {
      &:hover{ 
        cursor: pointer;
        transform: scale(1.1);
        transition-duration: 1s;
      }
      .card-body {
        position: relative; 
        padding: 0.5rem;
        .card-title { margin-bottom: 0.25rem; color: black; }
        .card-text{ color: black; }
      }
      flex: 0 0 17%;
      margin: 10px 5px;
      // margin-bottom: 20px;
    }
  }
}
</style>