<template>
  <div class="topnavbar">
    <div class="row border-bottom">
      <nav class="navbar navbar-static-top navbar-fixed-top" role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
          <span minimaliza-sidebar></span>
          <span minimaliza-sidebar=""><a class="navbar-minimalize minimalize-styl-2 btn btn-primary "><i class="fa fa-bars"></i></a></span>
        </div>
        <ul class="nav navbar-top-links navbar-right">
          <li class="dropdown">
            <a class="dropdown-toggle count-info" data-toggle="dropdown">
                    {{$t("message.Language")}}
                </a>
            <ul class="dropdown-menu animated fadeInRight m-t-xs">
              <li><a @click="changeLanguage('en_US')">{{$t("message.English")}}</a></li>
              <li><a @click="changeLanguage('zh_HK')">{{$t("message.TraditionalChinese")}}</a></li>
              <li><a @click="changeLanguage('zh_CN')">{{$t("message.SimplifiedChinese")}}</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                        <i class="fa fa-envelope"></i>  <span class="label label-warning">16</span>
                    </a>
            <ul class="dropdown-menu dropdown-messages">
              <li>
                <div class="dropdown-messages-box">
                  <a href="profile.html" class="pull-left">
                                    <img alt="image" class="img-circle" src="img/a7.jpg">
                                </a>
                  <div class="media-body">
                    <small class="pull-right">46h ago</small>
                    <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>.
                    <br>
                    <small class="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>
                  </div>
                </div>
              </li>
              <li class="divider"></li>
              <li>
                <div class="dropdown-messages-box">
                  <a href="profile.html" class="pull-left">
                                    <img alt="image" class="img-circle" src="img/a4.jpg">
                                </a>
                  <div class="media-body ">
                    <small class="pull-right text-navy">5h ago</small>
                    <strong>Chris Johnatan Overtunk</strong> started following <strong>Monica Smith</strong>.
                    <br>
                    <small class="text-muted">Yesterday 1:21 pm - 11.06.2014</small>
                  </div>
                </div>
              </li>
              <li class="divider"></li>
              <li>
                <div class="dropdown-messages-box">
                  <a href="profile.html" class="pull-left">
                                    <img alt="image" class="img-circle" src="img/profile.jpg">
                                </a>
                  <div class="media-body ">
                    <small class="pull-right">23h ago</small>
                    <strong>Monica Smith</strong> love <strong>Kim Smith</strong>.
                    <br>
                    <small class="text-muted">2 days ago at 2:30 am - 11.06.2014</small>
                  </div>
                </div>
              </li>
              <li class="divider"></li>
              <li>
                <div class="text-center link-block">
                  <a href="mailbox.html">
                                    <i class="fa fa-envelope"></i> <strong>Read All Messages</strong>
                                </a>
                </div>
              </li>
            </ul>
          </li>
          <li class="dropdown" dropdown>
          </li>
          <li class="dropdown" dropdown>
            <ul class="dropdown-menu dropdown-alerts">
              <li>
                <a ui-sref="inbox">
                  <div>
                    <i class="fa fa-envelope fa-fw"></i> You have 16 messages
                    <span class="pull-right text-muted small">4 minutes ago</span>
                  </div>
                </a>
              </li>
              <li class="divider"></li>
              <li>
                <a ui-sref="profile">
                  <div>
                    <i class="fa fa-twitter fa-fw"></i> 3 New Followers
                    <span class="pull-right text-muted small">12 minutes ago</span>
                  </div>
                </a>
              </li>
              <li class="divider"></li>
              <li>
                <a ui-sref="grid_options">
                  <div>
                    <i class="fa fa-upload fa-fw"></i> Server Rebooted
                    <span class="pull-right text-muted small">4 minutes ago</span>
                  </div>
                </a>
              </li>
              <li class="divider"></li>
              <li>
                <div class="text-center link-block">
                  <a ui-sref="miscellaneous.notify">
                                <strong>See All Alerts</strong>
                                <i class="fa fa-angle-right"></i>
                            </a>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <span style="color: white">
                    Alien
                </span>
          </li>
          <li>
            <a @click="logOut()">
                    <i class="fa fa-sign-out"></i>LogOut
                </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: 'topnavbar',
  data() {
    return {

    }
  },
  methods: {
    logOut() {
      this.GLOBAL.form = {};
      localStorage.clear();
      this.$router.push({ path: '/login' })
    },
    changeLanguage(input) {
      this.$i18n.locale = input;
      this.$store.state.userInfo.lang = this.$i18n.locale;
      localStorage.setItem('userInfo',JSON.stringify(this.$store.state.userInfo))
      location.reload();

    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  background-color: #1ab394;
}

</style>
