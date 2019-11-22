<template>
  <div>
    <slider height="400px">
      <slider-item>
        <div class="img">
          <img class="img-fluid" src='@/assets/pizzas/Pepperoni.jpg'>
        </div>
      </slider-item>
    
      <slider-item>
        <div class="img">
          <img class="img-fluid" src='@/assets/pizzas/Funghi.jpg'>
        </div>
      </slider-item>

      <slider-item>
        <div class="img">
          <img class="img-fluid" src='@/assets/pizzas/Napolitana.jpg'>
        </div>
      </slider-item>

      <slider-item>
        <div class="img">
          <img class="img-fluid" src='@/assets/pizzas/Margarita.jpg'>
        </div>
      </slider-item>

      <slider-item>
        <div class="img">
          <img class="img-fluid" src='@/assets/pizzas/Veggy.jpg'>
        </div>
      </slider-item>

      <!-- <button  @click="moveToIndex"></button> -->
      <div slot="loading">custom loading ...</div>
    </slider>
  </div>
</template>

<script>
  import { Slider, SliderItem } from 'vue-easy-slider'

  export default {
    name: "HomeSlider",
    components: { 
      Slider,
      SliderItem,
    },
    data() {
      return {
        sliderIndex: 1,
        // list: [
        //   { backgroundImage: '@/assets/pizzas/Margarita.jpg' },
        //   { backgroundImage: '@/assets/pizzas/Margarita.jpg', width: '100%', height: '100%' },
        //   { backgroundImage: '@/assets/pizzas/Margarita.jpg', width: '100%', height: '100%' },
        // ],
      }
    },
    methods: {  
      moveToIndex(index) {
        console.log('culo',index)
        this.sliderIndex = index
      },
    },
  }
</script>

</script>

<style lang="stylus" scoped>
  slider-item
    .img
      img
</style>