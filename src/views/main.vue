<template>
  <v-app>
    <nav-bar></nav-bar>

    <v-main class="main">
      <v-container class="container" fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/nav-bar";
export default {
  name: "main",
  components: {NavBar},
  data() {
    return {
      currentUser: {}
    }
  },
  mounted() {
    this.retrieveCurrentUser();
  },

  //TODO: Methods
  methods: {
    retrieveCurrentUser(){
      /*
      UserService.getById(this.$route.params.userId)
          .then(response=>{
            console.log(response.data)
            this.currentUser=response.data;
          })
          .catch(e=>{
            console.log('Error: ' + e)
          })
      */
    }
  }
}
</script>

<style>

body {
  background-color: #F7F8F3;
}
.main {
  background-color: #F7F8F3;
  margin-top: 50px;
}
.container{
  width: 100%;
  margin: 0;
}
</style>