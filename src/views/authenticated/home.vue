<template>
  <v-container class="mx-auto">
    <div class="search rounded-pill">
      <input type="text" placeholder="Search a post" v-model="title">
      <v-btn class="button-search" icon @click="searchTitle">
        <v-icon>fas fa-search</v-icon>
      </v-btn>
    </div>

    <br>

    <div class="center">
      <!--<v-btn :to="{name: 'addPost', params: {userId: currentUser.id}}" icon color="black">-->
      <v-btn icon color="black">
        <v-icon>fas fa-plus-circle</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "home"
}
</script>

<style>
.center {
  width: 5%;
  margin: auto;
}

.search{
  margin: auto;
  width: 40%;
  border: 1px solid #000000;
}

.search input{
  outline: none;
  padding: 0 20px;
  width: 90%;
  color: #000000;
}

.button-search{
  height: 20px;
  width: auto;
}
</style>