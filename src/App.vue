<template>
  <div id="app" class="container-fluid">
    
    <Nav/>
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> -->
    <!-- </div> -->
    <router-view/>

  </div>
</template>

<script>
import SectionPizzaTypes from './components/SectionPizzaTypes.vue';
import Bill from './components/Bill.vue'
import Nav from './components/Nav.vue'


import {mapState} from 'vuex';
// import Pizzaprice from './components/Pizzaprice.vue';


export default {
  name: 'app',
  components: {
    SectionPizzaTypes,
    Bill,
    Nav
  },
  computed: {
    ...mapState(['orderPizzas'])
  },
}
</script>

<style lang="scss">

</style>
