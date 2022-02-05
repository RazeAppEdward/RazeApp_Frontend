<template>
  <nav class="nav-bar">
    <img src="../assets/logo.png" alt="RazeApp Logo">
    <div class="nav-links">
      <ul>
        <li>
          <v-btn icon class="white--text transparent btn" :to="{name:'home',params:{userId:1}}">
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </li>
        <li class="v-size--small">
          <!--<v-btn icon :to="{name:'profile', params:{userId:currentUser.id}}">-->
          <v-btn icon>
            <img class="profile" src="../assets/temporal_profile_image.png" alt="User profile">
            <!--<img class="profile" v-bind:src="currentUser.imgProfile" width="10px" alt="User profile">-->
          </v-btn>
        </li>
        <li>
          <v-btn icon class="white--text transparent" @click="logOut">
            <v-icon>fas fa-sign-out-alt</v-icon>
          </v-btn>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "nav-bar",
  methods: {
    logOut(){
      /*
      AuthService.logout()
      router.push('/');
      */
    }
  }
}
</script>

<style>
.nav-bar{
  position: fixed;
  width: 100%;
  z-index: 100;
  box-shadow:  0 10px 10px  rgba(0, 0, 0, 0.2);
}
nav{
  max-height: 9vh;
  display: flex;
  padding: 0 2%;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: #F7444E;
}
nav img{
  width: 120px;
  margin: 2% 1% 1%;
}

.nav-links{
  flex: 1;
  text-align: right;
}

.nav-links ul li{
  list-style: none;
  display: inline-block;
  padding: 8px 12px;
  position: relative;
}
.nav-links ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 13px;
}
.nav-links ul li::after {
  content: '';
  width: 0;
  height: 2px;
  background: #78BCC4;
  display: block;
  margin: auto;
  transition: 0.5s;
}
.nav-links ul li:hover::after{
  width: 100%;
}
.profile{
  height: 7%;
  width: 7%;
  border-radius: 100%;
  object-fit: cover;
  object-position: center;
}

.btn{
  z-index: 100;
}
</style>