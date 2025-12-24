<script setup>
import { ref } from "vue";
import api from "../api/axios";

const form = ref({
  name: "",
  email: "",
  message: ""
});

const isLoading = ref(false);
const success = ref(false);
const errorMsg = ref("");

const submitForm = async () => {
  isLoading.value = true;
  errorMsg.value = "";
  success.value = false;

  try {
    await api.post("/contacts", {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    });

    success.value = true;
    form.value = { name: "", email: "", message: "" };

    setTimeout(() => {
      success.value = false;
    }, 5000);
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    errorMsg.value = "Gagal mengirim pesan. Silakan coba lagi.";
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <section id="contact" class="py-20 bg-[#0B1120] text-white">
    <div class="max-w-6xl mx-auto px-6 md:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

        <!-- LEFT -->
        <div>
          <h2 class="text-3xl font-bold mb-4">
            Mari <span class="text-blue-500">Bekerja Sama</span>
          </h2>
          <p class="text-gray-400">
            Punya ide proyek atau ingin berkolaborasi? Kirim pesan lewat form ini.
          </p>
        </div>

        <!-- FORM -->
        <div class="bg-white/5 p-8 rounded-2xl border border-white/10">
          <form @submit.prevent="submitForm" class="space-y-5">
            <div>
              <label class="block mb-2 text-sm">Nama</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label class="block mb-2 text-sm">Email</label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label class="block mb-2 text-sm">Pesan</label>
              <textarea
                v-model="form.message"
                rows="4"
                required
                class="w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isLoading"
              class="w-full bg-gradient-to-r from-blue-600 to-cyan-500 py-3 rounded-lg font-bold"
            >
              {{ isLoading ? "Mengirim..." : "Kirim Pesan" }}
            </button>

            <div
              v-if="success"
              class="text-green-400 text-sm text-center"
            >
              ✅ Pesan berhasil dikirim
            </div>

            <div
              v-if="errorMsg"
              class="text-red-400 text-sm text-center"
            >
              {{ errorMsg }}
            </div>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>
