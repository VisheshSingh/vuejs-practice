<template>
    <div id="single-blog">
        <h1>{{blogs.title}}</h1>
        <article>{{blogs.content}}</article>
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
      .get(
        "https://vue-playlist-25566.firebaseio.com/posts/" + this.id + ".json"
      )
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.blogs = data;
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


