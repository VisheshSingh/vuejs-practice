<template>
    <div id="show-blog" v-theme:column="'narrow'">
        <h1>All blog articles</h1>
        <input type="text" v-model="search" placeholder="Search blogs">
        <div v-for="blog in filteredBlogs" class="single-blog">
          <router-link v-bind:to="'blog/'+blog.id"><h2 v-rainbow>{{blog.title | to-uppercase}}</h2></router-link>
          <p>{{blog.content | snippet}}</p>
        </div>
    </div>
</template>

<script>
// Imports
import searchMixin from "../mixins/searchMixin";

export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://vue-playlist-25566.firebaseio.com/posts.json")
      .then(data => {
        return data.json();
      })
      .then(data => {
        var blogsArray = [];
        for (let key in data) {
          // console.log(data[key]);
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        // console.log(blogsArray);
        //console.log(data);

        this.blogs = blogsArray;
      });
  },
  computed: {},
  mixins: [searchMixin]
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
  text-decoration: none;
}

input {
  width: 90%;
  margin: 0 auto;
  padding: 8px;
}
</style>