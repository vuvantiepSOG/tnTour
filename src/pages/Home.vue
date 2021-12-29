<template>
  <div class="mt-7">
    <v-carousel hide-delimiters>
      <v-carousel-item :src="require('../img/banner/baner1.jpg')">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"></div>
          <br />
        </v-row>
      </v-carousel-item>
      <v-carousel-item :src="require('../img/banner/baner2.jpg')">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"></div>
          <br />
        </v-row>
      </v-carousel-item>
      <v-carousel-item :src="require('../img/banner/baner3.jpg')">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"></div>
          <br />
        </v-row>
      </v-carousel-item>
      <v-carousel-item :src="require('../img/banner/baner5.jpg')">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"></div>
          <br />
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <v-container>
       <v-row style="height: 5px; color: red;">
       </v-row>
    </v-container>
    
    <product-list />
  </div>
</template>

<script>
import ProductList from "../components/ProductList";
export default {
  components: {
    ProductList
  }
};
</script>

<style></style>
