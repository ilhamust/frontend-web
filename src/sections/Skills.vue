<script setup>
const skills = [
  { name: 'HTML', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Vue JS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'React JS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node JS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express JS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', isDark: true },
  { name: 'MySQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Supabase', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
  { name: 'Laravel', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'CodeIgniter', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg' },
  { name: 'Flutter', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
]
</script>

<template>
  <section
    id="skills"
    class="py-20 bg-[#0B1120] text-white relative overflow-hidden"
  >
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>

    <div class="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
      
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-400/10 rounded-full border border-cyan-400/20">
             Tech Stack
        </span>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Tools & Teknologi
        </h2>
        <p class="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
          Daftar teknologi yang saya gunakan untuk membangun aplikasi digital yang handal dan skalabel.
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        
        <div 
          v-for="(skill, index) in skills" 
          :key="index"
          class="group relative flex flex-col items-center justify-center p-6 
                 bg-white/5 border border-white/5 rounded-2xl
                 hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1
                 transition-all duration-300 cursor-default"
          data-aos="zoom-up"
          :data-aos-delay="index * 50"
        >
          <div class="w-14 h-14 mb-4 relative flex items-center justify-center">
            <img 
              :src="skill.url" 
              :alt="skill.name"
              class="w-full h-full object-contain transition-all duration-300 filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100"
              :class="{ 'invert group-hover:invert-0': skill.isDark }" 
            />
          </div>
          
          <h3 class="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
            {{ skill.name }}
          </h3>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>

</style>