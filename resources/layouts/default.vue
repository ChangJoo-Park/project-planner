<template>
  <div class="uk-container">
    <nuxt/>
  </div>
</template>

<script>
  const MyFooter = () => import('~/components/MyFooter')

  export default {
    name: 'layout-default',
    middleware: 'auth',
    components: {
      MyFooter
    }
  }
</script>

<style>
</style>
