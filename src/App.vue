<template>
  <div id="app" class="container-fluid">
    
    <Nav/>
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> -->
    <!-- </div> -->
    <!-- <router-view/> -->
    <transition name="moveInUp">
      <router-view/>
    </transition>

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

.moveInUp-enter-active{
  opacity: 0;
  transition: opacity 1s ease-in;
}

.moveInUp-enter-active{
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}

.moveInUp-leave-active{
  animation: moveInUp .3s ease-in;
}
@keyframes moveInUp{
 0%{
  transform: translateY(0);
 }
  100%{
  transform: translateY(-400px);
 }
}

</style>
