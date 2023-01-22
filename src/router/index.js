import { createRouter, createWebHashHistory } from 'vue-router'
import ContactView from '@/views/ContactView.vue'
import KeyboardView from '@/views/KeyboardView.vue'
import JournalsView from '@/views/JournalsView.vue'
import FormView from '@/views/FormView.vue'
const routes = [
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/keyboard',
    name: 'keyboard',
    component: KeyboardView
  },
  {
    path: '/journals',
    name: 'journals',
    component: JournalsView
  },
  {
    path: '/form',
    name: 'form',
    component: FormView
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
