<template>
  <section class="pizzas" id="pizzas">
    <div class="container">
      <h1>Hola</h1>
      <h2>{{nombreFather}}</h2>
      <div id="app-card">
        <h3 class="title">Nuestras Pizzas</h3>
        <div class="card-deck">
          <div class="card" v-for="pizza in pizzas" v-bind:key="pizza.id">
            <img :src="pizza.img" class="card-img-top">
            <div class="card-body">
              <div class="circle-price">
                <div class="mini-circle">{{pizza.precio}}</div>
              </div>
              <h5 class="card-title">{{ pizza.name }}</h5>
              <p class="card-text">{{ pizza.description }}</p>
              <div class="row">
                <div class="col-4">
                  <button class="btn btn-danger btn-small" @click="deletePizza(pizza)">-</button>
                </div>
                <div class="col-4">
                  <input type="text" class="input-group">
                </div>
                <div class="col-4">
                  <button class="btn btn-success btn-small" @click="addPizza(pizza)">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bill/>
      <h2>Precio Total: {{ totalAmount }}</h2>
      <Pizzaprice :price="totalAmount" @nombreHijo="nombreFather = $event"></Pizzaprice>
    </div>
  </section>
</template>

<script>

import {mapState} from 'vuex';
import {mapMutations} from 'vuex';

import Pizzaprice from './Pizzaprice.vue';
import Bill from './Bill.vue';

export default {
  name: "Home",
  computed: {
    ...mapState(['totalAmount','pizzas'])
  },
  methods: {
    ...mapMutations(['aumentar','addPizza','incrementCountByPizzaType','deletePizza']),
    // ...mapActions(['addPizza'])
  },
  props: {},
  components : {
    Pizzaprice,
    Bill
  },
  data() {
    return {
      nombreFather: '',
      
    };
  }
};
</script>

<style lang="scss">
section.pizzas {
  /*display:none; */
  // background-color: black;
  padding: 50px 0;
  .card-deck {
    justify-content: center;
    .card {
      .card-body {
        position: relative;
        padding: 0.5rem;
        .card-title {
          margin-bottom: 0.25rem;
        }
        .circle-price {
          height: 55px;
          width: 55px;
          border-radius: 55px;
          background-color: red;
          position: absolute;
          right: 1px;
          top: -28px;
          color: white;
          z-index: 2;
          span {
            width: 100%;
            text-align: center;
            display: flex;
            justify-content: center;
            height: 100%;
            align-items: center;
            font-weight: 600;
          }
          .mini-circle {
            height: 51px;
            width: 51px;
            border-radius: 51px;
            background-color: red;
            position: absolute;
            left: 2px;
            top: 2px;
            border: 2px solid yellow;
            z-index: -1;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
      flex: 0 0 17%;
      margin: 0 5px;
      margin-bottom: 20px;
    }
  }
}
</style>