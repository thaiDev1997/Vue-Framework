<template>
    <div class="container">
  <div class="row">
    <div class="col-md-6">
      <p>{{ $t("common.select_lang") }} : {{ $t("language") }}</p>
      <select v-model="currentLocale">
            <option disabled value="">Please select one</option>
            <option value="vn">Tiếng Việt</option>
            <option value="en">English</option>
        </select>
    </div>
    <div class="col-md-6" style="font-size: 12px !important">
      <p>Ngày Ngắn : {{ $d(new Date(), 'short', currentLocale) }}</p>
      <p>Ngày Dài : {{ $d(new Date(), 'long', currentLocale) }}</p>
      <p>Tiền : {{ $n(100, 'currency', currentLocale) }}</p>
    </div>
  </div>
  <hr/>
  <div class="col-md-6">
    <form class="form-horizontal" action="#">
      <div class="form-group">
        <h3 class="col-md-offset-5">{{ $t("login.title") }}</h3>
        <br/>
        <label class="control-label col-sm-4" for="email">{{ $t("login.input_text.email") }}:</label>
        <div class="col-sm-8">
          <input type="email" class="form-control" id="email" :placeholder="$t('login.input_text.entryEmail')">
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4" for="pwd">{{ $t("login.input_text.password") }}:</label>
        <div class="col-sm-8">
          <input type="password" class="form-control" id="pwd" :placeholder="$t('login.input_text.entryPassword')">
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
          <button type="button" class="btn btn-success">{{ $t("login.buttons.login") }}</button>
        </div>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import Vue from "vue";
import { messages, dateTimeFormats, numberFormats } from "../lang/i18n.js";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en", // set locale
  messages,
  dateTimeFormats,
  numberFormats,
  fallbackLocale: "vi"
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
hr {
  margin-top: 10px !important;
}
</style>
