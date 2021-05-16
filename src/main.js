import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";

axios.defaults.baseURL =
  "https://firestore.googleapis.com/v1/projects/vuejs-section17/databases/(default)/documents";

const interceptorsRequest = axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
const interceptorsResponse = axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.request.eject(interceptorsRequest);
axios.interceptors.response.eject(interceptorsResponse);

createApp(App).mount('#app')
