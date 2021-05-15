import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";

axios.defaults.baseURL =
  "https://firestore.googleapis.com/v1/projects/vuejs-section17/databases/(default)/documents";

createApp(App).mount('#app')
