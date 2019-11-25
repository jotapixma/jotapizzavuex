<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-custom" id="nav">
    <!-- <a class="navbar-brand" href="#">Inicio</a> -->
    <li class="nav-item">
      <router-link to="/">Inicio</router-link>
    </li>
    <button aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbarNavDropdown" data-toggle="collapse" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul class="navbar-nav">
    
        <li class="nav-item">
          <router-link to="/pizzas">Galeria fotos</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/ourpizzas">Nuestras Pizzas</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/custompizzas">Armala a tu medida!</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/ingredients">Ingredientes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/history">Historia</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/team">Equipo</router-link>
        </li>

      </ul>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="stylus" scoped>
  .bg-custom
    background-color: black
    .nav-item
      margin-left: 15px
      a
        color: rgba(255,255,255,.7)
        &:hover
          color: rgba(255,255,255,.9)
          text-decoration: none


</style>