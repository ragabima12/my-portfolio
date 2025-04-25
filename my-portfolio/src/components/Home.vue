<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Background particles -->
    <div class="absolute inset-0 z-0">
      <div
        v-for="(particle, index) in particles"
        :key="index"
        class="absolute rounded-full animate-float"
        :style="{
          width: `${particle.size}px`,
          height: `${particle.size}px`,
          left: `${particle.x}%`,
          top: `${particle.y}%`,
          opacity: particle.opacity,
          backgroundColor: particle.color,
          animationDelay: `${particle.delay}s`,
          animationDuration: `${particle.duration}s`,
        }"
      ></div>
    </div>

    <!-- Content -->
    <div
      class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-16"
    >
      <!-- Text Content -->
      <div class="w-full md:w-1/2 text-center md:text-left">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span class="block">{{ heroData?.title || "Hi, I'm" }}</span>
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          >
            {{ heroData?.subtitle || 'Your Name' }}
          </span>
        </h1>

        <div
          class="text-xl sm:text-2xl font-light mb-8 flex items-center justify-center md:justify-start"
        >
          <span>I'm a</span>
          <div class="ml-2 font-medium text-primary">
            <span class="typing-text">{{ displayedText }}</span>
            <span class="typing-cursor">|</span>
          </div>
        </div>

        <p class="text-gray-600 dark:text-gray-300 mb-10 text-lg">
          {{
            heroData?.description ||
            'Ready to bring your ideas to life with beautiful designs and cutting-edge technology.'
          }}
        </p>

        <div class="flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="#contact" class="btn btn-primary">Let's Talk</a>
          <a href="#projects" class="btn btn-secondary">View Portfolio</a>
        </div>
      </div>

      <!-- Hero Image -->
      <div class="w-full md:w-1/2 flex justify-center">
        <div
          class="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary p-1"
        >
          <img
            :src="heroImage"
            alt="Profile"
            class="w-full h-full object-cover rounded-full"
          />
          <!-- Decorative rings -->
          <div
            class="absolute -inset-4 border border-primary rounded-full opacity-20 animate-spin-slow"
          ></div>
          <div
            class="absolute -inset-8 border border-secondary rounded-full opacity-10 animate-spin-slow"
            style="animation-direction: reverse"
          ></div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <svg
        class="w-6 h-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  heroData: {
    type: Object,
    default: () => null,
  },
});

const displayedText = ref('');
const currentTextIndex = ref(0);
const charIndex = ref(0);
const isDeleting = ref(false);
const particles = ref([]);

const typingTexts = computed(() => {
  const textsFromProps =
    props.heroData?.typingTexts?.map((item) => item.text) || [];
  return textsFromProps.length > 0
    ? textsFromProps
    : [
        'Web Developer',
        'UI/UX Designer',
        'Frontend Engineer',
        'Creative Thinker',
      ];
});

const heroImage = computed(() => {
  return props.heroData?.image_url || '/placeholder-profile.jpg';
});

function startTyping() {
  console.log('Starting typing animation');
  console.log('Current text index:', currentTextIndex.value);
  console.log('Available texts:', typingTexts.value);
  // Pastikan ada teks yang tersedia
  if (!typingTexts.value || typingTexts.value.length === 0) {
    displayedText.value = 'Web Developer'; // Nilai default
    return;
  }

  const currentText = typingTexts.value[currentTextIndex.value];
  console.log('Current text to type:', currentText);

  if (!currentText) {
    // Reset ke index 0 jika currentText undefined
    currentTextIndex.value = 0;
    setTimeout(startTyping, 500);
    return;
  }

  const speed = isDeleting.value ? 50 : 100;

  if (!isDeleting.value && charIndex.value < currentText.length) {
    // Typing
    displayedText.value = currentText.substring(0, charIndex.value + 1);
    charIndex.value++;
    setTimeout(startTyping, speed);
  } else if (!isDeleting.value && charIndex.value === currentText.length) {
    // Completed typing, wait then delete
    isDeleting.value = true;
    setTimeout(startTyping, 2000);
  } else if (isDeleting.value && charIndex.value > 0) {
    // Deleting
    displayedText.value = currentText.substring(0, charIndex.value - 1);
    charIndex.value--;
    setTimeout(startTyping, speed);
  } else if (isDeleting.value && charIndex.value === 0) {
    // Completed deleting, move to next text
    isDeleting.value = false;
    currentTextIndex.value =
      (currentTextIndex.value + 1) % typingTexts.value.length;
    setTimeout(startTyping, 500);
  }
}

function generateParticles() {
  const colors = ['#3a86ff', '#ff006e', '#fb5607', '#8338ec', '#06d6a0'];
  const count = 20;

  for (let i = 0; i < count; i++) {
    particles.value.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 2,
      opacity: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 5,
    });
  }
}

onMounted(() => {
  startTyping();
  generateParticles();
});
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.typing-cursor {
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
