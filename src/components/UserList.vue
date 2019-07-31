<template lang="html">
  <div>
    <h1>Users</h1>
    <error-message :errors="errors" />
    <button v-on:click="show_new_user = !show_new_user">Create User</button>
    <select v-model="per_page">
      <option v-for="size in per_page_options" :key="size">{{size}}</option>
    </select>
    <ul>
      <li v-for="user in users" :key="user">
        {{user.id}} | {{user.first_name}} {{user.last_name}} | {{user.email}}
      </li>
    </ul>
    <button v-on:click="page--" v-if="page > 1"> previous </button>
    {{page}}
    <button v-on:click="page++" v-if="page < total_pages"> next </button>
    <br>
    <div v-if="show_new_user">
      <new-user />
    </div>
  </div>
</template>

<script>
import auth from '../auth.js'

export default {
  name: 'user-list',
  data () {
    return {
      errors: [],
      users: [],
      page: 1,
      per_page: 5,
      per_page_options: [2, 5,  10],
      total_pages: 1,
      show_new_user: false
    }
  },
  mounted () {
    this.getUsers()
  },
  watch: {
    page(){
      this.getUsers()
    },
    per_page(){
      this.page = 1
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
