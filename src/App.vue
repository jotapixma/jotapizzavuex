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

import Nav from './components/Nav.vue'
import {mapState} from 'vuex';

export default {
  name: 'app',
  components: {
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
