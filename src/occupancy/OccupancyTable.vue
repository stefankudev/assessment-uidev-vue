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

const selectedFloor = computed({
  get: () => records.selectedFloor,
  set: value => {
    records.selectedFloor = value;
  }
});
</script>

<template>
  <section id="wrapper">
    <aside>
      <v-card class="card">
        <!-- Some props I might also use here are "multiple chips closable-chips clearable" but then I would also need to change the state to an array of values -->
        <v-select v-model="selectedFloor" :items="records.floors" label="Select a floor" />
      </v-card>
    </aside>
    <main>
      <v-card class="card">
        <v-data-table :items="records.history" :headers="headers" />
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
  padding: 1rem;
  height: 100%;
}
</style>