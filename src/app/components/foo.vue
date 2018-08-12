<script>
export default {
  name: "foo-component",

  data() {
    return {
      fetchedData: this.fetchData(),
    };
  },
  methods: {
    fetchData() {
      this.$http.get("https://swapi.co/api/people/1/").then(response => {
        this.fetchedData = response.data;
      });
    },
  }
};
</script>

<template>
  <div>
    <p>This is Foo with axios</p>
    <p>{{fetchedData}}</p>
  </div>
</template>
