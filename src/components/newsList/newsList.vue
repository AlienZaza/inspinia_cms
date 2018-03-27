<template>
  <div class="newsList">
    <div class="row wrapper border-bottom white-bg page-heading">
      <div class="col-sm-10">
        <h2 @click='gotoDetail()'>{{$t("message.EventList")}}</p></h2>
        <ol class="breadcrumb">
          <li>
            <a>{{$t("message.EventManagement")}}</a>
          </li>
          <li class="active">
            <strong>{{$t("message.EventList")}}</strong>
          </li>
        </ol>
      </div>
      <div class="col-sm-2">
      </div>
    </div>
    <div class="wrapper wrapper-content animated fadeInRight">
      <div class="ibox-content m-b-sm border-bottom">
        <div class="row form-horizontal">
          <div class="form-group">
            <label class="col-sm-2 control-label">{{$t("message.searchStatus")}}</label>
            <div class="col-sm-3">
              <select id='select' class="form-control" v-model='status'>
                <option value=''>--- {{$t("message.pleaseSelect")}} ---</option>
                <option value="1" selected>{{$t("message.Active")}}</option>
                <option value="0">{{$t("message.Inactive")}}</option>
              </select>
            </div>
            <label class="col-sm-1 control-label">{{$t("message.searchTitle")}}</label>
            <div class="col-sm-2">
              <input class="form-control input" type="text" v-model="textContent">
            </div>
            <div class="col-sm-4 text-center">
              <div class="">
                <button class="btn btn btn-primary" @click='search()'>
                  {{$t("message.Search")}}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="ibox float-e-margins">
            <div class="ibox-content">
              <!-- <p class="text-center">eventLimitText</p> -->
              <v-form :data='formdata' :pageOptions='pageOptions' @gotoDetail='gotoDetail'></v-form>
              <v-pagenav :data='formdata' :pageOptions='pageOptions' @getPage='getPage'></v-pagenav>
              <v-button></v-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Form from '@/components/form/form'
import pagenav from '@/components/pagenav/pagenav'
import button from '@/components/button/button'

export default {
  name: 'newsList',
  data() {
    return {
      formdata: [],
      pageOptions: {
        startRecord: 0, //从第几条开始
        maxRecord: 8, //最多查几条
        endRecord: Number,
        totalPage: [], //总共有多少页
        currentPage: 1 //当前第几页
      },
      status: "",
      textContent: "",
      startItem: null,
      endItem: null,
      totalItems: null
    }
  },
  components: {
    'v-form': Form,
    'v-pagenav': pagenav,
    'v-button': button
  },
  methods: {
    getPage() {
      var postData = {
        session: this.$store.state.userInfo.session,
        userId: this.$store.state.userInfo.systemUserId,
        lang: this.$store.state.userInfo.lang,
        startRow: this.pageOptions.startRecord,
        maxRows: this.pageOptions.maxRecord,
        sortType: 'DESC',
        sortField: 'id',
        status: this.status,
        textContent: this.textContent
      };

      this.$http.post('/api/listEvent', postData, { emulateJSON: true }).then(function(response) {
        // 响应成功回调
        // if (this.pageOptions.totalPage.length == 0) {

        this.formdata.splice(0, this.formdata.length);
        this.pageOptions.totalPage.splice(0, this.pageOptions.totalPage.length);
        for (var i = 0; i < Math.ceil(response.data.totalRows / this.pageOptions.maxRecord); i++) {
          this.pageOptions.totalPage.push(i + 1)
        }
        //}

        for (var i = 0; i < response.data.resultList.length; i++) {
          this.formdata.push(response.data.resultList[i]);
        }
        for (var i = 0; i < this.formdata.length; i++) {
          if (this.formdata[i].status == 0) {
            this.formdata[i].statusText = this.$t("message.Inactive");
          } else if (this.formdata[i].status == 1) {
            this.formdata[i].statusText = this.$t("message.Active");
          }
        }
        this.startItem = this.pageOptions.startRecord + 1;
        this.endItem = this.pageOptions.startRecord + this.pageOptions.maxRecord;
      }, function(response) {
        // 响应错误回调
      });
    },
    seekPage(page) {
      if (page != 0 && page != this.pageOptions.totalPage.length + 1) {
        this.pageOptions.startRecord = this.pageOptions.maxRecord * (page - 1)
        this.pageOptions.currentPage = page;
        this.getPage();
      }
    },
    search() {
      this.pageOptions.startRecord = 0;
      this.pageOptions.currentPage = 1;
      this.getPage();
    },
    gotoDetail() {
      this.$router.push({ path: '/landing/newsDetail' })
    }
  },

  mounted: function() {

  },
  created: function() {
    this.getPage();
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
