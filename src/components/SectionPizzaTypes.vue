<template>
  <section class="pizzas" id="pizzas">
    <div class="container">
      <h2>{{nombreFather}}</h2>
      <div id="app-card">
        <h3 class="bg-black-title">Nuestras Pizzas</h3>
        <div class="card-deck">
          <div class="card" v-for="pizza in pizzas" v-bind:key="pizza.id">
            <img :src="pizza.img" class="card-img-top">
            <div class="card-body">
              <div class="circle-price" >
                <div class="mini-circle" id="mini-circle-rotate">{{pizza.price}}$</div>
              </div>
              <h5 class="card-title">{{ pizza.name }}</h5>
              <p class="card-text">{{ pizza.description }}</p>
              <div class="row">
                <div class="col-4">
                  <button class="btn btn-danger btn-small" @click="deletePizza(pizza)">-</button>
                </div>
                <div class="col-4">
                  <div class="quantity-circle">
                    <template v-if="pizza.quantity > 0">
                      {{ pizza.quantity }}
                    </template>
                    <template v-else>
                      0
                    </template>
                  </div>
                </div>
                <div class="col-4">
                  <button class="btn btn-success btn-small" @click="addPizza(pizza)">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import {mapState} from 'vuex';
import {mapMutations} from 'vuex';

// import Pizzaprice from './Pizzaprice.vue';
export default {
  name: "SectionPizzaTypes",
  computed: {
    ...mapState(['totalAmount','pizzas'])
  },
  methods: {
    ...mapMutations(['aumentar','addPizza','incrementCountByPizzaType','deletePizza']),

    // ...mapActions(['addPizza'])
  },
  props: {},
  components : {
    // Pizzaprice
  },
  data() {
    return {
      nombreFather: '',
      
    };
  }
};
</script>

<style lang="scss" scoped>
section.pizzas {

  .bg-black-title {
    text-align: center;
    padding-bottom: 30px;
    color: white;
  }
  background-color: black;
  padding: 50px 0;
  .card-deck {
    justify-content: center;
    .card {
      .card-body {
        position: relative;
        padding: 1rem 0.5rem;
        .card-title {
          margin-bottom: 0.25rem;
        }
        .card-text{
          height: 48px;
          overflow: hidden;
        }
        .circle-price {
          height: 60px;
          width: 60px;
          border-radius: 60px;
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
            height: 56px;
            width: 56px;
            border-radius: 56px;
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
          #mini-circle-rotate{
            &:hover{
              cursor: pointer;
              animation: circlerotate 2s infinite;
              @keyframes circlerotate {
                from { 
                    transform: rotate(0deg); 
                  } to { 
                    transform: rotate(360deg); 
                  }
              }
            }
          }
          
        }
        .quantity-circle{
          border: 1px solid black;
          border-radius: 2.5rem;
          padding: 5px;
          text-align: center;
          height: 35px;
          width: 35px;
          background-color: antiquewhite;
        }
      }
      flex: 0 0 17%;
      margin: 0 5px;
      margin-bottom: 20px;
    }
  }
}
</style>