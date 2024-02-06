<script setup>
import vehiculos from "../utils/vehiculos.js";
</script>

<template>
  <b-container class="mt-5">
    <b-breadcrumb :items="items"></b-breadcrumb>

    <b-input placeholder="Buscar" v-model="filtro"></b-input>
    <b-table
      id="table"
      :items="vehiculos"
      :per-page="perPage"
      :current-page="currentPage"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      label-sort-asc=""
      label-sort-desc=""
      small
      :filter="filtro"
      @filtered="onFiltered"
    ></b-table>
    
    <div class="overflow-auto">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="table"
      ></b-pagination>
      <p class="mt-3">Página actual: {{ currentPage }}</p>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      filtro: null,
      sortBy: "brand",
      sortDesc: false,
      perPage: 5,
      rows: 0,
      currentPage: 1,
      vehiculos: [],
      fields: [
        { key: "brand", label: "Marca", sortable: true },
        { key: "model", label: "Modelo", sortable: true },
        { key: "year", label: "Año", sortable: true },
        { key: "serie", label: "Número de serie", sortable: true },
      ],
      items: [
        { text: 'Formulario', active: false, to: '/formulario' },
        { text: 'Paginacion', active: true },
      ]
    };
  },
  mounted() {
    this.obtenerVehiculos();
  },
  methods: {
    async obtenerVehiculos() {
      try {
        const data = await vehiculos.obtenerVehiculosPaginadas(
          parseInt(this.currentPage),
          parseInt(this.perPage),
          this.sortBy
        );
        
        this.vehiculos = data.content;
        console.log(this.vehiculos);
        this.rows = data.totalElements;
      } catch (error) {
        console.log(error);
      }
    },
    onFiltered(filteredItems) {
      this.currentPage = 1;
      this.rows = filteredItems.length;
    },
  },
};
</script>