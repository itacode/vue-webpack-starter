<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
};
</script>

<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <img src="img/top_img02.jpg">
    <h2>Essential Links</h2>
    <p>
      <router-link to="/foo">Go to foo</router-link>
      <router-link to="/bar">Go to bar</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<style>
.test_vue_css_prefixer {
  display: flex;
  transform: translateX(10);
}
</style>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 10px;
  }
}

a {
  color: #42b983;
}

.test_vue_scss_prefixer {
  display: flex;
  transform: translateX(10);
}
</style>
