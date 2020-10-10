<template>
  <p>{{ msg }}</p>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'TheBar',
  data() {
    return {
      msg: 'Bar route',
    };
  },
});
</script>
