<template>
  <section id="experience" class="section">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-10">Work Experience</h2>

      <div class="space-y-6">
        <div v-for="(exp, index) in experiences" :key="index" class="card">
          <h3 class="text-xl font-bold">{{ exp.position }}</h3>
          <p class="text-lg">{{ exp.company }}</p>
          <p>
            {{ formatDate(exp.start_date) }} -
            {{ exp.current ? 'Present' : formatDate(exp.end_date) }}
          </p>
          <p>{{ exp.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  experiences: {
    type: Array,
    default: () => [],
  },
});

function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString();
}
</script>
