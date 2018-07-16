// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import MyFormGenerator from './components/MyFormGenerator'
import HelloWorld from './components/HelloWorld'
import MyMultipleSelect from './components/MyMultipleSelect'
import MyVueI18n from './components/MyVueI18n'
import MyFileBase64 from './components/MyFileBase64'
import MyVueTab from './components/MyVueTab'
import MyFullLoading from './components/MyFullLoading'
import MyFormWizard from './components/MyFormWizard'

Vue.component("multiselect", VueMultiselect.default); // All Component can use this component

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/helloworld',
      name: 'helloworld',
      component: HelloWorld
    },
    {
      path: '/formgenerator',
      name: 'myformgenerator',
      component: MyFormGenerator
    },
    {
      path: '/multiselect',
      name: 'mymultiselect',
      component: MyMultipleSelect
    },
    {
      path: '/i18n',
      name: 'myi18n',
      component: MyVueI18n
    },
    {
      path: '/filebase64',
      name: 'filebase64',
      component: MyFileBase64
    },
    {
      path: '/vuetab',
      name: 'vuetab',
      component: MyVueTab
    },
    {
      path: '/fullloading',
      name: 'fullloading',
      component: MyFullLoading
    },
    {
      path: '/formwizard',
      name: 'formwizard',
      component: MyFormWizard
    }
  ]
});


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})