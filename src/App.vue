<template>
  <div id="app">
    <div id="nav" v-if="$route.fullPath !== '/login' && $route.fullPath !== '/register'">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about"> About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
   @import 'assets/scss/main.scss';
</style>