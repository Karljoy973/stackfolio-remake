<template >
        <div class="experience-header">
            <div class="company-name">{{ companyName }}</div>
            <div class="job-title">{{ jobTitle }}</div>
        </div>
        <div class="date-range">{{ dateRange }}</div>
</template>
<script setup lang="ts">
interface Props {
    dateRange: string, 
    companyName: string,
    jobTitle: string
}
const props = defineProps<Props>()
</script>
<style lang="css">
    .experience-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
    }
    .date-range {
        color: var(--secondary-color); 
        font-size: 0.9rem;
    }

</style>