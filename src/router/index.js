import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Landing from '@/components/landing/landing'
import NewsList from '@/components/newsList/newsList'
import NewsDetail from '@/components/newsDetail/newsDetail'
import AcountList from '@/components/acountList/acountList'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/landing',
      name: 'landing',
      component: Landing,
      children: [{
          path: '/landing/newsList',
          name: 'newsList',
          component: NewsList
        },
        {
          path: '/landing/newsDetail',
          name: 'newsDetail',
          component: NewsDetail
        },
        {
          path: '/landing/acountList',
          name: 'acountList',
          component: AcountList
        },
      ]
    }
  ]
})
