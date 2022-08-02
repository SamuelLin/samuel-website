<script setup>
import { useToggle } from '@vueuse/core'
import { isDark } from '@/utils'

const toggleDark = useToggle(isDark)
</script>

<template>
  <div style="cursor: pointer;" @click="toggleDark()">
    <i-carbon-moon v-if="isDark" width="19" height="19" />
    <i-carbon-sun v-else width="19" height="19" />
  </div>
</template>
