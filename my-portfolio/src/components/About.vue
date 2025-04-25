<!-- src/components/About.vue -->
<template>
  <section id="about" class="section bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto">
      <h2 class="section-title">About <span>Me</span></h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div class="relative">
          <div
            class="aspect-square rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500"
          >
            <img
              :src="aboutData?.avatar_url || '/placeholder-profile.jpg'"
              alt="Profile Picture"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Decoration elements -->
          <div
            class="absolute -top-6 -left-6 w-24 h-24 rounded-lg bg-primary opacity-10 -z-10"
          ></div>
          <div
            class="absolute -bottom-6 -right-6 w-24 h-24 rounded-lg bg-secondary opacity-10 -z-10"
          ></div>

          <!-- Social media links -->
          <div
            class="absolute -right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4"
          >
            <a
              v-for="(link, index) in socialLinks"
              :key="index"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              <i :class="link.icon"></i>
            </a>
          </div>
        </div>

        <!-- Content -->
        <div class="flex flex-col">
          <h3 class="text-2xl font-bold mb-4">
            {{ aboutData?.full_name || 'Your Name' }}
          </h3>
          <p class="text-xl text-primary font-medium mb-6">
            {{ aboutData?.title || 'Web Developer' }}
          </p>

          <div
            class="prose dark:prose-invert mb-8"
            v-html="aboutData?.bio || 'Add your bio here...'"
          ></div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div class="flex items-center">
              <div
                class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3"
              >
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </div>
              <div>
                <p class="text-gray-500 dark:text-gray-400 text-sm">Email</p>
                <p class="font-medium">
                  {{ aboutData?.email || 'your.email@example.com' }}
                </p>
              </div>
            </div>
          </div>

          <a
            v-if="aboutData?.resume_url"
            :href="aboutData.resume_url"
            target="_blank"
            class="btn btn-primary self-start"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  aboutData: {
    type: Object,
    default: () => null,
  },
  socialLinks: {
    type: Array,
    default: () => [],
  },
});
</script>
