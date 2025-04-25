<!-- src/components/Contact.vue -->
<template>
  <section id="contact" class="section bg-white dark:bg-gray-800">
    <div class="max-w-7xl mx-auto">
      <h2 class="section-title">Contact <span>Me</span></h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div>
          <h3 class="text-2xl font-bold mb-6">Get In Touch</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>

          <div class="space-y-4">
            <div class="flex items-start">
              <div
                class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4 mt-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-1">Email</h4>
                <p class="text-gray-600 dark:text-gray-300">
                  {{ aboutData?.email || 'your.email@example.com' }}
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <div
                class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4 mt-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-1">Location</h4>
                <p class="text-gray-600 dark:text-gray-300">Indonesia</p>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <h4 class="text-lg font-semibold mb-3">Connect With Me</h4>
            <div class="flex space-x-4">
              <a
                v-for="(link, index) in socialLinks"
                :key="index"
                :href="link.url"
                target="_blank"
                class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white transition-all duration-300"
              >
                <i :class="link.icon"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label
                for="name"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >Name</label
              >
              <input
                v-model="form.name"
                type="text"
                id="name"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >Email</label
              >
              <input
                v-model="form.email"
                type="email"
                id="email"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                for="subject"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >Subject</label
              >
              <input
                v-model="form.subject"
                type="text"
                id="subject"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >Message</label
              >
              <textarea
                v-model="form.message"
                id="message"
                rows="4"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="btn btn-primary w-full py-3"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting">Sending...</span>
              <span v-else>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  aboutData: {
    type: Object,
    default: () => null,
  },
  socialLinks: {
    type: Array,
    default: () => [],
  },
});

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const isSubmitting = ref(false);

function handleSubmit() {
  isSubmitting.value = true;

  // Simulasi pengiriman form (ganti dengan integrasi email service sungguhan)
  setTimeout(() => {
    alert(
      'Thanks for your message! This is a placeholder. Implement real email service in production.'
    );
    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
    isSubmitting.value = false;
  }, 1500);
}
</script>
