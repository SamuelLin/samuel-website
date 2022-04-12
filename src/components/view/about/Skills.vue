<template>
  <section>
    <h3 class="sub-title fadeObject">Skills</h3>
    <Skill v-for="skill in skills" :skill="skill" :key="skill.name"></Skill>
  </section>
</template>

<script setup>
import Skill from './Skill.vue'

const skills = [
  { name: 'html5', capability: 5 },
  { name: 'css3', capability: 5 },
  { name: 'scss', capability: 4 },
  { name: 'jquery', capability: 5 },
  { name: 'javascript', capability: 5 },
  { name: 'vue.js', capability: 5 },
  { name: 'react.js', capability: 5 },
  { name: 'webpack', capability: 3 },
  { name: 'git', capability: 3 },
  { name: 'node.js', capability: 3 },
  { name: 'mongodb', capability: 2 },
  { name: 'testing', capability: 4 },
  { name: 'reactnative', capability: 4 }
]
</script>