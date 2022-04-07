import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layouts/index.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Work from '@/views/Work.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'about', component: About },
      { path: 'work', component: Work }
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
