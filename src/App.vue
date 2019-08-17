<template>
  <div id="app" class="container-fluid">
    <!-- <Bill/> -->
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/pizzas">Pizzas</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import Home from './components/Home.vue';
// import Bill from './components/Bill.vue';

// import Pizzaprice from './components/Pizzaprice.vue';


export default {
  name: 'app',
  components: {
    // Home
    // Bill,
  }
}
</script>

<style lang="scss">

</style>
