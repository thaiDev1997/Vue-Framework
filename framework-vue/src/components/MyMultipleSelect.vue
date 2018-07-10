<template>
    <div class="multipleselect">
        <h1 class="text-center">Demo of vue-multiselect</h1>
        <div class="container">
            <div class="panel panel-default">
        <div class="panel-heading">Vue Multiple Select</div>
        <div class="panel-body">
          <div class="form-inline">
            <div class="form-group">
              <label for="email">Nhập thêm tag:</label>
              <input type="email" v-model="newTag" @keyup.enter="addTag(newTag)" class="form-control" id="email">
              <button class="btn btn-primary" @click="addTag">Thêm Tag</button>
            </div>
          </div>
            <label class="typo__label">Tagging</label>
  <multiselect v-model="value" :options="options" label="name" track-by="code" :hide-selected="true" :clear-on-select="true" :allow-empty="false" :loading="isLoading" :searchable="true" :multiple="true" :taggable="true" @tag="addTag" tag-placeholder="Thêm Tag này vào" deselect-label="Nhấp để xóa" select-label="Nhấp để chọn" placeholder="Tìm kiếm Tag"></multiselect>
  <!-- searchable mặc định đc đưa vào component multiselect với giá trị là true, nếu set là false sẽ ko thể search -->
  <br/>
  <pre class="language-json"><code>{{ value  }}</code></pre>
        </div>
        </div>
        </div>
</div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  components: {
    Multiselect
  },
  data() {
    return {
      newTag: "",
      isLoading: false,
      value: [
        {
          name: "Javascript",
          code: "js"
        }
      ],
      options: [
        {
          name: "Vue.js",
          code: "vu"
        },
        {
          name: "Javascript",
          code: "js"
        },
        {
          name: "Open Source",
          code: "os"
        },
        {
          name: "Java",
          code: "ja"
        },
        {
          name: "Asp",
          code: "as"
        },
        {
          name: "PHP",
          code: "ph"
        }
      ]
    };
  },
  methods: {
    addTag(newTag) {
      if (newTag.trim() != "") {
        this.isLoading = true;
        this.options.push({
          name: newTag.trim(),
          code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
        });
        let myThis = this;
        setTimeout(function(){
          myThis.isLoading = false;
          alert("Thêm Thẻ Thành Công!")
        },1000);
        this.newTag = "";
      }
    }
  }
};
</script>

<style>
</style>