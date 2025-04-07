<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="container">
      <div class="wrapper">
    </div>
    </div>
  </header>
    <footer>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/skills" class="btn-second">Mon dossier de compétences</RouterLink>
    </footer>

  <RouterView />
</template>

<style scoped>
footer {
  display: block;
}
.container {
  max-width: 1100px;
    margin: 0 auto;
    padding: 2rem;
}
a {
  text-decoration: none;
  display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    background-color: var(--primary-color);
    color: var(--white);
    text-align: center;
    transition: background-color 0.3s ease;
}

a:hover {
  text-decoration: none;
  background-color: var(--button-hover)
}
.btn-second{
background-color: var(--secondary-color);
text-decoration:  none;
}

.btn-second:hover{
background-color: var(--button-hover);
text-decoration:  none;

}

</style>


