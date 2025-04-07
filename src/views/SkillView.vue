<template>
  <main>
    <the-skills-page/>
  </main>
</template>
<script lang="ts" setup>
import TheSkillsPage from '@/components/pages/TheSkillsPage.vue';
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
