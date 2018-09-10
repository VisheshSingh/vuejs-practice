<template>
    <div>
      <app-header></app-header>
      <router-view></router-view>
    </div>
</template>

<script>
// Imports
import addBlog from "./components/addBlog.vue";
import showBlog from "./components/showBlog.vue";
import listblogs from "./components/listblogs.vue";
import header from "./components/header.vue";
export default {
  components: {
    "add-blog": addBlog,
    "show-blog": showBlog,
    "list-blog": listblogs,
    "app-header": header
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>