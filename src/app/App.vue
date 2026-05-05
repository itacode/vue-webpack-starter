<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <img class="mx-auto" src="images/top_img02.jpg" />
    <nav class="mt-4">
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

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useContentStore } from '@/app/stores/index';

const msg = ref('Welcome to Your Vue.js App');
const contentStore = useContentStore();
onMounted(() => contentStore.fetchContents());
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
