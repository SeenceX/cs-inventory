<template>
    <navbar-menu></navbar-menu>
    <router-view></router-view>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue' -- import example

import NavbarMenu from "@/components/NavbarMenu.vue";

export default {
  name: "App",
  components: {
      NavbarMenu
  },
};
</script>

<style>
@import "assets/css/style.css";
</style>
