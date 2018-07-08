import Vue from 'vue'
import Router from 'vue-router'
import MyFormGenerator from './components/MyFormGenerator'
import HelloWorld from './components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloworld',
      component: HelloWorld
    },
    {
      path: '/formgenerator',
      name: 'myformgenerator',
      component: MyFormGenerator
    }
  ]
})