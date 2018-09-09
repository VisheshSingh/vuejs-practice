<template>
    <div id="show-blog">
        <h1>All blog articles</h1>
        <div v-for="blog in blogs" class="single-blog">
          <h2>{{blog.title}}</h2>
          <p>{{blog.body}}</p>
        </div>
    </div>
</template>

<script>
// Imports
export default {
  data() {
    return {
      blogs: []
    };
  },
  methods: {},
  created() {
    this.$http.get("https://jsonplaceholder.typicode.com/posts").then(data => {
      console.log(data);
      this.blogs = data.body.slice(0, 10);
    });
  }
};
</script>

<style>
#show-blog {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 10px;
  margin: 20px auto;
  background: #eee;
}
</style>