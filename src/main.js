// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import global_ from './Global'
import VueResource from 'vue-resource'
import $ from 'jquery'
import "./common/style/bootstrap.min.css"
import "./common/style/animate.css"
import "./common/style/base.css"
import "./common/style/icon.css"
import "./common/style/mixin.css"
import "./common/font-awesome/css/font-awesome.css"
import "./common/style/ag-grid.css"
import "./common/style/ag-theme-bootstrap.css"

//vuex
import store from './store'

//transition module
import VueI18n from 'vue-i18n'
import LangEnUS from '../static/lang/en_US'
import LangZhCN from '../static/lang/zh_CN'
import LangZhHK from '../static/lang/zh_HK'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: (JSON.parse(localStorage.getItem('userInfo'))) ? (JSON.parse(localStorage.getItem('userInfo')).lang) : 'en_US',
  messages: {
    'en_US': LangEnUS,
    'zh_CN': LangZhCN,
    'zh_HK': LangZhHK
  }
})
//this.$i18n.locale = (JSON.parse(localStorage.getItem('userInfo')).lang) ? (JSON.parse(localStorage.getItem('userInfo')).lang) : 'en_US'

import bootstrap from "./common/js/bootstrap.min.js"
import plugins from "./common/js/plugins-index.js" //all plugins
import "ag-grid-enterprise/main";

Vue.config.productionTip = false
Vue.prototype.GLOBAL = global_

Vue.use(VueResource)

/* eslint-disable no-new */



new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>',
  method: {

  },
  mounted: function() {

  },
  created: function() {
    // if (JSON.parse(localStorage.getItem('global'))) {
    //   this.GLOBAL.form = JSON.parse(localStorage.getItem('global'));
    //   this.$i18n.locale = this.GLOBAL.form.userInfo.langCode;
    // }
    if (JSON.parse(localStorage.getItem('userInfo'))) {
      this.$store.state.userInfo = JSON.parse(localStorage.getItem('userInfo'));
      this.$i18n.locale = this.$store.state.userInfo.lang;
    }
  }
})
