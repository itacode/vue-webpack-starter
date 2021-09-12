<template>
  <p>{{ msg }}</p>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TheBar',
  data() {
    return { msg: 'Bar route' };
  },
});
</script>
