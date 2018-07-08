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
  </div>
</template>
 
 
<script>
import fileBase64 from "vue-file-base64";

export default {
  components: { fileBase64 },
  data() {
    return {
      fileupload: "",
      info: ""
    };
  },
  methods: {
    getFile(file) {
      this.info = file;
      this.fileupload = file.base64;
    }
  }
};
</script> 

<style scoped>
  .filebase64 {
    padding: 0px 30px;
  }
</style>
