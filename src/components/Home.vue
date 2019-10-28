<template>
<div>
  <SectionPizzaTypes/>
  <div v-if="orderPizzas.length > 0">
    <Bill/>
  </div>
  <SectionIngredients/>
  <SectionTeam/>
  <BannerJotaPizzas/>
  <Footer/>
</div>
</template>

<script>

import {mapState} from 'vuex'
import {mapMutations} from 'vuex'

import Bill from './Bill.vue'
import SectionPizzaTypes from './SectionPizzaTypes.vue'
import SectionIngredients from './SectionIngredients.vue'
import SectionTeam from './SectionTeam.vue'
import Pizzaprice from './Pizzaprice.vue'
import BannerJotaPizzas from './BannerJotaPizzas.vue'
import Footer from './Footer.vue'

export default {
  name: "Home",
  computed: {
    ...mapState(['totalAmount','pizzas','orderPizzas'])
  },
  methods: {
    ...mapMutations(['aumentar','addPizza','incrementCountByPizzaType','deletePizza']),
    // ...mapActions(['addPizza'])
  },
  props: {},
  components : {
    Pizzaprice,
    SectionPizzaTypes,
    SectionIngredients,
    SectionTeam,
    Bill,
    BannerJotaPizzas,
    Footer
  },
  data() {
    return {
      
    };
  }
};
</script>

<style lang="scss" scoped>
section.pizzas {
  /*display:none; */
  // background-color: black;
  padding: 50px 0;
  .card-deck {
    justify-content: center;
    .card {
      .card-body {
        position: relative;
        padding: 0.5rem;
        .card-title {
          margin-bottom: 0.25rem;
        }
        .circle-price {
          height: 55px;
          width: 55px;
          border-radius: 55px;
          background-color: red;
          position: absolute;
          right: 1px;
          top: -28px;
          color: white;
          z-index: 2;
          span {
            width: 100%;
            text-align: center;
            display: flex;
            justify-content: center;
            height: 100%;
            align-items: center;
            font-weight: 600;
          }
          .mini-circle {
            height: 51px;
            width: 51px;
            border-radius: 51px;
            background-color: red;
            position: absolute;
            left: 2px;
            top: 2px;
            border: 2px solid yellow;
            z-index: -1;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
      flex: 0 0 17%;
      margin: 0 5px;
      margin-bottom: 20px;
    }
  }
}
</style>