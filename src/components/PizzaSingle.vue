<template>
  <div>
    <button @click="goBack">Ir atras</button>
    <button @click="home">Home</button>
    <button @click="goNext">Ir Siguiente</button>
    
    <h4>Hola {{ this.$route.params.id }}</h4>
    <h4>Pizza {{ this.$route.params.payload.pizza.name }}</h4>
    <img :src="this.$route.params.payload.pizza.img" class="card-img-top" />


    <!-- <div class="card-content">
      <div class="card-head">
        <h5 class="card-title"> Pizza {{ $route.params.pizza.name }}</h5>
        <p class="card-text">{{ $route.params.pizza.description }}</p>
      </div>
      <div class="card-body">
        <h4>Pizza nro: {{ $route.params.pizza.id }}</h4>
        <img :src="$route.params.pizza.img" class="card-img-top" />
      </div>
    </div> -->
    
  </div>
</template>

<script>

export default {
  name: "PizzaSingle",
  data() {
    return {
      pizza: {}
    };
  },
  methods: {
    home(){
      this.$router.push('/')
    },
    goBack(){
      this.$router.go(-1)
    },
    goNext(){
      this.$router.go(1)
    },
  }
  // mounted(){
  //   const { id } = this.$route.params.id
  // },
};
</script>

<style lang="scss" scoped>
img{max-width: 500px;}
  .card-content { max-width: 800px; margin: 0 auto;
    .card-head{ text-align: center;
      .card-title{ 
    }
    .card-body{}
    }
  }
</style>

<style lang="scss" scoped>
