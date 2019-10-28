<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-custom" id="nav">
    <a class="navbar-brand" href="#">Inicio</a>
    <button aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbarNavDropdown" data-toggle="collapse" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul class="navbar-nav">
    
        <li class="nav-item">
          <router-link to="/">Home</router-link>          
        </li>
        <li class="nav-item">
          <router-link to="/contact">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/pizzas">Pizzas</router-link>
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
</style>