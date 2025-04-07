<template>
    <span :class="['skill-tag', skillType]">
        <p>{{ props.name }}</p>
    </span>
</template>
<script setup lang="ts">
import { themeStore } from '@/stores/themes';
import { computed } from 'vue';
//je veux un props qui va me dire si j'ai un tech item ou un soft item 
const store = themeStore(); 
interface Props {
    skill_type: 'tech' | 'soft',
    name: string
}
const props = withDefaults(defineProps<Props>(), {
    skill_type: 'tech',
    name: String,
})

const skillType = computed(() =>`${props.skill_type}-skill`)

</script>
<style lang="css" scoped>
.skill-tag {
    padding: 0.3rem 0.6rem; 
    border-radius: 4px;
    font-size: 0.9rem;
}
.tech-skill {
    background-color: rgba(37, 99, 235, 0.1); 
    color : var(--primary-color)

}
.soft-skill {
    background-color: rgba(16, 185, 129, 0.1);
    color: #059669
}
    
</style>