<template >
    <page-section>
        <h2>Compétences Techniques</h2>
        <skill-list :skills="techSkills"/>
    </page-section>
    <page-section>
        <h2>Compétences Humaines</h2>
        <skill-list :skills="softSkills"/>
    </page-section>
    <page-section>
        <h2> Expériences Professionnelles</h2>
        
    </page-section>
</template>
<script setup lang="ts">
import SkillList from '../molecules/SkillList.vue';
import PageSection from '../molecules/PageSection.vue';

const techSkills: {name: string, skill_type: 'tech'|'soft'}[] = [
    { "name": "JavaScript / TypeScript", "skill_type": "tech" },
    { "name": "React", "skill_type": "tech" },
    { "name": "VueJs", "skill_type": "tech" },
    { "name": "Node.js", "skill_type": "tech" },
    { "name": "Express", "skill_type": "tech" },
    { "name": "HTML5", "skill_type": "tech" },
    { "name": "CSS3", "skill_type": "tech" },
    { "name": "MongoDB", "skill_type": "tech" },
    { "name": "SQL", "skill_type": "tech" },
    { "name": "Git", "skill_type": "tech" },
    { "name": "Tests E2E (Playwright / Selenium)", "skill_type": "tech" },
    { "name": "Tests unitaires (jest)", "skill_type": "tech" },
    { "name": "RESTful API", "skill_type": "tech" },
    { "name": "Responsive Design", "skill_type": "tech" }
]
const softSkills: {name: string, skill_type: "tech"|"soft"}[] = [
    { "name": "Travail d'équipe", "skill_type": "soft" },
    { "name": "Communication", "skill_type": "soft" },
    { "name": "Résolution de problèmes", "skill_type": "soft" },
    { "name": "Autonomie", "skill_type": "soft" },
    { "name": "Adaptabilité", "skill_type": "soft" },
    { "name": "Agilité (Scrum)", "skill_type": "soft" },
    { "name": "Veille technologique", "skill_type": "soft" }
]

</script>
<style lang="css" scoped>
    
</style>