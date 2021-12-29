<template >
  <v-app id="app" >
    <app-header/>
    
    <!-- <router-view></router-view> -->
    

    <!-- <v-app-bar app color="#D52329" height="36px">
      <v-input id="location" class="mt-4 input-1">
        <a href="/" style="text-decoration:none"
          ><v-icon style="color: #fff">mdi-map-marker</v-icon>Địa chỉ giao hàng
          của bạn ?</a
        >
      </v-input>
      <v-spacer></v-spacer>
      <v-input
        class="mt-4 v-input input-2"
        style="font-weight: 200; font-size:15px; padding: 18px"
        ><v-icon style="color: #fff">mdi-newspaper</v-icon> Đọc báo VnExpress
      </v-input>
      <v-input class="mt-4 v-input" style="font-weight: 200; font-size:15px"
        ><v-icon style="color: #fff">mdi-trending-up</v-icon> Xu hướng
      </v-input>
      <v-input class="mt-4 v-input" style="font-weight: 200; font-size:15px "
        ><v-icon style="color: #fff">mdi-lifebuoy</v-icon> Hỗ trợ
      </v-input>
      <v-input class="mt-4 v-input" style="font-weight: 200; font-size:15px "
        ><v-icon style="color: #fff">mdi-check</v-icon> Kiểm tra đơn hàng
      </v-input>
      <v-input class="mt-4 v-input" style="font-weight: 200; font-size:15px "
        ><v-icon style="color: #fff">mdi-phone-classic</v-icon>
        Hotline:1900.991.936
      </v-input>
    </v-app-bar> -->

    <!-- <v-toolbar color="#fff" class="mt-4">
      <v-app-bar app color="#ccc">
        <v-toolbar-title style="width: 370px">
          <a
            class="ml-5"
            href="/"
            style="text-decoration:none; color:#000 !important ;font-size:30px "
            ><v-icon class="mr-5; " style="color:#D52329;font-size:30px"
              >mdi-helicopter</v-icon
            >Helikopter</a
          >
        </v-toolbar-title>
        <v-text-field
          class="text-white"
          label="Nhập từ khóa cần tìm kiếm ..."
          prepend-inner-icon="mdi-magnify"
          solo-inverted
          flat
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon color="#000">mdi-account-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="#000">mdi-gift</v-icon>
        </v-btn>
        <v-btn icon>
          <v-badge color="primary" content="3" overlap>
            <v-icon color="#000">mdi-cart</v-icon>
          </v-badge>
        </v-btn>
      </v-app-bar>
    </v-toolbar> -->

    <!-- <v-footer :padless="true">
      <v-card class="success white--text text-center" flat tile width="100%">
        <v-card-text>
          <v-btn class="white--text mx-5" icon>
            <v-icon>mdi-toilet</v-icon>
          </v-btn>
          <v-btn class="white--text mx-5" icon>
            <v-icon>mdi-email</v-icon>
          </v-btn>
          <v-btn class="white--text mx-5" icon>
            <v-icon>mdi-calendar</v-icon>
          </v-btn>
          <v-btn class="white--text mx-5" icon>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="white--text">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            labore est eaque ipsam perspiciatis voluptas suscipit, esse
            cupiditate pariatur minus?
          </p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          {{ new Date().getFullYear() }} - <strong>Pensee Shop</strong>
        </v-card-text>
      </v-card>
    </v-footer> -->
    <!-- <v-card style="background-color:#fff font-family:time new roman">
      <v-container style="color:#000" >
        <v-row no-gutters>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2" style="color:#D52329">mdi-truck</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">FREE SHIPPING & RETURN</h3>
                <p class="font-weight-thin">Free Shipping over $300</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2" style="color:#D52329">mdi-cash-usd</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">MONEY BACK GUARANTEE</h3>
                <p class="font-weight-thin">30 Days Money Back Guarantee</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2" style="color:#D52329">mdi-headset</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light">020-800-456-747</h3>
                <p class="font-weight-thin">24/7 Available Support</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card> -->
    <v-footer :padless="true" style="background-color:#61bec2 font-family:time new roman" >
      <v-card flat tile width="100%" class="white--text text-center" style="background-color:#61bec2">
        <v-card-text>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-home</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-email</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-calendar</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-delete</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>
        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>T&N - Travel</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

import Home from "./pages/Home.vue";
export default {
  name: "app",
  components: { Home, AppHeader }
};
</script>

<style>
/* a {
  font-weight: 200;
  color: #fff !important;
  font-size: 15px;
} */

/* .v-input {
  cursor: pointer;
  color: #fff !important;
}
.input-1 {
  padding-left: 124px;
}

.input-2 {
  padding-left: 48px;
}
.text-white {
  color: #000 !important;
} */
</style>
