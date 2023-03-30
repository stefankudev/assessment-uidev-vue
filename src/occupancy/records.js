import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import router from '../router'

export const useRecords = defineStore('records', () => {
  // TODO: Get this information from the server

  const capacity = ref(120)

  // Floors
  const floors = computed(() => {
    return [
      "Penthouse",
      "Floor 2",
      "Floor 1",
      "Ground",
      "Basement"
    ]
  })
  const selectedFloor = ref(null);
  const selectedFloorActions = computed({
    get: () => selectedFloor.value,
    set: value => {
      selectedFloor.value = value;
      router.push(`/${value}`)
    }
  });

  // Records
  const occupancyRecords = computed(() => {
    const out = [];
    const then = new Date("2023-02-04T12:34:56");
    for (let i = 0; i < 200; i++) {
      for (let floor of floors.value) {
        out.push({
          time: new Date(then.getTime() + (30 * 60 * 1000 * i)),
          peopleCount: Math.round(Math.random() * capacity.value),
          floor
        });
      }
    }
    return out;
  });



  const filteredOccupancyRecords = computed(() => {
    if (!selectedFloor.value) {
      return occupancyRecords.value;
    }
    return occupancyRecords.value.filter(record => record.floor === selectedFloor.value);
  });

  return {
    capacity,
    floors,
    occupancyRecords: filteredOccupancyRecords,
    selectedFloor: selectedFloorActions
  };
});
