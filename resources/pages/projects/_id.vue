<template>
  <div>
    <h1>EEE</h1>
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  }
}
</script>

<style>

</style>
