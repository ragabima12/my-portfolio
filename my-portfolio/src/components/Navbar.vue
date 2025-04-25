<template>
  <nav
    class="fixed w-full z-50 transition-all duration-300"
    :class="[
      scrolled
        ? 'bg-white/90 dark:bg-dark/90 backdrop-blur-md shadow-lg py-3'
        : 'bg-transparent py-6',
    ]"
  >
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center"
    >
      <!-- Logo -->
      <div class="flex items-center">
        <a href="#" class="text-2xl font-bold text-primary">Portfolio</a>
      </div>

      <!-- Mobile menu button -->
      <div class="flex md:hidden">
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="text-dark dark:text-light p-2 rounded-md focus:outline-none"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Desktop menu -->
      <div class="hidden md:flex space-x-8">
        <a
          v-for="(link, index) in navLinks"
          :key="index"
          :href="link.url"
          class="text-dark dark:text-light font-medium hover:text-primary dark:hover:text-primary transition-all duration-300 relative group"
        >
          {{ link.text }}
          <span
            class="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
          ></span>
        </a>
      </div>

      <!-- Dark mode toggle -->
      <button
        @click="toggleDarkMode"
        class="hidden md:block ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <svg
          v-if="isDarkMode"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      v-show="isMobileMenuOpen"
      class="md:hidden bg-white dark:bg-gray-800 shadow-xl rounded-b-xl mt-2 overflow-hidden transition-all duration-300"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          v-for="(link, index) in navLinks"
          :key="index"
          :href="link.url"
          class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary dark:hover:text-primary transition-colors"
          @click="isMobileMenuOpen = false"
        >
          {{ link.text }}
        </a>
        <button
          @click="toggleDarkMode"
          class="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary dark:hover:text-primary transition-colors flex items-center"
        >
          <span v-if="isDarkMode">Light Mode</span>
          <span v-else>Dark Mode</span>
          <svg
            v-if="isDarkMode"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrolled = ref(false);
const isMobileMenuOpen = ref(false);
const isDarkMode = ref(false);

const navLinks = [
  { text: 'Home', url: '#home' },
  { text: 'About', url: '#about' },
  { text: 'Skills', url: '#skills' },
  { text: 'Projects', url: '#projects' },
  { text: 'Contact', url: '#contact' },
];

function handleScroll() {
  scrolled.value = window.scrollY > 50;
}

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  applyTheme();
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
}

function applyTheme() {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function checkSavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  isDarkMode.value =
    savedTheme === 'dark' ||
    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  applyTheme();
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  checkSavedTheme();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
