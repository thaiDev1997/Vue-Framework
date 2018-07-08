<template>
    <div class="full-loading">
    <full-loading :show="show" :label="label">
        
    </full-loading>
 <button @click="showFullLoading">On Full Loading</button>
    <br/><br/>
    <div class="overlay-loading">
        <!--can-cancel mà bằng true thì click ra ngoài màn hình sẽ tắt loading-->
        <loadingoverlay :active.sync="isLoading" 
        :can-cancel="false" 
        :on-cancel="whenCancelled"
        :is-full-page="true" ref="loading"></loadingoverlay>
        <button @click.prevent="doAjax">Loading Overlay</button>
        <button @click="open">Programmatic show</button>
    </div>
    </div>
    
</template>

<script>
import fullLoading from "vue-full-loading";
import "vue-loading-overlay/dist/vue-loading.min.css";
import axios from "axios";
import loadingoverlay from "vue-loading-overlay";
export default {
  components: {
    fullLoading,
    loadingoverlay
  },
  data() {
    return {
      show: false,
      label: "Đang Tải...",
      isLoading: false
    };
  },
  methods: {
    showFullLoading() {
      this.show = true;
      let myThis = this;
      setTimeout(function() {
        myThis.show = false;
      }, 2000);
    },
    doAjax() {
      this.isLoading = true;
      // AJAX example with axios
      let myThis = this;
      setTimeout(function() {
        myThis.isLoading = false;
      }, 2000);
    //   axios.post("/api").then(response => {
    //     this.isLoading = false;
    //   });
    },
    whenCancelled() {
      console.log("User cancelled the loader.");
    },
    open() {
      console.log("open was clicked, will auto hide");
      console.log(this.$refs.loading)
      console.log(this.$loading);
    //   let loader = this.$loadingoverlay.show();
    //   setTimeout(() => loader.hide(), 3 * 1000);
    }
  }
};
</script>

<style>
</style>
