<template>
  <div>
    <p>Foo route ajax results from the Vuex store:</p>
    <p>{{ fetchedData }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheFoo',

  computed: {
    fetchedData() {
      return this.$store.state.contents;
    },
  },
});
</script>
