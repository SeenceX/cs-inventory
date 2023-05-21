<template>
  <header>
      <nav>
          <div class="nav-container">
              <div class="nav-items">
                  <a href="#" class="brand">CS<i>Inventory</i></a>
                  <ul class="nav-ul">
                      <li class="nav-li"><router-link :to="{path: '/'}" class="nav-link" :class="{ 'active': $route.path === '/' }">Главная</router-link></li>
                      <li class="nav-li"><router-link :to="{path: '/inventory'}" class="nav-link" :class="{ 'active': $route.path === '/inventory' }">Инвентарь</router-link></li>
                      <li class="nav-li"><router-link to="#" class="nav-link">Библиотека</router-link></li>
                  </ul>
              </div>
              <div class="nav-controllers">
                  <select name="" id="" class="currency">
                      <optgroup label="Валюта">
                          <option value="rub">₽ Руб.</option>
                          <option value="usd">$ USD</option>
                      </optgroup>
                  </select>
                  <router-link class="login nav-link" to="/login">Войти</router-link>
              </div>
          </div>

      </nav>
  </header>
</template>

<script>
export default {
    name: "NavbarMenu"
}
</script>

<style scoped>
    @import "../assets/css/header.css";
</style>
