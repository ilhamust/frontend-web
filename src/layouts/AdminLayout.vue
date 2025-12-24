<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow flex flex-col">
      <h2 class="text-xl font-bold p-4 border-b">Admin Panel</h2>

      <nav class="flex-1 px-4 py-4 space-y-2">
        <router-link to="/admin" class="block hover:text-blue-600">
          Dashboard
        </router-link>
        <router-link to="/admin/projects" class="block hover:text-blue-600">
          Projects
        </router-link>
        <router-link to="/admin/messages" class="block hover:text-blue-600">
          Messages
        </router-link>
      </nav>

      <!-- Logout -->
      <button
        @click="logout"
        class="m-4 mt-auto bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </aside>

    <!-- Content -->
    <main class="flex-1 p-6">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  localStorage.removeItem('token')
  router.replace('/login')
}
</script>
