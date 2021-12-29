<template>
  <!-- <div class="ml-5 d-flex align-items-stretch flex-wrap "> -->
  <div class="row text-center ">
    <shop-cart
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ShopCart from "./ShopCart.vue";
export default {
  components: { ShopCart },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  mounted() {
    this.$store.dispatch("getProducts");
  }
};
</script>

<style>
.wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
}
</style>
