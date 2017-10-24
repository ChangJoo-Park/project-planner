<template>
  <section>
    <img src="/img/logo.png" alt="Adonuxt logo"/>
    <h1 class="title">Universal Vue.js Applications Framework</h1>
    <nuxt-link :to="{ name: 'about' }">About</nuxt-link>
    <nuxt-link :to="{ name: 'projects' }">Projects</nuxt-link>
  </section>
</template>

<script>
  export default {
    layout: 'landing',
    name: 'page-index'
  }
</script>

<style scoped>
</style>
