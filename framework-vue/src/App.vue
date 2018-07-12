<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <nav class="navbar navbar-default">
      <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li><router-link to="/helloworld">Hello World</router-link></li>
      <li><router-link to="/formgenerator">Vue Form Generator</router-link></li>
      <li><router-link to="/multiselect">Vue Multi Select</router-link></li>
      <li><router-link to="/i18n">Vue I18N</router-link></li>
      <li><router-link to="/filebase64">Vue base64</router-link></li>
      <li><router-link to="/vuetab">Vue Tab</router-link></li>
      <li><router-link to="/fullloading">Vue Loading</router-link></li>
      <li><router-link to="/formwizard">Vue Form-Wizard</router-link></li>
    </ul>
  </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted(){
    this.$nextTick(() => {
      $(".nav.navbar-nav li").click(function(){
        if($('.nav.navbar-nav li').hasClass('active')){
          $('.nav.navbar-nav li').removeClass('active');
        }
        $(this).addClass('active');
      });
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
.help-block {
  color: red;
}
</style>
