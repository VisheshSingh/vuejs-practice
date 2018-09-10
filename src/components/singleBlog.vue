<template>
    <div id="single-blog">
        <h1>{{blogs.title}}</h1>
        <article>{{blogs.body}}</article>
    </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blogs: {}
    };
  },
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts/" + this.id)
      .then(data => {
        console.log(data);
        this.blogs = data.body;
      });
  }
};
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>


