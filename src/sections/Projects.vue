<script setup>
import { ref, onMounted } from 'vue'

// 1. Ambil URL API dari .env
const apiUrl = import.meta.env.VITE_API_URL

// 2. State Management
const projects = ref([])
const isLoading = ref(true)
const errorMsg = ref('')

// 3. Fetch Data dari Custom Backend
const fetchProjects = async () => {
  try {
    isLoading.value = true
    
    // Request ke http://localhost:5000/api/projects
    const response = await fetch(`${apiUrl}/projects`)

    // Cek jika response tidak OK (misal 404 atau 500)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()

    // 4. Transformasi Data
    // Kita tetap melakukan split tech_stack di sini untuk jaga-jaga 
    // jika backend mengirim data mentah (string) dari database.
    projects.value = data.map(project => ({
      ...project,
      // Mengubah string "Vue, Laravel" menjadi array ['Vue', 'Laravel']
      // Jika backend sudah mengirim dalam bentuk Array, bagian ini bisa disederhanakan.
      tech_list: (typeof project.tech_stack === 'string') 
        ? project.tech_stack.split(',').map(item => item.trim()) 
        : (project.tech_stack || [])
    }))

  } catch (err) {
    console.error('Error fetching projects:', err)
    errorMsg.value = 'Gagal memuat data project. Pastikan backend berjalan.'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchProjects()
})
</script>

<template>
  <section id="projects" class="py-20 bg-[#0B1120] text-white relative overflow-hidden">
    
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-400/10 rounded-full border border-cyan-400/20">
             Portfolio
        </span>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Featured <span class="text-blue-500">Projects</span>
        </h2>
        <p class="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
          Beberapa hasil karya terbaik yang telah saya kerjakan dengan berbagai teknologi.
        </p>
      </div>

      <div v-if="isLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="n in 3" :key="n" class="bg-white/5 rounded-2xl p-4 h-96 animate-pulse border border-white/5">
           <div class="w-full h-48 bg-gray-700 rounded-xl mb-4"></div>
           <div class="h-6 bg-gray-700 rounded w-3/4 mb-3"></div>
           <div class="h-4 bg-gray-700 rounded w-full mb-2"></div>
           <div class="h-4 bg-gray-700 rounded w-2/3"></div>
        </div>
      </div>

      <div v-else-if="errorMsg" class="text-center py-10">
        <div class="inline-flex flex-col items-center">
            <p class="text-red-400 bg-red-400/10 px-4 py-2 rounded-lg border border-red-400/20 mb-2">
            {{ errorMsg }}
            </p>
            <p class="text-xs text-gray-500">Cek console browser untuk detail.</p>
        </div>
      </div>

      <div v-else-if="projects.length === 0" class="text-center py-10 text-gray-500">
        Belum ada project yang ditambahkan.
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div 
          v-for="(project, index) in projects" 
          :key="project.id"
          class="group bg-[#111827] border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="relative overflow-hidden h-48 sm:h-56 w-full">
            <div class="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent opacity-60 z-10"></div>
            
            <img 
              :src="project.image_url || 'https://via.placeholder.com/600x400?text=No+Image'" 
              :alt="project.title"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div class="p-6 flex-1 flex flex-col relative z-20 -mt-4">
            
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {{ project.title }}
            </h3>
            
            <p class="text-gray-400 text-sm line-clamp-3 mb-4 flex-1">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mb-6">
              <span 
                v-for="(tech, i) in project.tech_list" 
                :key="i"
                class="px-2.5 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/30 rounded-md border border-cyan-500/20"
              >
                {{ tech }}
              </span>
            </div>

            <div class="flex items-center gap-4 mt-auto pt-4 border-t border-gray-800">
              <a 
                v-if="project.demo_url" 
                :href="project.demo_url" 
                target="_blank"
                class="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
              
              <a 
                v-if="project.github_url" 
                :href="project.github_url" 
                target="_blank"
                class="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors ml-auto"
              >
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Source Code
              </a>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>