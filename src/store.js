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
        price: 4000,
        quantity: null,
      },
      {
        id: 2,
        name: "Napolitana",
        description: "adiktiva",
        img: require("@/assets/pizzas/Napolitana.jpg"),
        price: 4400,
        quantity: null,
      },
      {
        id: 3,
        name: "Veggy",
        description: "Saludable",
        img: require("@/assets/pizzas/Veggy.jpg"),
        price: 4800,
        quantity: null,
      },
      {
        id: 4,
        name: "Pepperoni",
        description: "viciadora",
        img: require("@/assets/pizzas/Pepperoni.jpg"),
        price: 5600,
        quantity: null,
      },
      {
        id: 5,        
        name: "Funghi",
        description: "jugosa con extra queso",
        img: require("@/assets/pizzas/Funghi.jpg"),
        price: 5900,
        quantity: 0,
      }
    ],
    players: [
      {
        name: "Jorge Teran Padre",
        img: require("@/assets/pizzas/papa-tony-2.png"),
        description: 'Encargado de horno'
      },
      {
        name: "Cecilia Cova",
        img: require("@/assets/pizzas/cecilia.png"),
        description: 'Jefe de Logistica'
      },
      {
        name: "Jorge Teran",
        img: require("@/assets/pizzas/jota.png"),
        description: 'Cheff Ejecutivo'
      },
      {
        name: "Sulynn Teran",
        img: require("@/assets/pizzas/sulynn.png"),
        description: 'Community Manager'
      }
    ],
    orderPizzas: [],
    totalAmount: null,
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
    addPizza(state,pizza){
      console.log('pizza', pizza)
      pizza.quantity++
      const existPizza = state.orderPizzas.find( orderPizza => orderPizza.name === pizza.name)

      if (existPizza === undefined) {
        state.orderPizzas.push(pizza)
      }   
      state.totalAmount += pizza.price
      console.log('stateOrder:', state.orderPizzas)
    },
    deletePizza(state,pizza){
      console.log('stateOrder:', state.orderPizzas)
      state.orderPizzas.forEach(orderPizza => {
        if (orderPizza.name === pizza.name) {
          orderPizza.quantity -= 1
          state.totalAmount -= pizza.price
          console.log('orderPizza:', orderPizza)
          if (orderPizza.quantity <= 0) { 
            const pizzaIndex = state.orderPizzas.findIndex(orderPizza => orderPizza.id === pizza.id)
            state.orderPizzas.splice(pizzaIndex,1)
          }
        }
      })
    }
  },
  actions: {
    
  }
})
