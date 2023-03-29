import Vue from 'vue';
import VueRouter from 'vue-router';
import OccupancyTable from '@/occupancy/OccupancyTable.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/:floorName?', component: OccupancyTable },
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;