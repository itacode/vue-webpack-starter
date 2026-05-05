<template>
  <div>
    <p>Foo route ajax results from the Pinia store:</p>
    <p>{{ fetchedData }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useContentStore } from '@/app/stores/index';

const contentStore = useContentStore();
const fetchedData = computed(() => contentStore.contents);

defineExpose({ fetchedData });
</script>
