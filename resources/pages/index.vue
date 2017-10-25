<template>
  <section>
    <img src="/img/logo.png" alt="Adonuxt logo"/>
    <h1 class="title">Universal Vue.js Applications Framework</h1>
    <nuxt-link :to="{ name: 'about' }">About</nuxt-link>
    <div v-if="currentUser">
      <nuxt-link :to="{ name: 'projects' }">{{currentUser.username}}</nuxt-link>
    </div>
    <div v-else>
      <div><nuxt-link :to="{ name: 'login' }">Sign in</nuxt-link></div>
      <div><nuxt-link :to="{ name: 'join' }">Sin up</nuxt-link></div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    layout: 'landing',
    name: 'page-index',
    computed: {
      ...mapGetters(['currentUser'])
    }
  }
</script>

<style scoped>
</style>
