// Import Vue
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createWebHistory, createRouter } from "vue-router";

// Note: Using an Alias in Webpack
import 'styles/index.scss';

// Import Vue App, routes, store
import App from './components/App.vue';
import routes from './routes';

// Configure router
const router = new createRouter({
    routes,
    linkActiveClass: 'active',
    history: createWebHistory(),
});
const pinia = createPinia();
createApp(App).use(pinia).use(router).mount('#app');

// Note: Most likely not needed !!
// if (module.hot) {
// module.hot.accept();
// }
// NEW
if (process.env.NODE_ENV === 'development') {
    const { worker } = require('../mocks/browser')
    worker.start()
}
  