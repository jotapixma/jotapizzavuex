<template>
  <div class="container-fluid">
    <h5 class="card-title"> Pizza {{ $route.params.pizza.name }}</h5>
    <h4>Pizza nro: {{ $route.params.pizza.id }}</h4>
    <img :src="$route.params.pizza.img" class="card-img-top" />

  </div>
    <!-- <div class="card">
      <div class="card-body">
        <p class="card-text">{{ $route.params.pizza.description }}</p>
      </div>
    </div> -->
</template>

<script>

export default {
  name: "PizzaSingle",
  data() {
    return {
      pizza: {}
    };
  },
  goBack(){

  },
  goNext(){

  },
  // beforeMount(){
  //   const { id,name,description,img } = this.$route.params
  // },
};
</script>

<style lang="scss">
.card-deck { 
  cursor: default;
  justify-content: center;
}
</style>