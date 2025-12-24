<template>
  <Navbar />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

import Home from "../sections/Home.vue"
import About from "../sections/About.vue"
import Skills from "../sections/Skills.vue"
import Education from "../sections/Education.vue"
import Projects from "../sections/Projects.vue"
import Contact from "../sections/Contact.vue"
import router from '@/router'
</script>
