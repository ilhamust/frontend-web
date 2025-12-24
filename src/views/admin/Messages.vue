<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Pesan Masuk</h1>
    
    <!-- Loading State -->
    <div v-if="loading" class="text-center py-8">
      <p class="text-gray-600">Memuat data...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
      <p class="text-red-600">Error: {{ error }}</p>
      <button
        @click="fetchMessages"
        class="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Coba Lagi
      </button>
    </div>

    <!-- Messages Table -->
    <div v-else>
      <div v-if="messages.length === 0" class="text-center py-8">
        <p class="text-gray-600">Tidak ada pesan masuk</p>
      </div>

      <div v-else class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-gray-100 border-b-2 border-gray-300">
              <th class="px-6 py-3 text-left font-semibold text-gray-700">No</th>
              <th class="px-6 py-3 text-left font-semibold text-gray-700">Nama</th>
              <th class="px-6 py-3 text-left font-semibold text-gray-700">Pesan</th>
              <th class="px-6 py-3 text-left font-semibold text-gray-700">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(message, index) in messages"
              :key="message.id"
              class="border-b border-gray-200 hover:bg-gray-50 transition"
            >
              <td class="px-6 py-3 text-gray-600">{{ index + 1 }}</td>
              <td class="px-6 py-3 font-medium text-gray-900">{{ message.name }}</td>
              <td class="px-6 py-3 text-gray-700">
                <p class="line-clamp-2">{{ message.message }}</p>
              </td>
              <td class="px-6 py-3">
                <button
                  @click="deleteMessage(message.id)"
                  :disabled="deleting === message.id"
                  class="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 disabled:bg-gray-400 transition"
                >
                  {{ deleting === message.id ? 'Menghapus...' : 'Hapus' }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../../services/api'

const messages = ref([])
const loading = ref(false)
const error = ref(null)
const deleting = ref(null)

const fetchMessages = async () => {
  loading.value = true
  error.value = null

  try {
    console.log('Fetching from:', api.defaults.baseURL + '/contacts')
    const response = await api.get('/contacts')
    console.log('Response data:', response.data)
    messages.value = response.data
  } catch (err) {
    console.error('Full error:', err)
    error.value = err.response?.data?.message || err.message
    console.error('Error fetching messages:', err)
  } finally {
    loading.value = false
  }
}

const deleteMessage = async (id) => {
  if (!confirm('Apakah Anda yakin ingin menghapus pesan ini?')) return

  deleting.value = id

  try {
    await api.delete(`/contacts/${id}`)
    messages.value = messages.value.filter(msg => msg.id !== id)
  } catch (err) {
    error.value = err.response?.data?.message || err.message
    console.error('Error deleting message:', err)
  } finally {
    deleting.value = null
  }
}

onMounted(() => {
  fetchMessages()
})
</script>
