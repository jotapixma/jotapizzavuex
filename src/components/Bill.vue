
<template>
  <section>
    <div class="container">
      <h1>Factura</h1>
      <div class="row">
        <div class="col-6">
          <h3>Pedido</h3>
        </div>
        <div class="col-6">
          <h3>Precio</h3>
        </div>
      </div>
      <ul>
        <li v-for = "(pizza) in orderPizzas" :key="pizza.id">
          <div class="row">
            <div class="col-5">
            <h6>{{ pizza.name }} ({{ pizza.quantity }})</h6>
            </div>
            <div class="col-5">
              <h6> {{ (pizza.price * pizza.quantity) }}</h6>
            </div>
            <div class="col-2">
              <i class="fas fa-trash"></i>
              <button class="btn btn-danger" @click="deletePizza(pizza)">Quitar</button>
            </div>
          </div>
        </li>
      </ul>
        
      <div class="row">
        <h2>
          El monto total de su pedido es:
          <b>{{totalAmount}}</b>
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "Bill",
  data() {
    return {
      // amountTypePizza: null
    }
  },
  computed: {
    ...mapState(["totalAmount","orderPizzas"]),
    ...mapGetters(["publicOrder"])
  },
  methods: {
    ...mapMutations(["deletePizza"])
  },
}
</script>

