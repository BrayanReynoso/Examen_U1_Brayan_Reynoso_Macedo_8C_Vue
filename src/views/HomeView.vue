<script setup>
import { ref } from 'vue';

</script>
<template>
  <div>
    <b-navbar
    toggleable="lg"
    type="dark"
    variant="info"
    fixed="top"
    class="ml-5"
  >
    <b-navbar-toggle target="sidebar"></b-navbar-toggle>
    <b-navbar-brand href="#">Examen</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/landing-page">Landing-page</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <b-container fluid>
      <b-breadcrumb :items="items"></b-breadcrumb>
      <h1>Te encuentras en la pantalla Home</h1>
      <b-link href="/formulario">Ir a Formulario</b-link>
    </b-container>
  </div>
</template>

<script>
const items = ref([
  {
    text: "Home",
    href: "/#/Home",
    name: "Home"
  },
]);
</script>
