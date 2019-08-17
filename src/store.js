import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pizzas: [
      {
        id: 1,
        name: "Margarita",
        description: "divina",
        img: require('@/assets/pizzas/Margarita.jpg'),
        precio: 4000,
      },
      {
        id: 2,
        name: "Napolitana",
        description: "adiktiva",
        img: require("@/assets/pizzas/Napolitana.jpg"),
        precio: 4400
      },
      {
        id: 3,
        name: "Veggy",
        description: "Saludable",
        img: require("@/assets/pizzas/Veggy.jpg"),
        precio: 4800
      },
      {
        id: 4,
        name: "Pepperoni",
        description: "viciadora",
        img: require("@/assets/pizzas/Pepperoni.jpg"),
        precio: 5600
      },
      {
        id: 5,
        name: "Funghi",
        description: "jugosa con extra queso",
        img: require("@/assets/pizzas/Funghi.jpg"),
        precio: 5900
      }
    ],
    orderPizzas: [],
    totalAmount: 0
  },
  // getters: {
  //   publicOrder(state){
  //     return state.orderPizzas
  //   }
  // },
  mutations: {
    // aumentar(state){
    //   state.totalAmount++
    // },
    incrementCountByPizzaType() {
      console.log("hola")
      // if (pizza.name === state.orderPizzas.pizza.name){
      //   console.log("Pizzas coinciden")
      // }
    },
    addPizza(state,pizza){
      state.orderPizzas.push(pizza)
      state.totalAmount += pizza.precio
      // this.incrementCountByPizzaType()
    },
    deletePizza(state,payload){
      console.log(payload)
      state.orderPizzas.splice(payload.index,1)

      state.totalAmount -= payload.pizza.precio
    }
  },
  actions: {
    
  }
})
