<template>
  <div>
    <p>Foo route ajax results from the Vuex store:</p>
    <p>{{ fetchedData }}</p>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'TheFoo',

  computed: {
    fetchedData() {
      return this.$store.state.contents;
    },
  },
});
</script>
