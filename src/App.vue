<template>
  <div id="app" class="container-fluid">
    <SectionPizzaTypes/>
    <div v-if="orderPizzas.length > 0">
      <Bill/>
    </div>
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
