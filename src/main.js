import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import './style.scss'
import App from './App.vue'
//Import all views for the router
import Home from './views/Home.vue'
import Profile from './views/Profile.vue'

//Define routes for Vue Router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: "Home", component: Home},
    {path: '/profile', name: "Profile", component: Profile}
  ]
})

//Create App from App.vue and use the router from Vue Router
createApp(App)
.use(router)
.mount('#app')