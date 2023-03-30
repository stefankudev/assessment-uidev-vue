import App from '@/App.vue';
import pinia from '@/plugins/pinia.js';
import vuetify from '@/plugins/vuetify.js';
import router from './router.js';
import Vue from 'vue';

const app = new Vue({
  pinia,
  vuetify,
  router,
  render: (h) => h(App)
})
app.$mount('#app');
