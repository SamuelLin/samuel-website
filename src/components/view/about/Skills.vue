<script setup>
import Skill from './Skill.vue'

const skills = [
  { name: 'html5', capability: 5 },
  { name: 'css3', capability: 5 },
  { name: 'scss', capability: 4 },
  { name: 'jquery', capability: 5 },
  { name: 'javascript', capability: 5 },
  { name: 'vue.js', capability: 5 },
  { name: 'nuxt.js', capability: 4 },
  { name: 'react.js', capability: 5 },
  { name: 'reactnative', capability: 4 },
  { name: 'webpack', capability: 3 },
  { name: 'vite', capability: 4 },
  { name: 'git', capability: 3 },
  { name: 'node.js', capability: 3 },
  { name: 'mongodb', capability: 2 },
  { name: 'testing', capability: 4 },
  { name: 'typescript', capability: 3 },
  { name: 'docker', capability: 0 },
  { name: 'python', capability: 0 },
]
</script>

<template>
  <section>
    <h3 class="sub-title fadeObject">
      Skills
    </h3>
    <Skill v-for="skill in skills" :key="skill.name" :skill="skill" />
  </section>
</template>
