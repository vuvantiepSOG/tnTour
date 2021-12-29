<template>
  <div class="mb-10" style="font-family:time new roman; background-image: url('https://hanoispiritofplace.com/wp-content/uploads/2018/01/hinh-nen-bau-troi-8.jpg');">
    <v-container>
      <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-12 mt-7">
          <v-card outlined>
            <v-card-title>Filters</v-card-title>
            <v-divider></v-divider>
            <template>
              <v-treeview
                :items="items"
                :open="[1]"
                :active="[5]"
                :selected-color="'#fff'"
                activatable
                open-on-click
                dense
              ></v-treeview>
            </template>
            <v-divider></v-divider>
            <v-card-title>Price</v-card-title>
            <v-range-slider
              v-model="range"
              :max="max"
              :min="min"
              :height="10"
              class="align-center"
              dense
            ></v-range-slider>
            <v-row class="pa-2" dense>
              <v-col cols="12" sm="5">
                <v-text-field
                  :value="range[0]"
                  label="Min"
                  outlined
                  dense
                  @change="$set(range, 0, $event)"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="2">
                <p class="pt-2 text-center">TO</p>
              </v-col>
              <v-col cols="12" sm="5">
                <v-text-field
                  :value="range[1]"
                  label="Max"
                  outlined
                  dense
                  @change="$set(range, 1, $event)"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-card-title class="pb-0">Customer Rating</v-card-title>
            <v-container class="pt-0" fluid>
              <v-checkbox
                append-icon="mdi-star"
                label="4 & above"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                append-icon="mdi-star"
                label="3 & above"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                append-icon="mdi-star"
                label="2 & above"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                append-icon="mdi-star"
                label="1 & above"
                hide-details
                dense
              ></v-checkbox>
            </v-container>
            <v-divider></v-divider>
            <!-- <v-card-title class="pb-0">Size</v-card-title>
            <v-container class="pt-0" fluid>
              <v-checkbox label="XS" hide-details dense></v-checkbox>
              <v-checkbox label="S" hide-details dense></v-checkbox>
              <v-checkbox label="M" hide-details dense></v-checkbox>
              <v-checkbox label="L" hide-details dense></v-checkbox>
              <v-checkbox label="XL" hide-details dense></v-checkbox>
              <v-checkbox label="XXL" hide-details dense></v-checkbox>
              <v-checkbox label="XXXL" hide-details dense></v-checkbox>
            </v-container> -->
          </v-card>
        </div>
        <div class="col-md-9 col-sm-9 col-xs-10 " style="bac ;margin-top: 40px;">
          

          <v-divider></v-divider>
          <div class=".a1">
            
          </div>
          <div class="row text-center ml-8 ">
            
              <shop-list />
            
          </div>
          <!-- <div class="row text-center">
            <div
              class="col-md-3 col-sm-6 col-xs-12"
              :key="pro.id"
              v-for="pro in products"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                  <v-img
                    class="white--text align-end"
                    :aspect-ratio="16 / 9"
                    height="200px"
                    :src="pro.src"
                  >
                    <v-card-title>{{ pro.type }} </v-card-title>
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        <v-btn v-if="hover" href="/product" class="" outlined
                          >VIEW</v-btn
                        >
                      </div>
                    </v-expand-transition>
                  </v-img>
                  <v-card-text class="text--primary">
                    <div>
                      <a href="/product" style="text-decoration: none">{{
                        pro.name
                      }}</a>
                    </div>
                    <div>${{ pro.price }}</div>
                  </v-card-text>
                </v-card>
              </v-hover>
            </div>
          </div> -->
          <div class="text-center mt-12">
            <v-pagination v-model="page" :length="6"></v-pagination>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
.a1 {
  align-items: stretch;
}
</style>
<script>
import ShopList from "../components/ShopList.vue";
export default {
  components: { ShopList },
  data: () => ({
    range: [0, 10000],
    select: "Popularity",
    page: 1,
    min: 0,
    max: 10000,
    items: [
      {
        id: 2,
        name: "Transport",
        children: [
          { id: 2, name: "Planes" },
          { id: 3, name: "Yacht" },
          { id: 4, name: "Car" }
        ]
      },
      {
        id: 1,
        name: "Tourist attraction",
        children: [
          { id: 5, name: "Domestic" },
          { id: 6, name: "Foreign" },
          { id: 7, name: "North" },
          { id: 8, name: "Southern" }
        ]
      }
    ]
    // products: [
    //   {
    //     id: 1,
    //     name: "BLACK TEE",
    //     type: "Jackets",
    //     price: "18.00",
    //     src: require("../img/1.jpg")
    //   },
    //   {
    //     id: 2,
    //     name: "WHITE TEE",
    //     type: "Polo",
    //     price: "40.00",
    //     src: require("../img/1.jpg")
    //   },
    //   {
    //     id: 3,
    //     name: "Zara limited...",
    //     type: "Denim",
    //     price: "25.00",
    //     src: require("../img/1.jpg")
    //   },
    //   {
    //     id: 4,
    //     name: "SKULL TEE",
    //     type: "Jackets",
    //     price: "30.00",
    //     src: require("../img/1.jpg")
    //   },
    //   {
    //     id: 5,
    //     name: "MANGO WINTER",
    //     type: "Sweaters",
    //     price: "50.00",
    //     src: require("../img/1.jpg")
    //   },
    //   {
    //     id: 6,
    //     name: "SHIRT",
    //     type: "Denim",
    //     price: "34.00",
    //     src: require("../img/1.jpg")
    //   },
    //   {
    //     id: 7,
    //     name: "TRUCKER JACKET",
    //     type: "Jackets",
    //     price: "38.00",
    //     src: require("../img/1.jpg")
    //   },
    //   {
    //     id: 8,
    //     name: "COATS",
    //     type: "Jackets",
    //     price: "25.00",
    //     src: require("../img/1.jpg")
    //   },
    //   {
    //     id: 9,
    //     name: "MANGO WINTER",
    //     type: "Sweaters",
    //     price: "50.00",
    //     src: require("../img/1.jpg")
    //   },
    //   {
    //     id: 10,
    //     name: "SHIRT",
    //     type: "Denim",
    //     price: "34.00",
    //     src: require("../img/1.jpg")
    //   },
    //   {
    //     id: 11,
    //     name: "TRUCKER JACKET",
    //     type: "Jackets",
    //     price: "38.00",
    //     src: require("../img/1.jpg")
    //   },
    //   {
    //     id: 12,
    //     name: "COATS",
    //     type: "Jackets",
    //     price: "25.00",
    //     src: require("../img/1.jpg")
    //   }
    // ]
  })
};
</script>
