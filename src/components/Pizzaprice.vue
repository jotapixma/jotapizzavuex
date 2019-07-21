<template>
<div>
  <h3>Precio: {{$store.state.totalAmount}}</h3>
  <span>Nombre: {{nombre}}</span>
  <button class="btn btn-primary" @click="$store.commit('aumentar')">+</button>
  <!-- <button class="btn btn-success" @click="price++">+</button> -->
</div>
</template>

<script>

import {mapState} from 'vuex';
import {mapMutations} from 'vuex';


export default {
  name: "Pizzaprice",
  computed: {
    ...mapState(['totalAmount'])
  },
  methods: {
    ...mapMutations(['aumentar'])
  },
  props: ['price'],
  data(){
    return{
      nombre: 'JotaXpress'
    }
  },
  mounted() {
    this.$emit('nombreHijo',this.nombre)
  }
}
</script>

