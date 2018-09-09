<template>
    <div id="show-blog" v-theme:column="'narrow'">
        <h1>All blog articles</h1>
        <input type="text" v-model="search" placeholder="Search blogs">
        <div v-for="blog in filteredBlogs" class="single-blog">
          <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
          <p>{{blog.body | snippet}}</p>
        </div>
    </div>
</template>

<script>
// Imports
export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {},
  created() {
    this.$http.get("https://jsonplaceholder.typicode.com/posts").then(data => {
      console.log(data);
      this.blogs = data.body.slice(0, 10);
    });
  },
  computed: {
    filteredBlogs() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
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
  box-sizing: border-box;
}

input {
  width: 90%;
  margin: 0 auto;
  padding: 8px;
}
</style>