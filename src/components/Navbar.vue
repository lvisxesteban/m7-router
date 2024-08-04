<template lang=""><!--1 - Modificar el código del menú de navegación en sus ítems e integrar <router-link>.(2 Puntos) -->
  <nav class="navbar navbar-expand-lg navbar-light "><!--fixed-top-->
    <div class="container px-4">
      <a class="navbar-brand" href="#"><img src="../assets/logo.png" alt="logo de suricata" /></a>
      <button class="navbar-toggler navbar-dark border-light" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item active">
            <!--<a class="nav-link text-light" href="#">Inicio <span class="sr-only">(current)</span></a>-->
            <router-link :to="{name: 'home'}" class="nav-link text-light">Inicio</router-link>
          </li>
          <li class="nav-item">
            <!--<a class="nav-link text-light" href="#">Productos</a>-->
            <router-link :to="{name: 'products'}" class="nav-link text-light">Productos</router-link>
          </li>
          <li class="nav-item">
            <!--<a class="nav-link text-light" href="#">Contacto</a>-->
            <router-link :to="{name: 'contact'}" class="nav-link text-light">Contacto</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  
}
</script>
<style scoped>
</style>