<template lang="">
    <div :class=["theme-dot", currentTheme ]>
        <div class="dot-left">
    </div>
    <div class="dot-right">
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
    theme: 'solar'|'geek'|'dark'
}
const props = withDefaults(defineProps<Props>(), {
    theme: 'solar'
});

let currentTheme = computed(() =>props.theme)
//set state 
</script>
<style lang="css" scoped>
    
</style>