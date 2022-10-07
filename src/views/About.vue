<script setup>
import { onMounted } from 'vue'
import ScrollReveal from 'scrollreveal'
import Timeline from '@/components/view/about/Timeline.vue'
import Whatcando from '@/components/view/about/Whatcando.vue'
import Skills from '@/components/view/about/Skills.vue'
import Hobby from '@/components/view/about/Hobby.vue'

onMounted(() => {
  ScrollReveal.debug = true
  ScrollReveal({
    delay: 200,
    cleanup: true,
    afterReveal: (domEl) => {
      if (domEl.querySelector('.skill-circles') !== null)
        domEl.classList.add('flip-action')
    },
  }).reveal('.fadeObject')
})
</script>

<template>
  <div class="container">
    <h2 class="title-page">
      ABOUT
    </h2>
    <p>
      Hi! I'm Samuel. I'm a web / react-native developer in Taipei, Taiwan.
      <br>I have been working holiday in Australia for two years in the past. I like to explore new knowledge and new experiences, and I like the sense of accomplishment that good products on the front end of the web bring users a good experience.
      Will self-require code quality and readability, modular functions, focus, efficiency and not being afraid of challenges are my advantages. I have good cross-team cooperation and communication skills, usually like to pay attention to the development of front-end related technologies, and communicate with colleagues. The team experience of working together and sharing.
      <br>
      <a href="https://www.cakeresume.com/s--sotqq-9SHHALtBmpEL-yCA--/lin-ming-ying" target="_blank">resume</a>
    </p>
    <Timeline />
    <Whatcando />
    <Skills />
    <Hobby />
  </div>
</template>
