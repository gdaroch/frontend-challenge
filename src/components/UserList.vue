<template lang="html">
  <div class="container-fluid">
    <div class="container-header">
      <h1>Users</h1>
      <!-- <button v-on:click="show_new_user = !show_new_user">Create User</button> -->
      <b-button v-b-modal.modal-1>Create User</b-button>
    </div>

    <div class="container-sub-header">
      <error-message :errors="errors" />
      <label> Show
        <select v-model="per_page">
          <option v-for="size in per_page_options" :key="size">{{size}}</option>
        </select>
      </label>
    </div>

    <table class="table table-striped my-table">
      <thead>
        <tr class="d-flex">
          <th class="col-1">ID</th>
          <th class="col-10">Users</th>
          <th class="col-1">Options</th>
        </tr>
      </thead>
      <tbody>
        <tr class="d-flex" v-for="user in users" :key="user">
          <td class="col-1">{{user.id}}</td>
          <td class="col-10">
            <p>{{user.first_name}} {{user.last_name}}</p>
            <p><em> {{user.email}} </em></p>
          </td>
          <td class="col-1">Editar</td>
        </tr>
      </tbody>
    </table>

    <div class="btm-btn-container">
      <button v-on:click="page--" v-if="page > 1"> Previous </button>
      <div class="curr-page"> {{page}} </div>
      <button v-on:click="page++" v-if="page < total_pages"> Next </button>
    </div>

    <b-modal id="modal-1" title="BootstrapVue">
      <new-user />
    </b-modal>

    <!-- <br> -->
    <!-- <div v-if="show_new_user">
      <new-user />
    </div> -->

    <br>
    <!-- <b-table striped hover :items="users"></b-table> -->

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
  .container-header{
    height: 50px;
  }
  .container-header h1{
    float: left;
    margin-left: 5%
  }
  .container-header button{
    float: right;
    margin-right: 5%;
  }
  .container-sub-header{
    text-align: left;
    width: 90%;
    margin: auto;
  }
  .my-table{
    table-layout: fixed;
    width: 90%;
    margin: auto;
    text-align: left;
  }
  .btm-btn-container{
    text-align: right;
    padding: 10px 5%;
  }
  .btm-btn-container button{
    padding: 10px 15px;
    color: lightgreen;
    box-shadow: none;
    background-color: white;
    border: 1px solid lightgrey;
    border-radius: 5px;
  }
  .btm-btn-container .curr-page{
    padding: 10px 15px;
    width: auto;
    display: inline-block;
    background-color: lightgreen;
    color: white;
    margin: 0 10px;
    border-radius: 5px;
  }
</style>
