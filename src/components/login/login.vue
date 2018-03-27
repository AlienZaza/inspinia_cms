<template>
    <div class="login">
        <div class="gray-bg">
            <div class="middle-box text-center loginscreen animated fadeInDown">
                <div>
                    <div>
                        <h1 class="logo-name">IN+</h1>
                    </div>
                    <h3>Welcome to IN+</h3>
                
                    <form class="m-t" role="form">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Username" v-model="userName">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Password" v-model="password">
                        </div>
                        <div class="btn btn-primary block full-width m-b" @click="loginSubmit()">Login</div>

                        <a href="#"><small>Forgot password?</small></a>
                        <p class="text-muted text-center"><small>Do not have an account?</small></p>
                        <a class="btn btn-sm btn-white btn-block" href="register.html">Create an account</a>
                    </form>
                    <p id="m-t"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>
                 </div>
            </div>
        </div>
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
    loginSubmit:function(){
        var postData = {
            userName:this.userName,
            lang:this.$i18n.locale,
            password:this.password
        };

        var postHeaders = {'Content-Type': 'text/xml'}

        this.$http.post('/api/login', postData,{emulateJSON: true}).then(function(response){
            // 响应成功回调
            this.$store.state.userInfo = response.data.result;
            this.$store.state.userInfo.lang = this.$i18n.locale;
            localStorage.setItem('userInfo',JSON.stringify(this.$store.state.userInfo))
            // this.GLOBAL.form.userInfo = {}
            // this.GLOBAL.form.userInfo.isAdmin = response.data.result.isAdmin;
            // this.GLOBAL.form.userInfo.session = response.data.result.session;
            // this.GLOBAL.form.userInfo.systemUserId = response.data.result.systemUserId;
            // this.GLOBAL.form.userInfo.userName = response.data.result.userName;
            // this.GLOBAL.form.userInfo.langCode = this.$i18n.locale;
            // localStorage.setItem('global',JSON.stringify(this.GLOBAL.form))
            this.$router.push({ path : 'landing'})
        }, function(response){
            // 响应错误回调
        });
        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login {
        height: 100%;
    }
    .gray-bg {
        height: 100%;
    }
</style>
