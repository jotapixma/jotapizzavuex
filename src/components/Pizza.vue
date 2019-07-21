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
                <div class="mini-circle"></div>
              </div>

              <h5 class="card-title">{{ pizza.name }}</h5>
              <p class="card-text">{{ pizza.description }}</p>
              <span>{{ pizza.precio }}</span>
              <div class="button-panel"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2>Precio Total: {{ $store.state.totalAmount }}</h2>
    
    <Pizzaprice :price="totalAmount" @nombreHijo="nombreFather = $event"></Pizzaprice>
  </section>
</template>

<script>

import {mapState} from 'vuex';
import {mapMutations} from 'vuex';

import Pizzaprice from './Pizzaprice.vue';
export default {
  name: "Pizza",
  computed: {
    ...mapState(['totalAmount'])
  },
  methods: {
    ...mapMutations(['aumentar'])
  },
  props: {},
  components : {
    Pizzaprice
  },
  data() {
    return {
      nombreFather: '',
      pizzas: [
        {
          name: "Margarita",
          description: "divina",
          img: require('@/assets/pizzas/Margarita.jpg'), 
          precio: 4000,
          detalle: [
            { tamaño: "mediana", precio: 4000 },
            { tamaño: "grande", precio: 5100 }
          ]
        },
        {
          name: "Jamón y Queso",
          description: "extasiante",
          img: require('@/assets/pizzas/Pepperoni.jpg')
        },
        {
          name: "Napolitana",
          description: "adiktiva",
          img: require("@/assets/pizzas/Napolitana.jpg"),
          detalle: [
            { tamaño: "mediana", precio: 4400 },
            { tamaño: "grande", precio: 5600 }
          ]
        },
        {
          name: "Veggy",
          description: "Saludable",
          img: require("@/assets/pizzas/Veggy.jpg"),
          detalle: [
            { tamaño: "mediana", precio: 4800 },
            { tamaño: "grande", precio: 5900 }
          ]
        },
        {
          name: "Pepperoni",
          description: "viciadora",
          img: require("@/assets/pizzas/Pepperoni.jpg"),
          detalle: [
            { tamaño: "mediana", precio: 5600 },
            { tamaño: "grande", precio: 6900 }
          ]
        },
        {
          name: "Funghi",
          description: "jugosa con extra queso",
          img: require("@/assets/pizzas/Funghi.jpg"),
          detalle: [
            { tamaño: "mediana", precio: 5900 },
            { tamaño: "grande", precio: 7700 }
          ]
        },
        {
          name: "Calzone",
          description: "",
          img: "assets/images/pizza-margarita.jpg",
          detalle: [{ tamaño: "mediana", precio: 4000 }]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
section.pizzas {
  /*display:none; */
  background-color: black;
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