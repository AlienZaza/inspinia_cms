<template>
  <div>
    <div class="row wrapper border-bottom white-bg page-heading">
      <div class="col-sm-8">
        <h2>eventInfo</h2>
        <ol class="breadcrumb">
          <li>
            <a @click="cancel()">eventList</a>
          </li>
          <li class="active">
            <strong>eventInfo</strong>
          </li>
        </ol>
      </div>
    </div>
    <div class="tabs-container" style="padding-bottom:50px;margin-top:18px;">
      <div class="tab-content">
        <div id="tab-1" class="tab-pane active">
          <div class="panel-body">
            <div class="row form-horizontal">
              <form id="eventInfo">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label class="col-sm-2 control-label">eventhkType</label>
                    <div class="col-sm-10">
                      <div>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label">eventcnType</label>
                    <div class="col-sm-10">
                      <div>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label">translate</label>
                    <div class="col-sm-10">
                      <div>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label">cnTitle</label>
                    <div class="col-sm-10">
                      <div>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label">hkSite</label>
                    <div class="col-sm-10">
                      <div>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                  </div>
                  <!-- <v-datepicker></v-datepicker> -->
                  <div class="form-group">
                    <label class="col-sm-2 control-label">cnSite</label>
                    <div class="col-sm-10">
                      <div>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label"> Image</label>
                    <div class="col-sm-10">
                      <div class="input-group img-group">
                        <div id="uploadBtn3" class="text-center dropzone logo">
                          <input id="input" class="upload-file img-file-m" type="file" accept="image/*" @click="prepareUploadImg('input','img',uploadFinish,{$event: $event}, {width:360, height:360,size:1024*1024,label:'1mb'},1)">
                          <div class="addImage" style="width: 100%">
                            <a class="addImageIcon btn btn-primary btn-circle"><i class="fa fa-plus"></i></a>
                            <p class="text-primary m-t-sm font14 suggestFont">360*360像素, 最大1 mb, jpg/png</p>
                          </div>
                          <div class="editImage">
                            <div class="mask-bg"></div>
                            <img id="img">
                            <div class="icon-center">
                              <span class="edit-icon"><i class="fa fa-pencil"></i></span>
                              <p class="text-primary font14 font-white editFont">modify</p>
                              <p class="text-primary m-t-sm font14 font-white suggestFont">360*360像素, 最大1 mb, jpg/png</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <v-datepicker-simple></v-datepicker-simple> -->
                  <input type="text" @click="openByDrop($event)" v-model="calendar3.display" readonly>
                  <transition name="fade">
                    <div class="calendar-dropdown" :style="{'left':calendar3.left+'px','top':calendar3.top+'px'}" v-if="calendar3.show">
                      <v-calendar :zero="calendar3.zero" :lunar="calendar3.lunar" :value="calendar3.value" :begin="calendar3.begin" :end="calendar3.end" @select="calendar3.select"></v-calendar>
                    </div>
                  </transition>
                  <div class="form-group">
                    <label class="col-sm-2 control-label">URL</label>
                    <div class="col-sm-4">
                      <div>
                        <input type="text" class="form-control">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label">Status</label>
                    <div class="col-sm-3">
                      <div>
                        <select class="form-control">
                          <option value="1">Active</option>
                          <option value="0" selected="selected">Inactive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import datepickerSimple from '@/components/smallComponents/datepicker-simple'
//import datepicker from '@/components/smallComponents/datepicker'
import Calendar from '@/components/smallComponents/calendar.vue'

export default {
  name: 'newsDetail',
  data() {
    return {
      calendar3:{
                display:"2018/02/16",
                show:false,
                zero:true,
                value:[2018,2,16], //默认日期
                lunar:false, //显示农历
                select:(value)=>{
                    this.calendar3.show=false;
                    this.calendar3.value=value;
                    this.calendar3.display=value.join("/");
                }
            }
    }
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
    openByDrop(e){
            this.calendar3.show=true;
            this.calendar3.left=e.target.offsetLeft+19;
            this.calendar3.top=e.target.offsetTop+70;
           
            e.stopPropagation();
            window.setTimeout(()=>{
                document.addEventListener("click",(e)=>{
                    this.calendar3.show=false;
                    document.removeEventListener("click",()=>{},false);
                },false);
            },1000)
        }
  },
  components: {
    // 'v-datepicker-simple': datepickerSimple,
    //'v-datepicker': datepicker
    'v-calendar': Calendar
  },
  mounted: function() {

  },
  created: function() {

  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
