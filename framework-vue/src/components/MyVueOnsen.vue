<template>
    <div class="onsen-ui">
        <v-ons-page>
      <v-ons-toolbar>
        <div class="center">{{ title }}</div>
      <div class="right">
        <v-ons-toolbar-button icon="ion-navicon, material: md-menu"></v-ons-toolbar-button>
      </div>
      </v-ons-toolbar>
        <p style="text-align: center">
      Some content.
    </p>
      <p style="text-align: center">
        <v-ons-button @click="$ons.notification.alert('Hello World!')">
          Click me!
        </v-ons-button>
      </p>
    </v-ons-page>
    </div>
</template>

<script>
// Webpack CSS import
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";

// JS import
import Vue from "vue";
import VueOnsen from "vue-onsenui"; // This already imports 'onsenui'

Vue.use(VueOnsen);

export default {
    data(){
        return {
            title: 'My app'
        }
    }
};
</script>

<style>
</style>
