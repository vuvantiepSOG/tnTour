<template>
  <div class="col-md-3 col-sm-6 col-xs-12" style="width:200px">
    <v-hover v-slot:default="{ hover }">
      <v-card class="mx-auto" color="grey lighten-4" max-width="600">
        <v-img
          class="white--text align-end"
          :aspect-ratio="16 / 9"
          height="200px"
          :src="require('../assets/articles/'+product.image)"
        >
          <v-card-title>- {{ product.discount }} </v-card-title>
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
              style="height: 100%;"
            >
              <div>
                <v-btn v-if="hover" class="" outlined
                  ><router-link
                    style="text-decoration:none"
                    :to="{ name: 'product', params: { id: product.id } }"
                  >
                    <v-icon>mdi-eye</v-icon></router-link
                  ></v-btn
                >
              </div>
            </div>
          </v-expand-transition>
        </v-img>
        <v-card-text class="text--primary">
          <div>
            <h4 class="card-title ">
              <router-link
                style="text-decoration:none"
                :to="{ name: 'product', params: { id: product.id } }"
                >{{ product.nameTours }}</router-link
              >
            </h4>
          </div>
          <div>{{ product.price }}</div>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
import Product from "../pages/Product.vue";
export default {
  components: { Product },
  props: ["product"]
};
</script>

<style></style>
