<template>
  <section class="container my-5">
    <h1 class=" text-center">Nuestros Productos</h1>
    <div class="row  my-4">

      <div class="col-12">

        <Card :nombre="nombre" :descripcion="descripcion" :precio="precio" :cantidad="cantidad" />

      </div>

    </div>

    <div class="d-grid gap-2 d-md-block">
      <router-link to="/" class="btn btn-primary btn-lg">Volver al inicio</router-link>
    </div>

  </section>
</template>

<script>

import Card from '../components/Card.vue';

export default {
  name: 'ProductView',
  components: {
    Card,
  },
  props: {

    nombre: {
      type: String,
      required: true,

    },
    descripcion: {
      type: String,
      required: true,

    },
    precio: {
      type: Number,
      required: true,

    },
    cantidad: {
      type: Number,
      required: true,

    },

  },

};

</script>
