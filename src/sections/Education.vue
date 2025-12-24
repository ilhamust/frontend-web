<script setup>
import { ref } from 'vue'

const education = [
  {
    institution: 'UNU YOGYAKARTA',
    location: 'Yogyakarta, Indonesia',
    role: 'Program Studi Informatika, Fakultas Teknologi Informasi',
    period: '2023 - Sekarang',
    active: true,
    details: [
      'IPK sementara 3.95/4.00',
      'Aktif mengikuti pelatihan skill dari Dicoding, MySkill dan Unpix',
      'Aktif berorganisasi di Himpunan Informatika UNU Yogyakarta',
      'Menjadi Peer Conselor PUSDEKA'
    ]
  },
  {
    institution: 'SMK N 2 KLATEN',
    location: 'Klaten, Indonesia',
    role: 'Sistem Informatika, Jaringan dan Aplikasi',
    period: '2019 - 2023',
    active: false,
    details: [
      'Nilai Akhir 80,5',
      'Aktif berorganisasi di Paskibra BRADASIWA, ITSC, dan MPK'
    ]
  }
]

const experience = [
  {
    company: 'Freelance',
    location: 'Remote / Hybrid',
    role: 'Full Stack Web Developer',
    period: '2025 - Sekarang',
    active: true,
    details: [
      'Membangun solusi aplikasi web untuk berbagai klien.'
    ]
  },
  {
    company: 'SHAFIEC (Digital Economy and Halal Center)',
    location: 'Yogyakarta, Indonesia',
    role: 'Sosial Media Spesialis',
    period: 'Maret 2025 – Juli 2025',
    active: false,
    details: [
      'Membuat konten edukatif keuangan, digital ekonomi dan halal lifestyle.',
      'Membuat konten artikel untuk website shafiec.unu-jogja.ac.id.',
      'Memanajemen akun instagram @shafiec.unujogja.',
      'Mengelola website menggunakan WordPress.',
      'Membuat laporan engagement sosial media setiap bulan.'
    ]
  },
  {
    company: 'CV. KARYA HIDUP SENTOSA',
    location: 'Yogyakarta, Indonesia',
    role: 'Teknisi Jaringan dan Hardware seksi ICT',
    period: '2022 - 2023',
    active: false,
    details: [
      'Bertanggungjawab atas perawatan komputer, jaringan serta hardware perusahaan.',
      'Melakukan instalasi jaringan wired dan wireless.',
      'Memonitoring downtime jaringan perusahaan pusat serta cabang.',
      'Support user terkait ticket (IT Support) & troubleshooting aplikasi.',
      'Instalasi CCTV dan peralatan conference ruang meeting.'
    ]
  }
]
</script>

<template>
  <section
    id="experience-education"
    class="py-20 bg-[#0B1120] text-white relative overflow-hidden"
  >
    <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute top-20 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      
      <div class="mb-16 text-center" data-aos="fade-up">
        <span class="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-400/10 rounded-full border border-cyan-400/20">
             Resume
        </span>
        <h2 class="text-3xl md:text-4xl font-bold">
          Pendidikan & <span class="text-blue-500">Pengalaman</span>
        </h2>
        <p class="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Perjalanan akademis dan profesional yang membentuk keahlian saya saat ini.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

        <div class="bg-white/5 border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-white/10 transition-colors" data-aos="fade-right">
          <div class="flex items-center gap-3 mb-8">
             <div class="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
             </div>
             <h3 class="text-2xl font-bold text-white">Pendidikan</h3>
          </div>

          <div class="relative border-l border-gray-700 ml-3 space-y-10 pb-2">
            <div 
              v-for="(edu, index) in education" 
              :key="index"
              class="relative pl-8 md:pl-10 group"
            >
              <div 
                class="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border border-[#0B1120] transition-colors duration-300"
                :class="edu.active ? 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'bg-gray-600 group-hover:bg-cyan-400'"
              ></div>
              <div>
                <span class="inline-block px-2 py-0.5 mb-2 text-xs font-medium bg-blue-500/10 text-blue-400 rounded border border-blue-500/20">
                  {{ edu.period }}
                </span>
                <h4 class="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {{ edu.institution }}
                </h4>
                <p class="text-sm text-gray-400 mb-1">{{ edu.role }}</p>
                <p class="text-xs text-gray-500 mb-3">{{ edu.location }}</p>
                <ul class="list-disc list-outside ml-4 space-y-1 text-sm text-gray-300 marker:text-gray-600">
                  <li v-for="(detail, i) in edu.details" :key="i">{{ detail }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white/5 border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-white/10 transition-colors" data-aos="fade-left">
          <div class="flex items-center gap-3 mb-8">
             <div class="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
             </div>
             <h3 class="text-2xl font-bold text-white">Pengalaman</h3>
          </div>

           <div class="relative border-l border-gray-700 ml-3 space-y-10 pb-2">
            <div 
              v-for="(exp, index) in experience" 
              :key="index"
              class="relative pl-8 md:pl-10 group"
            >
              <div 
                class="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border border-[#0B1120] transition-colors duration-300"
                :class="exp.active ? 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'bg-gray-600 group-hover:bg-cyan-400'"
              ></div>
              <div>
                <span class="inline-block px-2 py-0.5 mb-2 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20">
                  {{ exp.period }}
                </span>
                <h4 class="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {{ exp.company }}
                </h4>
                <p class="text-sm text-gray-400 mb-1">{{ exp.role }}</p>
                 <p class="text-xs text-gray-500 mb-3">{{ exp.location }}</p>
                <ul class="list-disc list-outside ml-4 space-y-1 text-sm text-gray-300 marker:text-gray-600">
                  <li v-for="(detail, i) in exp.details" :key="i">{{ detail }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
li { transition: color 0.2s; }
.group:hover li { color: #e5e7eb; }
</style>