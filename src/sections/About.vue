<script setup>
</script>

<template>
  <section
    id="about"
    class="py-20 bg-[#0B1120] text-white relative overflow-hidden"
  >
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>

    <div class="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <div class="relative group" data-aos="fade-up" data-aos-delay="100">
          <div class="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl transform rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
          
          <div class="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#111827]">
            <img 
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Coding Setup" 
              class="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105"
            />
            
            <div class="absolute bottom-6 right-6 bg-[#0B1120]/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <span class="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-400/10 rounded-full border border-cyan-400/20">
             Tentang Saya
          </span>

          <h2 class="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Seorang Developer yang antusias dengan <span class="text-blue-500">Detail</span> & <span class="text-cyan-400">Estetika</span>.
          </h2>

          <p class="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
            Ilham Mustaqim adalah seorang mahasiswa Informatika semester 5 di UNU Yogyakarta yang memiliki rekam jejak akademik impresif dengan IPK 3.95/4.00. Ia dikenal sebagai pengembang yang antusias dalam menggabungkan logika pemrograman yang kuat dengan tampilan visual yang menarik.
          </p>
          
          <p class="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
            Memiliki latar belakang pengalaman sebagai teknisi jaringan dan spesialis media sosial, Ilham kini memfokuskan keahliannya pada pembangunan aplikasi web modern. Ia terampil menggunakan teknologi terkini seperti Vue.js, Laravel, dan Tailwind CSS untuk menciptakan solusi digital yang responsif dan user-friendly.
          </p>


          <a href="#projects" class="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group">
            Lihat Portfolio Saya
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>

</style>