<script>
export default {
  name: 'foo-component',

  data() {
    return {
      fetchedData: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let response = await this.$http.get('https://swapi.co/api/people/1/');
      this.fetchedData = response.data;
    },
  },
};
</script>

<template>
  <div>
    <p>Foo route with axios</p>
    <p>{{fetchedData}}</p>
  </div>
</template>
