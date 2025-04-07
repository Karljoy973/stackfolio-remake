<template >
    <div class="skills-list">
        <skill-item v-for="(skill, index) in props.skills" :name="skill.name" :key="index" :skill_type="skill.skill_type"></skill-item>
    </div>
</template>
<script setup lang="ts">
import SkillItem from '../atoms/SkillItem.vue';
interface Props {
    skills: NonNullable<{
        name: string, 
        skill_type: 'tech'|'soft'
    }[]>
}
const props: Props = defineProps<Props>();
</script>
<style lang="css" scoped>
      .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
  
</style>