<template>
<div>
  <h3>Componente hijo: {{price}}</h3>
  <span>Nombre: {{nombre}}</span>
</div>
</template>

<script>
export default {
  name: "Pizzaprice",
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

