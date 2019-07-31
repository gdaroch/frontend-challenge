<template lang="html">
  <div v-if="this.errors">
    <ul>
      <li v-for="error in errors">{{error}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'error-message',
    props: ['errors']
  }
</script>
