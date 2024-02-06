<script setup>
import axios from 'axios';
</script>

<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info" fixed="top" class="ml-5">
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

        <b-breadcrumb :items="items" class="mt-5 ml-5"></b-breadcrumb>

        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="mt-5 ml-5">
            <b-form-group id="input-group-brand" label="Marca:" label-for="input-brand" :state="brandValid ? null : false"
                :invalid-feedback="brandValid ? null : 'Marca invalida'">
                <b-form-input id="input-brand" v-model="form.brand" placeholder="Ingresa la marca" required
                    :state="brandValid ? null : false"></b-form-input>
            </b-form-group>
          
            <b-form-group id="input-group-model" label="Modelo:" label-for="input-model"
                :state="modelValid ? null : false" :invalid-feedback="modelValid ? null : 'Modelo invalido'">
                <b-form-input id="input-model" v-model="form.model" placeholder="Ingresa el modelo" required
                    :state="modelValid ? null : false"></b-form-input>
            </b-form-group>
          
            <b-form-group id="input-group-year" label="Año de facturacion:" label-for="input-year"
                :state="yearValid ? null : false" :invalid-feedback="yearValid ? null : 'Año de fabricacion invalido'">
                <b-form-input id="input-year" v-model="form.year" type="number" placeholder="Ingresa el año de fabricacion"
                    required :state="yearValid ? null : false"></b-form-input>
            </b-form-group>
          
            <b-form-group id="input-group-serie" label="Numero de serie:" label-for="input-serie"
                :state="serieValid ? null : false" :invalid-feedback="serieValid ? null : 'Numero de serie invalido'">
                <b-form-input id="input-serie" v-model="form.serie" placeholder="Ingrese el numero de serie" required
                    :state="serieValid ? null : false"></b-form-input>
            </b-form-group>
          
            <b-button type="submit" variant="primary">Enviar</b-button>
            <b-button type="reset" variant="danger">Limpiar</b-button>
          </b-form>
          <div>
            <b-link href="/paginacion">ir a paginacion</b-link>
          </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    text: "Home",
                    href: "/#/Home",
                    name: "Home"
                },
                {
                    text: "Form",
                    href: "/#/formulario",
                    name: "Form"
                }
            ],
            form: {
                brand: '',
                model: '',
                year: '',
                serie: ''
            },
            show: true
        }
    },
    computed: {
        brandValid() {
            const regex = /^[A-Za-z0-9]+$/;
            return regex.test(this.form.brand);
        },
        modelValid() {
            const regex = /^[A-Za-z0-9]+$/;
            return regex.test(this.form.model);
        },
        yearValid() {
            const currentYear = new Date().getFullYear();
            return this.form.year <= currentYear && this.form.year.match(/^\d{4}$/);
        },
        serieValid() {
            const regex = /^[A-Za-z]{4}\d{3}-\d{2}[A-Za-z]{2}$/;
            return regex.test(this.form.serie);
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            const formData = {
                brand: this.form.brand,
                model: this.form.model,
                year: this.form.year !== '' ? parseInt(this.form.year) : null,
                serie: this.form.serie
            };

            axios.post('http://localhost:8080/api/vehiculos/', formData)
                .then(response => {
                    console.log('OK!', response.data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },

      onReset(event) {
            event.preventDefault();
            this.form.brand = '';
            this.form.model = '';
            this.form.year = null;
            this.form.serie = '';
            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
        }
    }
}
</script>
