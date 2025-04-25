<!-- src/components/Skills.vue -->
<template>
  <section id="skills" class="section bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto">
      <h2 class="section-title">My <span>Skills</span></h2>

      <!-- Group skills by category -->
      <div
        v-for="(skillsGroup, category) in groupedSkills"
        :key="category"
        class="mb-12"
      >
        <h3 class="text-2xl font-bold mb-6 text-center">
          {{ formatCategory(category) }}
        </h3>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <div
            v-for="skill in skillsGroup"
            :key="skill.id"
            class="card hover:border-primary hover:border-2 flex flex-col items-center"
          >
            <div v-if="skill.icon_url" class="w-16 h-16 mb-4">
              <img
                :src="skill.icon_url"
                :alt="skill.name"
                class="w-full h-full object-contain"
              />
            </div>
            <div
              v-else
              class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4"
            >
              <span class="text-primary text-xl font-bold">{{
                skill.name.charAt(0)
              }}</span>
            </div>

            <h4 class="text-lg font-bold mb-2">{{ skill.name }}</h4>

            <div
              class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-2"
            >
              <div
                class="h-full bg-primary rounded-full"
                :style="{ width: `${skill.proficiency}%` }"
              ></div>
            </div>
            <span class="text-sm text-gray-500 dark:text-gray-400 mt-1"
              >{{ skill.proficiency }}%</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  skills: {
    type: Array,
    default: () => [],
  },
});

// Group skills by category
const groupedSkills = computed(() => {
  const grouped = {};

  props.skills.forEach((skill) => {
    const category = skill.category || 'Other';
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(skill);
  });

  return grouped;
});

// Format category name
function formatCategory(category) {
  return category.charAt(0).toUpperCase() + category.slice(1);
}
</script>
