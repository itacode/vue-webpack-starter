<template>
  <p>{{ msg }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheBar',
  data() {
    return { msg: 'Bar route' };
  },
});
</script>
