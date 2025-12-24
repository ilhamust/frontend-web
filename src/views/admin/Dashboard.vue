<script setup>
import { onMounted, ref } from 'vue'
import api from '../../services/api'

const projects = ref([])
const loading = ref(false)
const error = ref(null)
const showEditModal = ref(false)
const editingProject = ref(null)
const deletingId = ref(null)

const formData = ref({
  title: '',
  description: '',
  tech_stack: '',
  github_url: '',
  demo_url: ''
})

onMounted(async () => {
  await fetchProjects()
})

const fetchProjects = async () => {
  loading.value = true
  error.value = null
  try {
    const res = await api.get('/projects')
    projects.value = res.data
  } catch (err) {
    error.value = err.response?.data?.message || err.message
    console.error('Error fetching projects:', err)
  } finally {
    loading.value = false
  }
}

const openEditModal = (project) => {
  editingProject.value = project
  formData.value = {
    title: project.title,
    description: project.description,
    tech_stack: project.tech_stack,
    github_url: project.github_url,
    demo_url: project.demo_url
  }
  showEditModal.value = true
}

const closeEditModal = () => {
  showEditModal.value = false
  editingProject.value = null
  formData.value = {
    title: '',
    description: '',
    tech_stack: '',
    github_url: '',
    demo_url: ''
  }
}

const saveProject = async () => {
  if (!editingProject.value) return

  try {
    await api.put(`/projects/${editingProject.value.id}`, formData.value)
    await fetchProjects()
    closeEditModal()
  } catch (err) {
    error.value = err.response?.data?.message || err.message
    console.error('Error updating project:', err)
  }
}

const deleteProject = async (id) => {
  if (!confirm('Apakah Anda yakin ingin menghapus project ini?')) return

  deletingId.value = id

  try {
    await api.delete(`/projects/${id}`)
    await fetchProjects()
  } catch (err) {
    error.value = err.response?.data?.message || err.message
    console.error('Error deleting project:', err)
  } finally {
    deletingId.value = null
  }
}
</script>

<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4">Dashboard Admin</h1>

    <!-- Error Message -->
    <div v-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
      <p class="text-red-600">Error: {{ error }}</p>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="text-gray-600">Memuat data...</div>

    <!-- Projects Table -->
    <div v-else-if="projects.length > 0" class="overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-100">
            <th class="border p-2 text-left">No</th>
            <th class="border p-2 text-left">Judul</th>
            <th class="border p-2 text-left">Deskripsi</th>
            <th class="border p-2 text-left">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p, index) in projects" :key="p.id" class="border-b hover:bg-gray-50">
            <td class="border p-2">{{ index + 1 }}</td>
            <td class="border p-2 font-medium">{{ p.title }}</td>
            <td class="border p-2 text-sm text-gray-600 line-clamp-2">{{ p.description }}</td>
            <td class="border p-2 flex gap-2">
              <button
                @click="openEditModal(p)"
                class="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition"
              >
                Edit
              </button>
              <button
                @click="deleteProject(p.id)"
                :disabled="deletingId === p.id"
                class="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 disabled:bg-gray-400 transition"
              >
                {{ deletingId === p.id ? 'Menghapus...' : 'Hapus' }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="text-gray-600">Tidak ada project.</div>

    <!-- Edit Modal -->
    <div v-if="showEditModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 class="text-xl font-bold mb-4">Edit Project</h2>

        <div class="space-y-3 mb-4">
          <div>
            <label class="block text-sm font-medium mb-1">Judul</label>
            <input
              v-model="formData.title"
              type="text"
              class="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Deskripsi</label>
            <textarea
              v-model="formData.description"
              class="w-full border rounded px-3 py-2 resize-none"
              rows="3"
            ></textarea>
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Tech Stack</label>
            <input
              v-model="formData.tech_stack"
              type="text"
              class="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">GitHub URL</label>
            <input
              v-model="formData.github_url"
              type="text"
              class="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Demo URL</label>
            <input
              v-model="formData.demo_url"
              type="text"
              class="w-full border rounded px-3 py-2"
            />
          </div>
        </div>

        <div class="flex gap-2 justify-end">
          <button
            @click="closeEditModal"
            class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
          >
            Batal
          </button>
          <button
            @click="saveProject"
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
