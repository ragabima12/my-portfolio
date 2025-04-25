<!-- src/components/Footer.vue -->
<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Your Portfolio</h3>
          <p class="text-gray-400">
            Building beautiful and functional web experiences with modern
            technologies.
          </p>
        </div>

        <div>
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#home"
                class="text-gray-400 hover:text-primary transition-colors"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#about"
                class="text-gray-400 hover:text-primary transition-colors"
                >About</a
              >
            </li>
            <li>
              <a
                href="#skills"
                class="text-gray-400 hover:text-primary transition-colors"
                >Skills</a
              >
            </li>
            <li>
              <a
                href="#projects"
                class="text-gray-400 hover:text-primary transition-colors"
                >Projects</a
              >
            </li>
            <li>
              <a
                href="#contact"
                class="text-gray-400 hover:text-primary transition-colors"
                >Contact</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-bold mb-4">Connect With Me</h3>
          <div class="flex space-x-4 mb-4">
            <a
              v-for="(link, index) in socialLinks"
              :key="index"
              :href="link.url"
              target="_blank"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-all duration-300"
            >
              <i :class="link.icon"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>
          &copy; {{ new Date().getFullYear() }} Your Portfolio. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  socialLinks: {
    type: Array,
    default: () => [],
  },
});
</script>
