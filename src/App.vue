<template>
    <div>
        <show-blog></show-blog>
        <list-blog></list-blog>
    </div>
</template>

<script>
// Imports
import addBlog from "./components/addBlog.vue";
import showBlog from "./components/showBlog.vue";
import listblogs from "./components/listblogs.vue";

export default {
  components: {
    "add-blog": addBlog,
    "show-blog": showBlog,
    "list-blog": listblogs
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