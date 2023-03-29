<script setup>
import OccupancyTable from '@/occupancy/OccupancyTable.vue';
</script>

<template>
  <v-app class="app-root">
    <v-app-bar app color="primary">
      <h1 id="app-title">Vanti Front End Dev Assessment</h1>
    </v-app-bar>
    <v-main>
      <v-container>
        <occupancy-table />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
#app-title {
  font-size: 1rem;
  font-weight: normal;
  color: #ffffff;
}
</style>