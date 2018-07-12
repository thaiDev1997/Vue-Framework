<template>
  <div class="filebase64">
    <file-base64
      v-bind:multiple="false"
      v-bind:done="getFile" accept="image/*">
    </file-base64>

    <p v-if="fileupload">
      <b>Image</b>
      <br/>
      <img :src="fileupload" width="500px" height="auto"/>
      <br/>
      <b>Info</b>
      <span>
        <pre>
          {{info}}
        </pre>
      </span>
    </p>
    <hr/>

  <div id="image-preview">
<vue-base64-file-upload style="max-width: 300px"
        class="v1"
        accept="image/png,image/jpeg"
        image-class="v1-image"
        input-class="v1-input"
        file-name= " Upload image nào"
        placeholder= "abc"
        default-preview = 'http://ndun.edu.vn/img/images/slidehome/no-image.png'
        :max-size="customImageMaxSize"
        @size-exceeded="onSizeExceeded"
        @file="onFile"
        @load="onLoad" />
        <!--Thêm disable-preview vào là ko hiển thị image preview-->
  </div>
    

  </div>
</template>
 
 
<script>
import fileBase64 from "vue-file-base64";
import VueBase64FileUpload from "vue-base64-file-upload";
export default {
  components: {
    fileBase64,
    VueBase64FileUpload
  },
  data() {
    return {
      fileupload: "",
      info: "",
      customImageMaxSize: 0.5
    };
  },
  mounted() {
    this.$nextTick(() => {

    });
  },
  methods: {
    getFile(file) {
      this.info = file;
      this.fileupload = file.base64;
    },
    onFile(file) {
      console.log(file); // file object
    },

    onLoad(dataUri) {
      console.log(dataUri); // data-uri string
    },
    onSizeExceeded(size) {
      alert(
        `Image ${size}Mb size exceeds limits of ${this.customImageMaxSize}Mb!`
      );
    }
  }
};
</script> 

<style scoped>
.filebase64 {
  padding: 0px 30px;
}
</style>
