<script>
import Vue from 'vue'
import { BContainer, BRow, BCol } from 'bootstrap-vue'
</script>
<template>
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>

      <b-container fluid class="hero">
        <b-row>
          <b-col>
          </b-col>
          <b-col class="hero-content" cols="6">
            <div>
              <h1>Bienvenido a Nuestra Página</h1>
              <p>Descubre todo lo que tenemos para ofrecerte.</p>
              <router-link to="/" class="btn btn-primary">Ir al Sitio Principal</router-link>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="main-content">
      </b-container>
      <b-footer class="footer">
        <b-container fluid>
          <b-row>
            <b-col md="12">
              <h2>Footer</h2>
              <p>Este es el pie de página de nuestra página de inicio.</p>
            </b-col>
          </b-row>
        </b-container>
      </b-footer>
    </div>
  </template>
  
  <style scoped>
    .hero {
      position: relative;
    }
  
    .hero img {
      width: 100%;
      height: auto;
    }
  
    .hero-content {
      text-align: center;
      color: #fff;
      z-index: 1;
    }
  
    .main-content {
      padding: 20px;
      text-align: center;
      margin-top: 100px; 
    }
  
    .footer {
      background-color: #f8f9fa;
      color: #333;
      padding: 20px 0;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  </style>
  
  
<script>
export default {
  data() {
    return {
      items: [
            {
          text: "Home",
          href: "/#/Home",
          name:"Home"
        },
        {
          text: "Formulario",
          href: "/#/formulario",
          name:"formulario"
        },
        {
          text: "Landing-page",
          href: "/#/landing-page",
          name:"landing-page"
        },

      ],
    };
  },
};
</script>