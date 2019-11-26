import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pizzas: [
      {
        id: 1,
        name: "Margarita",
        description: "Un clásico de ayer y hoy",
        img: require('@/assets/pizzas/Margarita.jpg'),
        price: 4000,
        quantity: null,
      },
      {
        id: 2,
        name: "Napolitana",
        description: "El gran clásico italiano",
        img: require("@/assets/pizzas/Napolitana.jpg"),
        price: 4400,
        quantity: null,
      },
      {
        id: 3,
        name: "Veggy",
        description: "Para paladares exigentes",
        img: require("@/assets/pizzas/Veggy.jpg"),
        price: 4800,
        quantity: null,
      },
      {
        id: 4,
        name: "Pepperoni",
        description: "Irresistible de Jotapizzas",
        img: require("@/assets/pizzas/Pepperoni.jpg"),
        price: 5600,
        quantity: null,
      },
      {
        id: 5,        
        name: "Funghi",
        description: "La favorita de la casa!",
        img: require("@/assets/pizzas/Funghi.jpg"),
        price: 5900,
        quantity: null,
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
    ingredients: [
      { id: 1,name: 'Tomate', img:  require('@/assets/pizzas/tomate-custom.png'), price: '1000' },
      { id: 2,name: 'Cebolla', img:  require('@/assets/pizzas/cebolla_juliana.jpg'), price: '1500' },
      { id: 3,name: 'Pimenton', img:  require('@/assets/pizzas/pimenton.jpg'), price: '2000' },
      { id: 4,name: 'Choclo', img:  require('@/assets/pizzas/maiz.jpg'), price: '2500' },
      { id: 5,name: 'Jalapeño', img:  require('@/assets/pizzas/jalapeño-3.jpg'), price: '3000' },
      { id: 6,name: 'Jamon', img:  require('@/assets/pizzas/jamon-cocido.jpg'), price: '3500' },
      { id: 7,name: 'Tocineta', img:  require('@/assets/pizzas/tocineta-2.jpg'), price: '4000' },
      { id: 8,name: 'Jamon Serrano', img:  require('@/assets/pizzas/jamon-serrano.jpeg'), price: '4500' },
      { id: 9,name: 'Pepperoni', img:  require('@/assets/pizzas/pepperoni-2.jpg'), price: '5000' },
      { id: 10,name: 'Champiñon', img:  require('@/assets/pizzas/champiñon-1.jpg'), price: '5500' },
      { id: 11,name: 'Aceituna', img:  require('@/assets/pizzas/aceituna-verde.png'), price: '6000' },
      { id: 12,name: 'Salame', img:  require('@/assets/pizzas/salami.png'), price: '6500' },

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
