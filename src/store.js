import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pizzas: [
      {
        name: "Margarita",
        description: "divina",
        img: require('@/assets/pizzas/Margarita.jpg'),
        precio: 4000,
      },
      {
        name: "Napolitana",
        description: "adiktiva",
        img: require("@/assets/pizzas/Napolitana.jpg"),
        precio: 4400
      },
      {
        name: "Veggy",
        description: "Saludable",
        img: require("@/assets/pizzas/Veggy.jpg"),
        precio: 4800
      },
      {
        name: "Pepperoni",
        description: "viciadora",
        img: require("@/assets/pizzas/Pepperoni.jpg"),
        precio: 5600
      },
      {
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
    deletePizza(state,index){
      console.log(index)
      state.orderPizzas.splice(index,1)

      // state.totalAmount -= pizza.precio
    }
  },
  actions: {
 
  }
})
