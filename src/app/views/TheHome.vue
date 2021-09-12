<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TheHome',
  data() {
    return {
      msg: 'Home route',
    };
  },
});
</script>
