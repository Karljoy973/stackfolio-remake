<template>
    <div class="experience-item">
        <experience-header :company-name :date-range :job-title />
    </div>
    <ul>
        <li v-for="(item, key) in missions" :key="key">{{ item }}</li>
    </ul>
</template>
<script setup lang="ts">
import ExperienceHeader from '../atoms/ExperienceHeader.vue'
interface Props {
    dateRange: string, 
    companyName: string,
    jobTitle: string, 
    missions:string[]
}
const props = defineProps < Props > (); 
</script>
<style lang="css">
    .experience-item {
        margin-bottom: 1.25rem; 
    }

    ul {
        display: block;
        list-style-type: disc;
        margin-block-start: 1rem;
        margin-block-end: 1rem;
        padding-inline-start: 40px;
        unicode-bidi: isolate;
    }

    li {
        display: list-item;
        text-align: match-parent;
        unicode-bidi: isolate;
    }
</style>