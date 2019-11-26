<template>  
  <section class="animation-jotapizzas">
    <div class="img">
      <img class="img-fluid" id="banner-logo" src="@/assets/pizzas/logo-slider.png"/>      
    </div>
  </section>
</template>

<style lang="stylus" scoped>
  .animation-jotapizzas 
    .img 
      display: flex
      justify-content: center
      #banner-logo
        animation: floatXitem 8s infinite;
        @keyframes floatXitem
          0%
            transform: translateX(40px)
          50%
            transform: translateX(15px)
          100%
            transform: translateX(40px)



</style>