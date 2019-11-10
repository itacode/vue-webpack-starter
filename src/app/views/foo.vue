<template>
  <div>
    <p>Foo route with axios</p>
    <p v-if="fetchedData">Fetched name: {{fetchedData.name}}</p>
  </div>
</template>

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
      let response;
      try {
        response = await this.$http.get('https://swapi.co/api/people/1/');
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
      this.fetchedData = response.data;
    },
  },
};
</script>
