<template>
  <div class="app-container">
    
        <el-button style="margin:0 0 20px 20px;" type="primary" icon="el-icon-document" @click="handleDownload2">
        {{ $t('excel.export') }} Excel
      </el-button>

    <el-table :data="list" border fit highlight-current-row style="width: 100%" >
      <el-table-column align="center" label="序列" width="80px">
        <template slot-scope="scope">
          <span >{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100px" align="center" label="外网地址">
        <template slot-scope="scope">
          <span>{{ scope.row.network }}</span>
        </template>
      </el-table-column>

          <el-table-column min-width="100px" align="center" label="内网地址">
        <template slot-scope="scope">
          <span>{{ scope.row.localhost }}</span>
        </template>
      </el-table-column>

       <el-table-column min-width="100px" align="center" label="注释">
        <template slot-scope="scope">
          <span>{{ scope.row.expl }}</span>
        </template>
      </el-table-column>

       <el-table-column :label="$t('table.actions')" align="center" width="250px" class-name="small-padding fixed-width">
        <template slot-scope="scope">
           <!-- //编辑 -->
          <el-button type="primary" size="mini" @click="edit(scope.row.id)">
            {{ $t('table.edit') }} 
          </el-button>
             <!-- //删除    -->
          <el-button size="mini" type="danger" @click="open(scope.row.id)">
            {{ $t('table.delete') }}
          </el-button>
           <el-button size="mini" type="success" @click="download(scope.row.id)">
           下载
          </el-button>
        </template>
      </el-table-column>


    </el-table>
    
  </div>
</template>

<script>
let change=1;
export default {
  name: 'holidayout',

  data() {
    return { 
      
      e :1,
      page: {
        total: 0,
        current: 1,
        size: 20
      },
      
        cname:'',
        stext:'',
        searchKey:"",
      dialogFormVisible: false,
      formLabelWidth: "80px",
      form: {},
      list: [
    {
      
    }
],
      listLoading: true,

    }
  },



  created() {

    this.fetchData()
  },
  methods: {
        getKey(e){
      this.searchKey = e
    },


      edit(id){
     
        
        this.$router.push("/interfaceedit/index/"+id)
      
      },
            handleSizeChange(val) {
               var vm=this;
               
       
               vm.fetchData(val)
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
         var vm=this;
        
              change=val;
              console.log(change);
               vm.fetchData(val)
        console.log(`当前页: ${val}`);
      },
      

    
      fetchData(){
        var vm=this;
        this.axios({
          method: "GET",
          url: "http://106.13.30.60:8089/scan/find"

        }).then(function(resp){

          vm.list=resp.data
          console.log(vm.list)
        });

        
      },
      
  //打开弹窗，提示删除情况
      open(id) {

        var vm=this;
      
    
              
              vm.$message.error('这是系统的基础功能,无法删除');
         
            

      },

      //下载二维码图片
      download(id){
        var vm=this;
          this.axios({
          method: "GET",
          url: "http://106.13.30.60:8089/resp/download/"+id,
          responseType: 'blob'

        }).then(function(resp){
        const url = window.URL.createObjectURL(new Blob([resp.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', '二维码图片.png');
        document.body.appendChild(link);
        link.click();

        });
   

           
      },
    //导出zip操作
     handleDownload() {
       var vm =this;
      this.downloadLoading = true
      import('@/vendor/Export2Zip').then(zip => {
        const tHeader = ['序列','姓名','性别','学号','院系','体温','出行时间','离校时间','出行方式','出发地点','目的地','车次','是否经过风险地区','填写时间']
        const filterVal = ['id','name','sex','card','depart','temp','gate','wate','travel','place','destination','train','risk','writetime']
        const list = this.list
        const data = this.formatJson(filterVal, list)
        zip.export_txt_to_zip(tHeader, data, vm.stext, this.stext)
        vm.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
    handleDownload2() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['序列','外网地址','内网地址','注释']
        const filterVal = ['id','network','localhost','expl']
        const list = this.list
        const data = this.formatJson2(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType
        })
        this.downloadLoading = false
      })
    },
    formatJson2(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }


      },
  
}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
