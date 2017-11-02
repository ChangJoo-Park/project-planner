<template>
  <div class="uk-container uk-container-center uk-margin-large-bottom">
    <nav class="uk-navbar-container uk-margin" uk-navbar>
      <div class="uk-navbar-left">
        <a class="uk-navbar-item uk-logo" href="#">Project</a>
        <ul class="uk-navbar-nav">
          <nuxt-link :to="{ name: 'projects' }" tag='li'><a href="#">Dashboard</a></nuxt-link>
          <nuxt-link :to="{ name: 'profile' }" tag='li'><a href="#">Profile</a></nuxt-link>
          <li>
            <a href="#" @click="logout">
              Logout
            </a>
          </li>
        </ul>

        <div class="uk-navbar-item">
          <form action="javascript:void(0)">
            <input class="uk-input uk-form-width-small" type="text" placeholder="Input">
            <button class="uk-button uk-button-default">Button</button>
          </form>
        </div>
      </div>
    </nav>
    <div uk-grid uk-grid-margin>
      <div class="uk-width-1-1">
        <div class="uk-container">
          <nuxt/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const MyFooter = () => import('~/components/MyFooter')

  export default {
    name: 'layout-default',
    middleware: 'auth',
    components: {
      MyFooter
    },
    methods: {
      logout: async function () {
        const isConfirm = window.confirm('Are you sure?')
        if (isConfirm) {
          const logout = await this.$store.dispatch('logout')
          this.$router.push({ name: 'index' })
        }
      }
    }
  }
</script>

<style>
</style>
