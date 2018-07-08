<template>
    <v-ons-page>
    <v-ons-toolbar>
      <div class="left"><ons-toolbar-button @click="carouselIndex > 0 && carouselIndex--"><span style="font-size:60px;cursor:pointer;">⬅</span></ons-toolbar-button></div>
      <div class="center">Trang: {{carouselIndex + 1}} (index: {{carouselIndex}})</div>
      <div class="right"><ons-toolbar-button @click="carouselIndex < (lengthItem - 1) && carouselIndex++"><span style="font-size:60px;cursor:pointer;">➡</span></ons-toolbar-button></div>
    </v-ons-toolbar>

    <v-ons-carousel fullscreen swipeable auto-scroll overscrollable
      :index.sync="carouselIndex"
    >
      <v-ons-carousel-item v-for="(value, key) in items" :key="key" :style="{backgroundColor: value}">
        <div style="text-align: center; font-size: 30px; margin-top: 20px; color: #fff;">{{key}}</div>
      </v-ons-carousel-item>
    </v-ons-carousel>

    <div :style="dots">
      <span :index="dotIndex - 1" v-for="dotIndex in lengthItem" :key="dotIndex" style="cursor: pointer" @click="carouselIndex = dotIndex - 1">
        {{ carouselIndex === dotIndex - 1 ? '\u25CF' : '\u25CB' }}
      </span>
    </div>
  </v-ons-page>
</template>

<script>
// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

// JS import
import Vue from 'vue';
import VueOnsen from 'vue-onsenui'; // This already imports 'onsenui'

Vue.use(VueOnsen);

export default {
  data() {
    return {
      carouselIndex: 0,
      items: {
        BLUE: "#085078",
        DARK: "#373B44",
        ORANGE: "#D38312",
        PINK: "#EA5399",
      },
      dots: {
        textAlign: "center",
        fontSize: "30px",
        color: "#fff",
        position: "absolute",
        bottom: "40px",
        left: 0,
        right: 0
      }
    };
  },
  computed: {
    lengthItem(){
      return Object.keys(this.items).length;
    }
  }
};
</script>

<style>
</style>
