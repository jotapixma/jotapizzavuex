<template>
  <div class="container-fluid">
    <slick ref="slick" :options="slickOptions">
      <a href="http://placehold.it/900x1000"><img src="http://placehold.it/900x1000" alt=""></a>
      <a href="http://placehold.it/800x1000"><img src="http://placehold.it/800x1000" alt=""></a>
      <a href="http://placehold.it/800x1000"><img src="http://placehold.it/800x1000" alt=""></a>
    </slick>
  </div>
</template>

<script>
  import Slick from 'vue-slick'
  // import 'node_modules/slick-carousel/slick/slick.css'

  export default {
    name: "HomeSlider",
    components: { 
      Slick 
    },
    data() {
      return {
        slickOptions: {
          slidesToShow: 3,
          // infinite: true,
          // accessibility: true,
          // adaptiveHeight: false,
          arrows: true,
          // dots: true,
          // draggable: true,
          // edgeFriction: 0.30,
          // swipe: true
          // Any other options that can be got from plugin documentation
        },
      }
    },
    methods: {
      next() {
          this.$refs.slick.next();
      },

      prev() {
          this.$refs.slick.prev();
      },

      reInit() {
        // Helpful if you have to deal with v-for to update dynamic lists
        this.$nextTick(() => {
            this.$refs.slick.reSlick();
        });
      },
    },
  }
</script>