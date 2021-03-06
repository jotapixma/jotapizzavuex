
<template>
  <section class="bill-container">
    <div class="container">
      <h3 class="mb-3 mt-2">Factura Menú "Nuestras Pizzas"</h3>

      <table>
        <tr>
          <th>Pedido</th>
          <th>Precio</th>
          <th>Editar pedido</th>
        </tr>

        <tr v-for = "(pizza) in orderPizzas" :key="pizza.id">
          <td>{{ pizza.name }} ({{ pizza.quantity }})</td>
          <td>{{ (pizza.price * pizza.quantity) }}</td>
          <td>
            <i class="fas fa-trash"></i>
              <button class="btn btn-danger" @click="deletePizza(pizza)">Eliminar (1) Pizza</button>
          </td>
        </tr>
      
      </table>

        
      <h4 class="text-right mt-3">
        El monto total de su pedido es:
        <b>${{totalAmount}}</b>
      </h4>
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

<style lang="scss" scoped>

  section{
    &.bill-container{
      border: 2px solid black;
      margin: 1rem 0;
      background-color: #ededed;
      padding: 1rem;

      table{
        width: 100%;
        background-color: #ffffff;
        tr{
          th,td{
            padding: 6px;
          }
        }
      }
      table, th, td{
        border: 1px solid #000000;
      }
    }
  }


</style>

