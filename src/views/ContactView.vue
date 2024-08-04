<template>
  <section class="container my-5">
    <h1 class=" text-center">Contacto</h1>
    <div class="row">

      <div class="col-sm-4 col-12 px-5 mb-4">


      </div>

    </div>

    <div class="d-grid gap-2 d-md-block">
      <button @click="volverInicio" class="btn btn-primary btn-lg">Volver al inicio</button>
    </div>

  </section>
</template>
<script>
export default{ //Ejemplo de uso de Push()
  methods:{
    volverInicio(){
      return this.$router.push('/');
    },
  },
};
</script>
