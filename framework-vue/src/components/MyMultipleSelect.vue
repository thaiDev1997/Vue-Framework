<template>
    <div class="multipleselect">
        <h1 class="text-center">Demo of vue-multiselect</h1>
        <div class="container">
            <div class="panel panel-default">
        <div class="panel-heading">Vue Multiple Select</div>
        <div class="panel-body">
            <label class="typo__label">Tagging</label>
  <multiselect v-model="value" :options="options" label="name" track-by="code"  :multiple="true" :taggable="true" @tag="addTag" tag-placeholder="Add this as new tag" placeholder="Search or add a tag"></multiselect>
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
        alert("a");
        const tag = {
          name: newTag,
          code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
        };
        this.options.push(tag);
        this.value.push(tag);
      }
    }
  };
</script>

<style>
</style>