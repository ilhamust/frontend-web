import { createRouter, createWebHistory } from 'vue-router'

// layouts
import PublicLayout from '../layouts/PublicLayout.vue'
import AdminLayout from '../layouts/AdminLayout.vue'

// public pages
import Login from '../views/Login.vue'
import PublicLanding from '../views/PublicLanding.vue'

// admin pages
import Dashboard from '../views/admin/Dashboard.vue'
import Projects from '../views/admin/Projects.vue'
import Messages from '../views/admin/Messages.vue'

// guard
import { isAuthenticated } from '../utils/auth'

const routes = [
  {
    path: '/',
    component: PublicLayout,
    children: [
      { path: '', component: PublicLanding },
      { path: 'login', component: Login }
    ]
  },
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '', component: Dashboard },
      { path: 'projects', component: Projects },
      { path: 'messages', component: Messages }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/login')
  } else {
    next()
  }
})

export default router
