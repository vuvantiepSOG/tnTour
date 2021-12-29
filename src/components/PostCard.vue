<template>
  <v-card class="mx-auto" max-width="400" outlined tile href="/post">
    <v-img
      class="white--text align-end"
      height="400px"
      :src="require('../img/2.jpg')"
    >
      
    </v-img>

    <v-card-subtitle class="pb-0">{{post.postName}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>
        {{post.content}}
      </div>
    </v-card-text> 

    <v-card-actions>
      <v-btn color="orange" text>
        Đọc tiếp
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
