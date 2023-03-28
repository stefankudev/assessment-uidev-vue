<template>
  <div>
    <v-card>
      <p>My sidebar that lists all floors will go here...</p>
    </v-card>
    <br />
    <v-card>
      <v-data-table :items="records.history" :headers="headers" />
    </v-card>
  </div>
</template>

<script setup>
import { useRecords } from '@/occupancy/records';
import { computed } from 'vue';

const records = useRecords();
const headers = computed(() => {
  return [
    { text: 'When', value: 'time' },
    { text: 'Floor', value: 'floor' },
    { text: 'Occupancy', value: 'peopleCount', align: 'right' }
  ]
})
</script>