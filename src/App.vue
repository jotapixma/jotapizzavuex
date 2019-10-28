<template>
  <div id="app" class="container-fluid">
    
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/pizzas">Pizzas</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import SectionPizzaTypes from './components/SectionPizzaTypes.vue';
import Bill from './components/Bill.vue'

import {mapState} from 'vuex';
// import Pizzaprice from './components/Pizzaprice.vue';


export default {
  name: 'app',
  components: {
    SectionPizzaTypes,
    Bill
  },
  computed: {
    ...mapState(['orderPizzas'])
  },
}
</script>

<style lang="scss">

</style>
