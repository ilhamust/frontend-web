<script setup>
import { ref, onMounted } from 'vue'

const show = ref(false)

onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 100)
})
</script>

<template>
  <section
    id="home"
    class="min-h-screen bg-[#0B1120] text-white overflow-hidden flex items-center relative"
  >
    <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[200px] h-[200px] bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"></div>

    <div
      class="max-w-6xl mx-auto px-6 md:px-12 w-full
             grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10"
    >

      <transition name="fade-up">
        <div v-if="show">
          <span class="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-400/10 rounded-full border border-cyan-400/20">
             Welcome to my portfolio
           </span>

          <h1 class="text-3xl md:text-5xl font-bold leading-tight mb-3">
            Hi, I'm <span class="text-cyan-400">Ilham</span> <span class="animate-wave inline-block align-middle text-2xl md:text-4xl ml-1">👋</span>
          </h1>
          
          <h2 class="text-lg md:text-xl text-gray-300 font-medium mb-4">
            Full-Stack Developer & Tech Enthusiast
          </h2>

          <div class="flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              class="px-6 py-2.5 bg-blue-600 text-white
                     rounded-lg font-semibold text-sm
                     hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 
                     transition-all duration-300 flex items-center gap-2"
            >
              Contact Me 
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <div class="h-8 w-px bg-gray-700 mx-1 hidden sm:block"></div>

            <div class="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/ilham-must" class="social-btn group" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg class="w-5 h-5 fill-gray-400 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                </svg>
              </a>

              <a href="https://github.com/ilhamust" class="social-btn group" title="GitHub">
                <svg class="w-5 h-5 fill-gray-400 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              <a href="https://instagram.com/_ilhammustaqim" class="social-btn group" title="Instagram">
                 <svg class="w-5 h-5 fill-gray-400 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                 </svg>
              </a>
            </div>

          </div>
        </div>
      </transition>

      <transition name="fade-in">
        <div v-if="show" class="relative flex justify-center lg:justify-end mt-8 lg:-mt-16 lg:pr-10">
          
          <div 
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                   w-[240px] h-[270px] md:w-[320px] md:h-[350px]
                   bg-gradient-to-br from-blue-500 to-cyan-400
                   -z-10 blob-animation opacity-90"
          ></div>

          <img
            src="/src/assets/images/profile.png" 
            alt="Profile"
            class="relative w-56 md:w-72 object-cover drop-shadow-2xl z-20"
          />
          
        </div>
      </transition>

    </div>
  </section>
</template>

<style scoped>
.social-btn {
  @apply w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 bg-gray-800/50 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300;
}

.fade-up-enter-active,
.fade-in-enter-active {
  transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-in-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

@keyframes wave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

.animate-wave {
  animation: wave 2s infinite;
  transform-origin: 70% 70%;
}

.blob-animation {
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: blob-bounce 8s ease-in-out infinite alternate;
}

@keyframes blob-bounce {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    transform: translate(-50%, -50%) scale(1.05);
  }
}
</style>