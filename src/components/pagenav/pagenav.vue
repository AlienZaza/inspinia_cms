<template>
  <div class="dataTables_paginate paging_simple_numbers text-right" id="DataTables_Table_2_paginate">
    <ul class="pagination">
      <li class="paginate_button previous" id="DataTables_Table_2_previous"><a @click="seekPage(pageOptions.currentPage-1)">{{$t("message.Page_Pre")}}</a></li>
      <li v-bind:class="[paginate_button, {active: page == pageOptions.currentPage}]" v-for="page in pageOptions.totalPage"><a @click="seekPage(page)">{{page}}</a></li>
      <li class="paginate_button next" id="DataTables_Table_2_next"><a @click="seekPage(pageOptions.currentPage+1)">{{$t("message.Page_Next")}}</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'pagenav',
  data() {
    return {

    }
  },
  props: ['pageOptions','data'],
  methods: {
    // seekPage(page){
    //   this.$emit('seekPage');
    // }
    seekPage(page) {
      if (page != 0 && page != this.pageOptions.totalPage.length + 1) {
        this.pageOptions.startRecord = this.pageOptions.maxRecord * (page - 1)
        this.pageOptions.currentPage = page;
        this.data.splice(0, this.data.length)
        //this.getPage();
        this.$emit('getPage');
      }
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
