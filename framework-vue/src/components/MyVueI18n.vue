<template>
    <div class="container">
        <p>{{ $t("common.select_lang") }} : {{ $t("language") }}</p>
        <select v-model="currentLocale">
            <option disabled value="">Please select one</option>
            <option value="vn">Tiếng Việt</option>
            <option value="en">English</option>
        </select>
        <hr/>
        <div class="col-md-6">
            <form class="form-horizontal" action="#">
  <div class="form-group">
    <label class="control-label col-sm-4" for="email">{{ $t("login.input_text.email") }}:</label>
    <div class="col-sm-8">
      <input type="email" class="form-control" id="email" placeholder="Enter email">
    </div>
  </div>
  <div class="form-group">
    <label class="control-label col-sm-4" for="pwd">{{ $t("login.input_text.password") }}:</label>
    <div class="col-sm-8"> 
      <input type="password" class="form-control" id="pwd" placeholder="Enter password">
    </div>
  </div>
  <div class="form-group"> 
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label><input type="checkbox"> {{ $t("login.messages.rememberMe") }}</label>
      </div>
    </div>
  </div>
  <div class="form-group"> 
    <div class="col-sm-offset-5 col-sm-10">
      <button type="submit" class="btn btn-success">{{ $t("login.buttons.login") }}</button>
    </div>
  </div>
</form>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import vnMessage from "../lang/vn.json";
import enMessage from "../lang/en.json";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);
const messages = {
  vn: vnMessage,
  en: enMessage
};

const i18n = new VueI18n({
  locale: "en", // set locale
  messages,
  fallbackLocale: "vn"
});

export default {
  i18n,
  data() {
    return {
      currentLocale: i18n.locale
    };
  },
  watch: {
    currentLocale: function() {
      i18n.locale = this.currentLocale;
    }
  },
  methods: {}
};
</script>

<style>
</style>
