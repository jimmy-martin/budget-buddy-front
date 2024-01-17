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

/* // 1. Define route components.
// These can be imported from other files
const Home = { template: App }
const About = { template: '<div>About</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app') */



