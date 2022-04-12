<template>
  <div class="container">
    <h2 class="title-page fadeObject">ABOUT</h2>
    <p class="fadeObject">
      Hi! I'm Samuel. I'm a web developer in Taipei, Taiwan.
      <br />A backpacker, after traveling through Australia and other country, came back to Taiwan and decided to move
      forward on web develope field.
      Like to create awesome pages. Working with HTML5, CSS3, JavaScript and improving on JavaScript frameworks and
      backend capability. Cheers!
      <br />Recently fell in love with cycling, welcome to ride with me! Watch my strava page
      <a href="https://www.strava.com/athletes/20900256" target="_blank">here</a>.
    </p>
    <Timeline />
    <Whatcando />
    <Skills />
    <Hobby />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import ScrollReveal from 'scrollreveal';
import Timeline from '@/components/view/about/Timeline.vue'
import Whatcando from '@/components/view/about/Whatcando.vue'
import Skills from '@/components/view/about/Skills.vue'
import Hobby from '@/components/view/about/Hobby.vue'

onMounted(() => {
  ScrollReveal.debug = true;
  ScrollReveal({
    delay: 200,
    scale: 0.9,
    cleanup: true,
    afterReveal: (domEl) => {
      if (domEl.querySelector('.skill-circles') !== null) {
        domEl.classList.add('flipAction')
      }
    }
  }).reveal('.fadeObject')
})
</script>