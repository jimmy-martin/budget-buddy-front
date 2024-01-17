import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import './style.scss'
import App from './App.vue'
import Home from './views/Home.vue'
import Profile from './views/Profile.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: "Home", component: Home},
    {path: '/profile', name: "Profile", component: Profile}
  ]
})

createApp(App)
.use(router)
.mount('#app')

function showMdp(event) {
  let target = event.currentTarget
  let mdpInputElement = target.parentElement.querySelector('.mdp-input')
  mdpInputElement.type = mdpInputElement.type === 'password' ? 'text' : 'password' 
}