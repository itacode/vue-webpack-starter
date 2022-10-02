<template>
  <div>
    <p>Foo route ajax results from the Vuex store:</p>
    <p>{{ fetchedData }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import store from '@/app/store/index';

const fetchedData = computed(() => {
  return store.state.contents;
});
</script>
