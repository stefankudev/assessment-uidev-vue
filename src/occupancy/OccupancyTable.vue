<script setup>
import { useRecords } from '@/occupancy/records';
import { computed } from 'vue';

const records = useRecords();
const headers = computed(() => {
  return [
    { text: 'When', value: 'time' },
    { text: 'Floor', value: 'floor' },
    { text: 'Occupancy', value: 'peopleCount', align: 'right' }
  ];
});
</script>

<template>
  <section id="wrapper">
    <aside>
      <v-card class="card">
        <v-toolbar-title class="title">Filter by floor</v-toolbar-title>
        <v-divider></v-divider>
        <v-list>
          <v-list-item-group v-model="records.selectedFloor">
            <v-list-item v-for="floor in records.floors" :key="floor" :value="floor">
              <v-list-item-title>{{ floor }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </aside>
    <main>
      <v-card class="card">
        <v-toolbar-title class="title">Occupancy records</v-toolbar-title>
        <v-divider></v-divider>
        <v-data-table :items="records.occupancyRecords" :headers="headers" />
      </v-card>
    </main>
  </section>
</template>

<style lang="scss">
#wrapper {
  display: flex;
  min-height: 30vh;
}

aside {
  width: 30%;
  padding-right: 1rem;
  min-height: 100%;
}

main {
  flex: 1;
}

.card {
  padding: 1.5rem;
  height: 100%;

  .title {
    font-size: 2rem;
    padding-bottom: 0.75rem;
  }
}
</style>