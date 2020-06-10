<template>
  <div>
    <p>Foo route ajax results from the Vuex store:</p>
    <p>{{fetchedData}}</p>
  </div>
</template>

<script>

export default {
  name: 'foo-component',

  computed: {
    fetchedData() {
      return this.$store.state.contents;
    },
  },
};
</script>
