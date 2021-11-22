import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD__4L2-tmrXxjKoyL2GYOh2h6Q0pxZpn8",
  authDomain: "indigo-fb7e5.firebaseapp.com",
  projectId: "indigo-fb7e5",
  storageBucket: "indigo-fb7e5.appspot.com",
  messagingSenderId: "96164093416",
  appId: "1:96164093416:web:a2a0298d50ffd389d7585d",
  measurementId: "G-RSP5DP2QVB"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
