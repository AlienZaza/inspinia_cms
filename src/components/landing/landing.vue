<template>
    <div class="landing">
        
        
        <div id="wrapper" class="height-100">
    <div class="spiner-postion hide">
        <div class="sk-spinner sk-spinner-double-bounce">
            <div class="sk-double-bounce1"></div>
            <div class="sk-double-bounce2"></div>
        </div>
    </div>
    <!-- Navigation -->
    <leftnavbar></leftnavbar>

    <!-- Page wraper -->
    <!-- ng-class with current state name give you the ability to extended customization your view -->
    <div id="page-wrapper" class="gray-bg">

        <!-- Page wrapper -->
        <topnavbar></topnavbar>

        <!-- Main view  -->
        <router-view/>
        <div id='warning'></div>
        <div id='sessionTimeout'></div>
        <input id='sessionTimeoutMsg' type="hidden">
        <script type="text/ng-template" id="warningDlg.html">
            <div class="inmodal">
                <div class="modal-content animated fadeIn">
                    <div class="modal-header">
                        <button type="button" class="close" ><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <span class="text-warning"><i class="fa fa-exclamation-triangle modal-icon"></i></span>
                        <h4 class="modal-title">Warning</h4>
                    </div>
                    <div class="modal-body">
                        <p class="wrap">msg</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-block btn-primary">Cancel</button>
                    </div>
                </div>
            </div>
        </script>
        <!-- Footer -->
        <!-- <div ng-include="'pages/common/footer.html'"></div> -->

    </div>
    <!-- End page wrapper-->

</div>
        
    </div>
</template>

<script>
import inspinia from "@/common/js/inspinia.js"
import Topnavbar from "@/components/topnavbar/topnavbar"
import Leftnavbar from "@/components/leftnavbar/leftnavbar"
export default {
  name: 'Landing',
  data () {
    return {
      
    }
  },
  components: {
    "topnavbar" : Topnavbar,
    "leftnavbar" : Leftnavbar
  },
  methods:{
    SmoothlyMenu:function(){
        if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        $('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(
            function () {
                $('#side-menu').fadeIn(400);
            }, 200);
        } else if ($('body').hasClass('fixed-sidebar')) {
            $('#side-menu').hide();
            setTimeout(
                function () {
                    $('#side-menu').fadeIn(400);
                }, 100);
        } else {
            // Remove all inline style from jquery fadeIn function to reset menu state
            $('#side-menu').removeAttr('style');
        }
    }
  },
  mounted:function(){
    //alert(this.GLOBAL.form.userInfo.session)
    if ($(window).width() < 769) {
        $('body').addClass('mini-navbar')
    } else {
        $('body').removeClass('mini-navbar')
    }
    $('.navbar-minimalize').click(function () {
        $("body").toggleClass("mini-navbar");
        this.SmoothlyMenu();

    });
    $('#side-menu').metisMenu();
    if ($("body").hasClass('fixed-sidebar')) {
            $('.sidebar-collapse').slimScroll({
                height: '100%',
                railOpacity: '0.1',
                size: '0px'
            });
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .landing {
        background-color: #f3f3f4;
    }
</style>
