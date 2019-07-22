<template>
  <div id="app" class="container-fluid">
    <Pizza></Pizza>
    <Bill/>
  </div>
</template>

<script>
import Pizza from './components/Pizza.vue';
import Bill from './components/Bill.vue'
// import Pizzaprice from './components/Pizzaprice.vue';


export default {
  name: 'app',
  components: {
    Pizza,
    Bill
  }
}
</script>

<style lang="scss">

</style>
