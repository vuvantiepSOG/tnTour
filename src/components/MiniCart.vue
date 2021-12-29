<template>
  <div class="mb-8">
    <v-container>
      <p class="display-3 font-weight-light text-center pa-4">TOURS CART</p>
      <v-row>
        <v-col :cols="12" md="9" sm="12">
          <ul class="checkout-list">
            <transition-group name="fade">
              <li v-for="cart in cart" :key="cart.id" class="row" style="margin-bottom: 15px;background: #c47e7e;">
                <v-img
                  class="white--text align-end col-md-2"
                  :src="require('../assets/articles/' + cart.image)"
                  style="height: 150px; width: 200px"
                />
                <span class="col-md-8">R$ {{ cart.price }},00 </span>
                <button class="col-md-2" @click="remove(cart.id)">X</button>   
                <button class="col-md-2" @click="submit">ĐẶT</button>
              </li>
            </transition-group>
          </ul>
          <div v-if="!hasProduct()" class="checkout-message">
            <h3>No tours...</h3>
            <router-link to="./">Back to list of home</router-link>
          </div>
        </v-col>
        <v-col :cols="12" md="3" sm="12" style="background-color: lightgray">
          <p class="headline">Order Summary</p>
          <p class="overline">
            Shipping and additional costs are calculated based on values you
            have entered.
          </p>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr>
                  <td>Tour booking fee</td>
                  <td class="text-right" style="width: 200px">$ {{ totalPrice() }}</td>
                </tr>
                <tr>
                  <td>Surcharge</td>
                  <td class="text-right" style="width: 200px">$0.00</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td class="text-right" style="width: 200px">0%</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td class="text-right" style="width:200px">
                    <h3 class="total" v-if="hasProduct()">$ {{ totalPrice() }}, 00</h3>
                  </td>
                </tr>
                <v-select type="text" :items="items"
            :rules="[v => !!v || 'Item is required']"
            required label="Phương Thức Thanh Toán"/>
              </tbody>
            </template>
          </v-simple-table>
          <div class="text-center">
            <v-btn class="primary white--text mt-5" outlined @click="submit"
              >ĐẶT</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "MiniCart",
  data(){
   return{
     data: {
        
      },
     items: [
          'Tiền mặt',
          'Chuyển khoản'
        ],
   }
  },

  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  props: ["cart"],
  mounted() {
    this.$store.dispatch("getCart");
  },
  methods: {
    hasProduct() {
      return this.cart.length > 0;
    },
    totalPrice() {
      return this.cart.reduce((current, next) => current + next.price, 0);
    },
    //  submit() {
    //   axios
    //   .post("https://localhost:44336/api/LocationDetail/InsertLocationDetail", this.data)
    //   this.$router.push('/')
    // },
    remove(id) {
       if (id) {
        axios
          .delete(
            "https://localhost:44336/api/Cart/DeleteCart?id="+id
          )
          .then((response) => {
        })
        .catch((error) => {
          console.log(error);
        });
      }
    }
  },
};
</script>

<style></style>
