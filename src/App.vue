<template>
  <div id="app">
    <v-app>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Fjalla One', sans-serif;
  scroll-behavior: smooth;
  font-size: 15px;
}
body {
  background-color: #F7F8F3;
}

</style>
