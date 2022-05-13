<template>
  <el-table
    :data="news"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="title"
      label="疫情最新消息"
      width="180">
    </el-table-column>
    <el-table-column
      prop="pubDateStr"
      label="发布时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="summary"
      label="内容摘要"
      min-width="180">
    </el-table-column>
    <el-table-column
      prop="infoSource"
       min-width="80"
      label="来自">
    </el-table-column>
        <el-table-column
      prop="sourceUrl"
      label="数据详情">
    </el-table-column>
  </el-table>
</template>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

<script>
  export default {

     created() {
    this.fetchData()
  },
    
    methods: {

        dakai(){
          var vm=this;
          window.open(vm.news.sourceUrl)
        },
        fetchData(){
        var vm=this;
        this.axios({
          method: "GET",
          url: "http://106.13.30.60:8089/covid/news"

        }).then(function(resp){

          vm.news=resp.data[0].news
          console.log(vm.list
          
          )
        });
        
        
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        news: [{
          date: '2016-05-02',
          name: '王小虎',
          sourceUrl: '',
        }]
      }
    }
  }
</script>