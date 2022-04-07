import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layouts/index.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

const routes = [
  { 
    path: '/', 
    component: Layout, 
    children: [
      { path: '', component: Home },
      { path: 'about', component: About },
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})