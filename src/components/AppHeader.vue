<template>
  <div style="z-index:10;">
    <v-app class="inspite">
      <v-app-bar class="elevation-0" app color="#61bec2">
        <v-toolbar-title style="width: 350px">
          <a
            href="/"
            class="ml-5 "
            style="text-decoration:none; color:#000 !important ;font-size:30px mr-3 "
            ><v-icon class="mr-5  " style="color:#eb4034;font-size:30px"
              >mdi-airplane-marker</v-icon
            >T&N - Travel</a
          >
        </v-toolbar-title>
        <v-text-field
          label="Search"
          prepend-inner-icon="mdi-magnify"
          solo-inverted
          flat
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon color="#eb4034">mdi-account-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="#eb4034">mdi-gift</v-icon>
        </v-btn>
        <v-btn icon>
          <a href="/cart">
            <v-badge style="background-color">
              <v-icon color="#eb4034">mdi-cart</v-icon>
            </v-badge>
          </a>
        </v-btn>
        
        <div class="col-lg-3">
          <div class="header__cart">
            <ul>  
              <li>
                <a href="/cart" class="nav-link"
                  ><i class="mdi-cart"></i
                  ><span class="text-light cart_count"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
      </v-app-bar>
      <v-content class="elevation-0">
        <v-bottom-navigation class="elevation-0">
          <v-btn href="/">HOME</v-btn>
          <v-btn>SHOP</v-btn>
          <v-btn href="/tour">TOURS</v-btn>
          <v-btn>BLOG</v-btn>
          <v-btn href="/postlist">NEWS</v-btn>
        </v-bottom-navigation>
      </v-content>
      <v-divider></v-divider>
      <router-view />
    </v-app>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style></style>
