<!-- src/views/ProjectDetailView.vue -->
<template>
  <div v-if="isLoading" class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <div
        class="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"
      ></div>
      <p class="text-gray-600 dark:text-gray-300">Loading...</p>
    </div>
  </div>

  <div v-else-if="project" class="pt-24 pb-16 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Back button -->
      <router-link
        to="/"
        class="inline-flex items-center text-primary hover:underline mb-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Projects
      </router-link>

      <!-- Project Header -->
      <h1 class="text-3xl md:text-4xl font-bold mb-4">{{ project.title }}</h1>

      <!-- Project Image -->
      <div class="rounded-xl overflow-hidden shadow-lg mb-8">
        <img
          :src="project.thumbnail_url || '/placeholder-project.jpg'"
          :alt="project.title"
          class="w-full h-auto"
        />
      </div>

      <!-- Project Links -->
      <div class="flex space-x-4 mb-8">
        <a
          v-if="project.project_url"
          :href="project.project_url"
          target="_blank"
          class="btn btn-primary"
        >
          View Live Project
        </a>
        <a
          v-if="project.github_url"
          :href="project.github_url"
          target="_blank"
          class="btn btn-secondary"
        >
          View on GitHub
        </a>
      </div>

      <!-- Project Description -->
      <div
        class="prose dark:prose-invert max-w-none"
        v-html="project.description"
      ></div>
    </div>
  </div>

  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h2 class="text-2xl font-bold mb-4">Project Not Found</h2>
      <router-link to="/" class="btn btn-primary"> Back to Home </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import portfolioService from '@/services/portfolio';

const route = useRoute();
const project = ref(null);
const isLoading = ref(true);

onMounted(async () => {
  try {
    const slug = route.params.slug;
    project.value = await portfolioService.getProjectBySlug(slug);
  } catch (error) {
    console.error('Error fetching project:', error);
  } finally {
    isLoading.value = false;
  }
});
</script>
