
<template>
  <div class="row">
    <h1>Factura</h1>
    <div class="col-6">{{pizza.name}}</div>
    <div class="col-6">{{pizza.precio}}</div>
    <h2>Total</h2>
  </div>
</template>

<script>
export default {
  name: "Bill",
  total: 0
}
</script>

