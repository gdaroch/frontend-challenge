<template lang="html">
  <div>
    <h1>Users</h1>
    <error-message :errors="errors"> </error-message>
    <ul>
      <li v-for="user in users">
        {{user.id}} {{user.first_name}} {{user.last_name}} {{user.email}}
      </li>
    </ul>
    <button v-on:click="page--" v-if="page > 1"> < </button>
    {{page}}
    <button v-on:click="page++" v-if="page < total_pages"> > </button>
  </div>
</template>

<script>
import auth from '../auth.js'

export default {
  name: 'user',
  data () {
    return {
      errors: [],
      users: [],
      page: 1,
      per_page: 5,
      total_pages: 1
    }
  },
  mounted () {
    this.getUsers()
  },
  watch: {
    page(){
      this.getUsers()
    }
  },
  methods: {
    getUsers () {
      let path = `users?page=${this.page}&per_page=${this.per_page}`
      auth.sendRequest().get(path).then((response) => {
        this.users = response.data.data
        this.total_pages = response.data.total_pages
      }).catch(() => {
        this.errors.push('Error getting user data')
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
