import Vue from 'vue';
import { firestorePlugin } from 'vuefire';
import App from './App.vue';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(firestorePlugin);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
