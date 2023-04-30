<template>
  <header>
      <nav>
          <div class="nav-container">
              <div class="nav-items">
                  <a href="#" class="brand">CS<i>Inventory</i></a>
                  <ul class="nav-ul">
                      <li class="nav-li"><a href="#" class="nav-link active">Главная</a></li>
                      <li class="nav-li"><a href="#" class="nav-link">Инвентарь</a></li>
                      <li class="nav-li"><a href="#" class="nav-link">Библиотека</a></li>
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
