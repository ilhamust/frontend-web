<script setup>
import { ref, onMounted } from 'vue'
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject
} from '@/services/projectService'

const projects = ref([])
const isEdit = ref(false)
const editId = ref(null)

const form = ref({
  title: '',
  description: '',
  tech_stack: '',
  github_url: '',
  demo_url: '',
  image: null
})

const loadProjects = async () => {
  try {
    projects.value = await getProjects()
  } catch (err) {
    console.error(err)
  }
}

const submitProject = async () => {
  if (isEdit.value) {
    await updateProject(editId.value, form.value)
  } else {
    await createProject(form.value)
  }

  resetForm()
  loadProjects()
}

const startEdit = (project) => {
  isEdit.value = true
  editId.value = project.id
  form.value = { ...project, image: null }
}

const removeProject = async (id) => {
  if (confirm('Hapus project ini?')) {
    await deleteProject(id)
    loadProjects()
  }
}

const resetForm = () => {
  isEdit.value = false
  editId.value = null
  form.value = {
    title: '',
    description: '',
    tech_stack: '',
    github_url: '',
    demo_url: '',
    image: null
  }
}

onMounted(loadProjects)
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Manajemen Project</h1>

    <!-- FORM -->
    <div class="bg-white p-4 rounded shadow mb-6">
      <h2 class="font-semibold mb-2">
        {{ isEdit ? 'Edit Project' : 'Tambah Project' }}
      </h2>

      <input v-model="form.title" placeholder="Judul" class="input" />
      <textarea v-model="form.description" placeholder="Deskripsi" class="input" />
      <input v-model="form.tech_stack" placeholder="Tech Stack" class="input" />
      <input v-model="form.github_url" placeholder="Github URL" class="input" />
      <input v-model="form.demo_url" placeholder="Demo URL" class="input" />

      <input type="file" @change="e => form.image = e.target.files[0]" />

      <button @click="submitProject" class="btn mt-3">
        {{ isEdit ? 'Update' : 'Simpan' }}
      </button>
    </div>

    <!-- LIST -->
    <div class="bg-white p-4 rounded shadow">
      <table class="w-full">
        <thead>
          <tr>
            <th>Judul</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in projects" :key="p.id">
            <td>{{ p.title }}</td>
            <td>
              <button @click="startEdit(p)">Edit</button>
              <button @click="removeProject(p.id)" class="text-red-500 ml-2">
                Hapus
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.input {
  width: 100%;
  border: 1px solid #ddd;
  padding: 8px;
  margin-bottom: 8px;
}
.btn {
  background: #2563eb;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
}
</style>
