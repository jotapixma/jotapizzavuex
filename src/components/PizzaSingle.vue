<template>
  <div>
    <div @click="goBack" class="go-back-icon">
      <custom-icon name="arrow-left" base-class="trash-icon"></custom-icon>
    </div>
    <!-- <button @click="goNext">Ir Siguiente</button> -->
    <!-- <button @click="home">Home</button> -->

    <!-- <div class="card-content">
      <div class="card-head">
        <h5 class="card-title"> Pizza {{ this.$route.params.pizza.name  }}</h5>
        <p class="card-text">{{ this.$route.params.pizza.description }}</p>
      </div>
      <div class="card-body">
        <h4>Pizza nro: {{ $route.params.pizza.id }}</h4>
        <img :src="this.$route.params.pizza.img" class="card-img-top" />
      </div>
    </div> -->

    <!-- recibiendo del goToSingle -->
    <div class="card-content" v-if="pizza !== null">
      <div class="card-head">
        <h3 class="card-title"> Pizza {{ pizza.name }}</h3>
        <p class="card-text">{{ pizza.description }}</p>
      </div>
      <div class="card-body">
        <!-- <h4>Pizza nro: {{ pizza.id }}</h4> -->
        <img :src="pizza.img" class="card-img-top" />
      </div>
    </div>
    
  </div>
</template>

<script>

  import customIcon from 'vue-icon/lib/vue-feather.esm'
  import { mapState} from 'vuex'

  export default {
    
    name: "PizzaSingle",
    components: {
      customIcon
    },
    data() {
      return {
        pizza: null,
        baseClass: 'v-icon'
      }
    },
    beforeMount(){
      const { id  } = this.$route.params
      this.pizza = this.pizzas.find(p => p.id === id )
      // console.log(this.pizza)
    },
    computed: mapState({
      pizzas: state => state.pizzas
    }),
    methods: {
      home(){
        this.$router.push('/')
      },
      goBack(){
        this.$router.go(-1)
      },
      goNext(){
        this.$router.go(1)
        // console.log(this.$router)
      },
    },
    
  }
</script>

<style lang="stylus" scoped>
.go-back-icon
  margin: 15px 0 0 15px
  svg
    &:hover
      transform: scale(1.1) 
.trash-icon
  width: 50px
  &:hover
    cursor: pointer
.card-content 
  max-width: 800px 
  margin: 0 auto
  .card-head
    text-align: center
  .card-body
    text-align: center
    img
      max-width: 600px
</style>

