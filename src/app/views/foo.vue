<template>
  <div>
    <p>Foo route with axios</p>
    <p>{{fetchedData}}</p>
  </div>
</template>

<script>
import Axios from 'axios';

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
        response = await Axios.get('https://swapi.co/api/people/1/');
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
      this.fetchedData = response.data;
    },
  },
};
</script>
