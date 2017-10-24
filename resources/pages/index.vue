<template>
  <section>
    <img src="/img/logo.png" alt="Adonuxt logo"/>
    <h1 class="title">Universal Vue.js Applications Framework</h1>
    <nuxt-link :to="{ name: 'about' }">About</nuxt-link>
    <nuxt-link :to="{ name: 'projects' }">Projects</nuxt-link>
    <div>
      <div><nuxt-link :to="{ name: 'login' }">Sign in</nuxt-link></div>
      <div><nuxt-link :to="{ name: 'join' }">Sin up</nuxt-link></div>
    </div>
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
