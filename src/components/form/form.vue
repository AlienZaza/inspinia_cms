<template>
  <div>
    <p v-html='$t("message.datagridresult")'>{{pageOptions.startRecord}}</p>
    <ag-grid-vue style="width: 100%;height: 300px" class="ag-fresh" :gridOptions="gridOptions" :columnDefs="columnDefs" :rowData="rowData" :showToolPanel="showToolPanel" :functionsReadOnly="true" :suppressContextMenu="true" :enableColResize="true" :enableSorting="true" :enableFilter="true" :groupHeaders="true" :suppressRowClickSelection="true" :toolPanelSuppressGroups="false" :toolPanelSuppressValues="true" rowHeight="48" rowSelection="multiple" :suppressToolPanel="true" :rowStyle="{'line-height':'48px','font-size':'13px'}" :modelUpdated="onModelUpdated" :cellClicked="onCellClicked" :cellDoubleClicked="onCellDoubleClicked" :cellContextMenu="onCellContextMenu" :cellValueChanged="onCellValueChanged" :cellFocused="onCellFocused" :rowSelected="onRowSelected" :selectionChanged="onSelectionChanged" :beforeFilterChanged="onBeforeFilterChanged" :afterFilterChanged="onAfterFilterChanged" :filterModified="onFilterModified" :beforeSortChanged="onBeforeSortChanged" :afterSortChanged="onAfterSortChanged" :virtualRowRemoved="onVirtualRowRemoved" :rowClicked="onRowClicked" :gridReady="onReady" :columnEverythingChanged="onColumnEvent" :columnRowGroupChanged="onColumnEvent" :columnValueChanged="onColumnEvent" :columnMoved="onColumnEvent" :columnVisible="onColumnEvent" :columnGroupOpened="onColumnEvent" :columnResized="onColumnEvent" :columnPinnedCountChanged="onColumnEvent">
    </ag-grid-vue>
  </div>
</template>
<script>
import Vue from "vue";
import { AgGridVue } from "ag-grid-vue";

export default {
  data() {
    return {
      gridOptions: null,
      columnDefs: null,
      rowData: null,
      showToolPanel: false,
      rowCount: null
    }
  },
  components: {
    'ag-grid-vue': AgGridVue
  },
  props: ['data','pageOptions'],
  methods: {
    createRowData() {
      const rowData = [];
      this.rowData = this.data;
    },
    filter() {

    },

    createColumnDefs() {
      this.columnDefs = [{
          headerName: '',
          width: 50,
          headerCheckboxSelection: true,
          checkboxSelection: true,
          suppressSorting: true,
          suppressMenu: true,
          pinned: true

        },
        {
          headerName: "标题",
          field: "textContent",
          width: 150,
          suppressMenu: true
          // menuTabs:['filterMenuTab','generalMenuTab','columnsMenuTab']
        },
        {
          headerName: "活动类型",
          field: "title",
          width: 150,
          suppressMenu: true
        },
        {
          headerName: "日期",
          field: "infoDate",
          width: 150,
          suppressMenu: true
        },
        {
          headerName: "状态",
          field: "statusText",
          width: 150,
          suppressMenu: true
        }
      ];
    },
    pad(num, totalStringSize) {
      let asString = num + "";
      while (asString.length < totalStringSize) asString = "0" + asString;
      return asString;
    },

    calculateRowCount() {
      if (this.gridOptions.api && this.rowData) {
        let model = this.gridOptions.api.getModel();
        let totalRows = this.rowData.length;
        let processedRows = model.getRowCount();
        this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
      }
    },

    onModelUpdated() {
      console.log('onModelUpdated');
      this.calculateRowCount();
    },

    onReady() {
      this.calculateRowCount();
    },

    onCellDoubleClicked(event) {
        this.$store.state.newsId = event.data.id;
        this.$emit('gotoDetail');
       console.log('onCellDoubleClicked: ' + event.data.id );
    },
    onRowSelected(event) {
        console.log('onRowSelected: ' + event.data.id );
    },
    
  },
  beforeMount() {
    this.gridOptions = {};
    this.createRowData();
    this.createColumnDefs();
  }
}

function skillsCellRenderer(params) {
  let data = params.data;
  let skills = [];
  RefData.IT_SKILLS.forEach(function(skill) {
    if (data && data.skills && data.skills[skill]) {
      skills.push('<img src="images/skills/' + skill + '.png" width="16px" title="' + skill + '" />');
    }
  });
  return skills.join(' ');
}

function countryCellRenderer(params) {
  let flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='images/flags/" + RefData.COUNTRY_CODES[params.value] + ".png'>";
  return flag + " " + params.value;
}

function createRandomPhoneNumber() {
  let result = '+';
  for (let i = 0; i < 12; i++) {
    result += Math.round(Math.random() * 10);
    if (i === 2 || i === 5 || i === 8) {
      result += ' ';
    }
  }
  return result;
}

function percentCellRenderer(params) {
  let value = params.value;

  let eDivPercentBar = document.createElement('div');
  eDivPercentBar.className = 'div-percent-bar';
  eDivPercentBar.style.width = value + '%';
  if (value < 20) {
    eDivPercentBar.style.backgroundColor = 'red';
  } else if (value < 60) {
    eDivPercentBar.style.backgroundColor = '#ff9900';
  } else {
    eDivPercentBar.style.backgroundColor = '#00A000';
  }

  let eValue = document.createElement('div');
  eValue.className = 'div-percent-value';
  eValue.innerHTML = value + '%';

  let eOuterDiv = document.createElement('div');
  eOuterDiv.className = 'div-outer-div';
  eOuterDiv.appendChild(eValue);
  eOuterDiv.appendChild(eDivPercentBar);

  return eOuterDiv;
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ag-cell {
  padding-top: 2px !important;
  padding-bottom: 2px !important;
}

label {
  font-weight: normal !important;
}

.div-percent-bar {
  display: inline-block;
  height: 100%;
  position: relative;
  z-index: 0;
}

.div-percent-value {
  position: absolute;
  padding-left: 4px;
  font-weight: bold;
  font-size: 13px;
  z-index: 100;
}

.div-outer-div {
  display: inline-block;
  height: 100%;
  width: 100%;
}

.ag-menu {
  z-index: 200;
}

</style>
