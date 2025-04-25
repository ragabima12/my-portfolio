<template>
  <div class="home">
    <div v-if="isLoading" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div
          class="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"
        ></div>
        <p class="text-gray-600 dark:text-gray-300">Loading...</p>
      </div>
    </div>

    <template v-else>
      <Hero :hero-data="heroData" />
      <About :about-data="aboutData" :social-links="socialLinks" />
      <Skills :skills="skills" />
      <Experience :experiences="experiences" />
      <Projects :projects="projects" />
      <Contact />
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Hero from '@/components/Home.vue';
import About from '@/components/About.vue';
import Skills from '@/components/Skills.vue';
import Experience from '@/components/Experience.vue';
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';
import portfolioService from '@/services/portfolio';

const heroData = ref(null);
const aboutData = ref(null);
const skills = ref([]);
const experiences = ref([]);
const projects = ref([]);
const socialLinks = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  try {
    // Fetch all data in parallel
    const [hero, about, skillsData, experiencesData, projectsData, links] =
      await Promise.all([
        portfolioService.getHero(),
        portfolioService.getAbout(),
        portfolioService.getSkills(),
        portfolioService.getExperiences(),
        portfolioService.getProjects(),
        portfolioService.getSocialLinks(),
      ]);

    heroData.value = hero;
    aboutData.value = about;
    skills.value = skillsData;
    experiences.value = experiencesData;
    projects.value = projectsData;
    socialLinks.value = links;
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    isLoading.value = false;
  }
});
</script>
