<template>
  <div style="font-family: time new roman">
    <v-container>
      <p class="display-3 font-weight-light	text-center pa-4">
        Tin tức
      </p>
      <div class="row">
        <div class="col-md-4 col-sm-3 col-xs-12">
          <post-card
            
          />
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import PostCard from './PostCard.vue';
export default {
  name: "PostList",
  components: {  PostCard },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  mounted() {
    this.$store.dispatch("getPosts");
  }
};
</script>

<style></style>
