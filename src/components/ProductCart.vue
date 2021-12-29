<template>
  <div class="col-4 mt-2"  > 
    <div class=" text-center">
      <v-hover v-slot:default="{ hover }" open-delay="200">
        <v-card class="hoverItem" :elevation="hover ? 16 : 2" style="outline: 2px solid #eb4034">             
          <v-img
            v-model="data.image"
            class="white--text align-end"
            :src="require('../assets/articles/'+product.image)"
            style="height: 350px;">
           <v-row class="fill-height text-right ma-0">
              <v-col cols="12">
                <v-chip
                  label
                  class="mx-0 mb-2 text-uppercase"
                  color="grey darken-3"
                  text-color="white"
                  small
                  @click.stop=""
                > {{ product.nameTours }}
                </v-chip>

              <h3 class="title font-weight-bold mb-2">
                {{ product.description }}
              </h3>
              <div>
                $ {{ product.price }}
              </div>
              </v-col>
              <v-col align-self="end">          
                <v-btn @click="submit" 
                class="text-uppercase ma-0 mt-2 mb-2" 
                color="primary" dark>
                <v-icon class="mr-2">mdi-cart</v-icon>Add Cart</v-btn>
              </v-col>
            </v-row>
          </v-img>                 
        </v-card>
      </v-hover>
    </div>
    <v-divider></v-divider>
  </div>
</template>
 
<script>

import Product from "../pages/Product.vue";
import axios from 'axios'
export default {
  components: { Product },
  data(){
    return {
      data: {
        toursId: 1,
        image: this.product.image,
        price: this.product.price,
        quantity: 2,
        total: 100,
        customerId: 1,
      },
    }
  },
  props: ["product"],
  methods: {
    submit() {
      axios
      .post("https://localhost:44336/api/Cart/InsertCart", this.data)
    },
    addToCart() {
      this.$store.dispatch("setCart", {
        product: this.product,
        quanntity: 1
      });
    },
  }
};
</script>

<style>
</style>
