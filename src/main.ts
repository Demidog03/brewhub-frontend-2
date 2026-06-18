import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router/index.ts'
import { MyPreset } from './core/configs/primevue.config.ts';
import 'primeicons/primeicons.css'
import '@core/styles/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      darkModeSelector: '.my-app-dark',
    }
  },
  ripple: true
});

app.mount('#app')
