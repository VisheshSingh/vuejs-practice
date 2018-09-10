<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>Author: {{blog.author}}</p>
        <p v-for="category in blog.categories">Category: {{category}}</p>
    </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$http
      .get(
        "https://vue-playlist-25566.firebaseio.com/posts/" + this.id + ".json"
      )
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.blog = data;
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


