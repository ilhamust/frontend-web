<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../services/authService'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = async () => {
  try {
    const res = await login(email.value, password.value)

    // 🔑 SIMPAN TOKEN
    localStorage.setItem('token', res.token)

    // 🚀 REDIRECT KE DASHBOARD
    router.push('/admin')
  } catch (err) {
    error.value = 'Email atau password salah'
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <form @submit.prevent="handleLogin" class="w-96 p-6 bg-white shadow rounded">
      <h1 class="text-xl font-bold mb-4">Login Admin</h1>

      <input v-model="email" type="email" placeholder="Email" class="w-full mb-3 border p-2" />
      <input v-model="password" type="password" placeholder="Password" class="w-full mb-3 border p-2" />

      <p v-if="error" class="text-red-500 text-sm mb-2">{{ error }}</p>

      <button class="w-full bg-blue-600 text-white py-2 rounded">
        Login
      </button>
    </form>
  </div>
</template>
