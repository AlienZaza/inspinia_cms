<template>
    <div class="leftnavbar">
        <nav class="navbar-default navbar-static-side" role="navigation">
            <div class="sidebar-collapse">
            <!-- <div class="dropdown profile-element" dropdown>
                <a class="dropdown-toggle" dropdown-toggle href>
                    <span class="clear" style="font-size:40px;text-align:center">
                        KP+
                    </span>
                </a>
            </div> -->
                <div class="logo-element">
                    KP+
                </div>
                <ul side-navigation class="nav metismenu" id="side-menu">
                <!-- <li ui-sref-active="active" ng-repeat="menu in form.functionList" on-last-repeat>
                    <a ng-if="menu.children" ui-sref="layouts"><i class="fa {{menu.icon}}"></i> <span class="nav-label">{{menu.funcName}}</span>  <span class="fa arrow"></span></a>
                    <a ng-if="!menu.children" ui-sref="layouts" ng-click="gotoUrl(menu.webInfo)"><i class="fa {{menu.icon}}"></i> <span class="nav-label">{{menu.funcName}}</span>  </a>
                    <ul ng-if="menu.children" class="nav nav-second-level collapse" ng-class="{in: $state.includes('dashboards')}">
                        <li ui-sref-active="active" ng-repeat="menu2item in menu.children">
                            <a ng-click="gotoUrl(menu2item.webInfo)" ng-if="!menu2item.children">{{ menu2item.funcName}} <span class="label label-warning pull-right" ng-if="menu2item.funcCode == 'INBOX'">{{form.getNotificationNum}}</span></a>
                            <a href="" ng-if="menu2item.children">{{ menu2item.funcName}}<span class="fa arrow"></span></a>
                            <ul class="nav nav-third-level">
                                <li ng-repeat="menu3item in menu2item.children">
                                    <a ng-click="gotoUrl(menu3item.webInfo)">{{menu3item.funcName}}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li> -->
                <li ui-sref-active="active">
                    <a ui-sref="layouts"><i class="fa"></i> <span class="nav-label">News management</span>  </a>
                    <ul class="nav nav-second-level collapse">
                        <li ui-sref-active="active">
                            <a @click="gotoUrl('/landing/newsList')">News list</a>
                        </li>
                    </ul>
                </li>
                <li ui-sref-active="active">
                    <a ui-sref="layouts"><i class="fa"></i> <span class="nav-label">Acount management</span>  </a>
                    <ul class="nav nav-second-level collapse">
                        <li ui-sref-active="active">
                            <a @click="gotoUrl('/landing/acountList')">Acount list</a>
                        </li>
                    </ul>
                </li>
                <li ui-sref-active="active">
                    <a ui-sref="layouts"><i class="fa"></i> <span class="nav-label">Acount management</span>  </a>
                    <ul class="nav nav-second-level collapse">
                        <li ui-sref-active="active">
                            <a @click="gotoUrl('/landing/acountList')">Acount list</a>
                        </li>
                    </ul>
                </li>
                <li ui-sref-active="active">
                    <a ui-sref="layouts"><i class="fa"></i> <span class="nav-label">Acount management</span>  </a>
                    <ul class="nav nav-second-level collapse">
                        <li ui-sref-active="active">
                            <a @click="gotoUrl('/landing/acountList')">Acount list</a>
                        </li>
                    </ul>
                </li>
                <li ui-sref-active="active">
                    <a ui-sref="layouts"><i class="fa"></i> <span class="nav-label">Acount management</span>  </a>
                    <ul class="nav nav-second-level collapse">
                        <li ui-sref-active="active">
                            <a @click="gotoUrl('/landing/acountList')">Acount list</a>
                        </li>
                    </ul>
                </li>
                <li ui-sref-active="active">
                    <a ui-sref="layouts"><i class="fa"></i> <span class="nav-label">Acount management</span>  </a>
                    <ul class="nav nav-second-level collapse">
                        <li ui-sref-active="active">
                            <a @click="gotoUrl('/landing/acountList')">Acount list</a>
                        </li>
                    </ul>
                </li>
                <li ui-sref-active="active">
                    <a ui-sref="layouts"><i class="fa"></i> <span class="nav-label">Acount management</span>  </a>
                    <ul class="nav nav-second-level collapse">
                        <li ui-sref-active="active">
                            <a @click="gotoUrl('/landing/acountList')">Acount list</a>
                        </li>
                    </ul>
                </li>
                <li ui-sref-active="active">
                    <a ui-sref="layouts"><i class="fa"></i> <span class="nav-label">Acount management</span>  </a>
                    <ul class="nav nav-second-level collapse">
                        <li ui-sref-active="active">
                            <a @click="gotoUrl('/landing/acountList')">Acount list</a>
                        </li>
                    </ul>
                </li>
                <li ui-sref-active="active">
                    <a ui-sref="layouts"><i class="fa"></i> <span class="nav-label">Acount management</span>  </a>
                    <ul class="nav nav-second-level collapse">
                        <li ui-sref-active="active">
                            <a @click="gotoUrl('/landing/acountList')">Acount list</a>
                        </li>
                    </ul>
                </li>
                <li ui-sref-active="active">
                    <a ui-sref="layouts"><i class="fa"></i> <span class="nav-label">Acount management</span>  </a>
                    <ul class="nav nav-second-level collapse">
                        <li ui-sref-active="active">
                            <a @click="gotoUrl('/landing/acountList')">Acount list</a>
                        </li>
                    </ul>
                </li>
                <li ui-sref-active="active">
                    <a ui-sref="layouts"><i class="fa"></i> <span class="nav-label">Acount management</span>  </a>
                    <ul class="nav nav-second-level collapse">
                        <li ui-sref-active="active">
                            <a @click="gotoUrl('/landing/acountList')">Acount list</a>
                        </li>
                    </ul>
                </li>
                <li ui-sref-active="active">
                    <a ui-sref="layouts"><i class="fa"></i> <span class="nav-label">Acount management</span>  </a>
                    <ul class="nav nav-second-level collapse">
                        <li ui-sref-active="active">
                            <a @click="gotoUrl('/landing/acountList')">Acount list</a>
                        </li>
                    </ul>
                </li>
                <li ui-sref-active="active">
                    <a ui-sref="layouts"><i class="fa"></i> <span class="nav-label">Acount management</span>  </a>
                    <ul class="nav nav-second-level collapse">
                        <li ui-sref-active="active">
                            <a @click="gotoUrl('/landing/acountList')">Acount list</a>
                        </li>
                    </ul>
                </li>
                <li ui-sref-active="active">
                    <a ui-sref="layouts"><i class="fa"></i> <span class="nav-label">Acount management</span>  </a>
                    <ul class="nav nav-second-level collapse">
                        <li ui-sref-active="active">
                            <a @click="gotoUrl('/landing/acountList')">Acount list</a>
                        </li>
                    </ul>
                </li>
                <li ui-sref-active="active">
                    <a ui-sref="layouts"><i class="fa"></i> <span class="nav-label">Acount management</span>  </a>
                    <ul class="nav nav-second-level collapse">
                        <li ui-sref-active="active">
                            <a @click="gotoUrl('/landing/acountList')">Acount list</a>
                        </li>
                    </ul>
                </li>
                <li ui-sref-active="active">
                    <a ui-sref="layouts"><i class="fa"></i> <span class="nav-label">Acount management</span>  </a>
                    <ul class="nav nav-second-level collapse">
                        <li ui-sref-active="active">
                            <a @click="gotoUrl('/landing/acountList')">Acount list</a>
                        </li>
                    </ul>
                </li>
                <li ui-sref-active="active">
                    <a ui-sref="layouts"><i class="fa"></i> <span class="nav-label">Last</span>  </a>
                    <ul class="nav nav-second-level collapse">
                        <li ui-sref-active="active">
                            <a @click="gotoUrl('/landing/acountList')">Acount list</a>
                        </li>
                    </ul>
                </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    gotoUrl:function(url){
        this.$router.push({ path : url})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    nav {
        margin-top: 60px;
        background-color: #ffffff;
        height: 100%;
    }
    /*#side-menu::scrollbar {
        width: 0px;
    }
    .sidebar-collapse::scrollbar {
      width: 0px;
    }
    .navbar-default::scrollbar {
      width: 0px;
    }
    *::scrollbar {
      width: 0px;
    }*/
</style>
