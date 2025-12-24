<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showMobileMenu = ref(false)
const isScrolled = ref(false)
const activeSection = ref('home')

// Default True (Dark Mode) atau cek preferensi user
const isDark = ref(true) 

const menus = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Tentang' },
  { id: 'skills', label: 'Skill' },
  { id: 'education', label: 'Resume' },
  { id: 'projects', label: 'Project' },
  { id: 'contact', label: 'Kontak' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 20
  // ... (Logika active section tetap sama)
}

// FUNGSI TOGGLE YANG DIPERBAIKI
function toggleDarkMode() {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Cek Local Storage saat load
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 w-full z-50 transition-all duration-300 border-b',
      isScrolled
        ? 'bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-md shadow-lg border-gray-200 dark:border-white/5' 
        : 'bg-transparent border-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

      <a href="#home" class="font-bold text-xl tracking-wide text-gray-900 dark:text-white flex items-center gap-1 transition-colors">
        Ilham<span class="text-blue-600 dark:text-cyan-400">.dev</span>
      </a>

      <div class="flex items-center gap-6">

        <nav class="hidden lg:flex items-center gap-8 font-medium text-sm">
          <a
            v-for="menu in menus"
            :key="menu.id"
            :href="'#' + menu.id"
            class="relative group py-1 transition-colors duration-300"
            :class="activeSection === menu.id ? 'text-blue-600 dark:text-white' : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white'"
          >
            {{ menu.label }}
            <span
              class="absolute left-0 bottom-0 h-0.5 bg-blue-600 dark:bg-cyan-400 transition-all duration-300"
              :class="activeSection === menu.id ? 'w-full' : 'w-0 group-hover:w-full'"
            />
          </a>
        </nav>

        <div class="hidden lg:block h-5 w-px bg-gray-300 dark:bg-gray-700"></div>

        <button
          @click="toggleDarkMode"
          class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10"
        >
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m0 13.5V21m9-9h-2.25M5.25 12H3m15.364-6.364-1.591 1.591M7.227 16.773l-1.591 1.591m0-11.318 1.591 1.591m11.318 11.318 1.591 1.591M12 8.25A3.75 3.75 0 1112 15.75z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0112 21.75 9.75 9.75 0 0112 2.25A7.5 7.5 0 0021.75 12c0 1.1-.226 2.148-.598 3.002z" />
          </svg>
        </button>

        <button
          class="lg:hidden text-gray-900 dark:text-gray-300 text-2xl"
          @click="showMobileMenu = true"
        >
          ☰
        </button>
      </div>
    </div>
  </header>

  <aside
      v-if="showMobileMenu"
      class="fixed top-0 right-0 w-[75%] max-w-xs h-full bg-white dark:bg-[#111827] border-l border-gray-200 dark:border-gray-800 z-50 shadow-2xl p-6 transition-colors duration-300"
    >
    <div class="flex justify-between items-center mb-10">
        <span class="font-bold text-lg text-gray-900 dark:text-white">Menu</span>
        <button @click="showMobileMenu = false" class="text-gray-600 dark:text-gray-400 text-xl">✕</button>
      </div>
       <nav class="flex flex-col gap-6 font-medium">
        <a
          v-for="menu in menus"
          :key="menu.id"
          :href="'#' + menu.id"
          class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 border-b border-gray-100 dark:border-gray-800 pb-2"
          @click="showMobileMenu = false"
        >
          {{ menu.label }}
        </a>
      </nav>
  </aside>
</template>