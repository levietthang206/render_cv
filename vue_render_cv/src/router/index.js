import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RenderCV from '@/components/RenderCV'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
      {
          path: '/render-cv',
          name: 'RenderCV',
          component: RenderCV
      }
  ]
})
