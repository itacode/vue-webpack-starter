<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <img class="inline" src="images/top_img02.jpg" />
    <nav>
      <h2>Navigation menu</h2>
      <ul class="main_nav_list">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/foo">Foo</router-link></li>
        <li><router-link to="/bar">Bar</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
});
</script>

<style>
/* Test Vue.js CSS Autoprefixer */
::placeholder {
  color: gray;
}
.test_vue_css_prefixer {
  display: flex;
  transform: translateX(10);
}
</style>

<style lang="scss">
/* Test Vue.js SCSS Autoprefixer */
::placeholder {
  color: gray;
}
.test_vue_scss_prefixer {
  display: flex;
  transform: translateX(10);
}

.app {
  text-align: center;
  margin-top: 60px;
}
.main_nav_list {
  margin-bottom: 20px;
  > li {
    display: inline-block;
    &:nth-child(n + 2) {
      margin-left: 10px;
    }
  }
}
.main_nav_active {
  font-weight: bold;
  text-decoration: none;
}
</style>
