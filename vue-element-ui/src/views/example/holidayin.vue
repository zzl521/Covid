<template>
  <div class="app-container">
      
  <el-input placeholder="请输入内容" v-model="stext" class="input-with-select" style="width:40%"/>
    <el-select v-model="cname" slot="prepend" placeholder="请选择" @change="getKey">
      <el-option label="姓名" value="name"></el-option>
      <el-option label="学号" value="card"></el-option>
      <el-option label="风险地区" value="risk"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search" @click="search()"></el-button>
    <el-button style="margin-bottom:20px;" type="primary" icon="el-icon-document" @click="handleDownload">
      {{ $t('zip.export') }} Zip
    </el-button>
        <el-button style="margin:0 0 20px 20px;" type="primary" icon="el-icon-document" @click="handleDownload2">
        {{ $t('excel.export') }} Excel
      </el-button>

    <el-table :data="list" border fit highlight-current-row style="width: 100%" >
      <el-table-column align="center" label="序列" min-width="75px">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="90px" align="center" label="姓名">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

          <el-table-column min-width="80px" align="center" label="性别">
        <template slot-scope="scope">
          <span>{{ scope.row.sex }}</span>
        </template>
      </el-table-column>

            <el-table-column min-width="110px" align="center" label="学号">
        <template slot-scope="scope">
          <span>{{ scope.row.card }}</span>
        </template>
      </el-table-column>

            <el-table-column min-width="110px" align="center" label="院系">
        <template slot-scope="scope">
          <span>{{ scope.row.depart }}</span>
        </template>
      </el-table-column>

            <el-table-column min-width="100px" align="center" label="体温">
        <template slot-scope="scope">
          <span>{{ scope.row.temp }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="120px" align="center" label="出行时间">
        <template slot-scope="scope">
          <span>{{ scope.row.gate }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="120px" align="center" label="离校时间">
        <template slot-scope="scope">
          <span>{{ scope.row.wate }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="110px" align="center" label="出行方式">
        <template slot-scope="scope">
          <span>{{ scope.row.travel }}</span>
        </template>
      </el-table-column>

       <el-table-column min-width="110px" align="center" label="出发地">
        <template slot-scope="scope">
          <span>{{ scope.row.place }}</span>
        </template>
      </el-table-column>

       <el-table-column min-width="110px" align="center" label="目的地">
        <template slot-scope="scope">
          <span>{{ scope.row.destination }}</span>
        </template>
      </el-table-column>

       <el-table-column min-width="110px" align="center" label="车次">
        <template slot-scope="scope">
          <span>{{ scope.row.train }}</span>
        </template>
      </el-table-column>
           <el-table-column min-width="110px" align="center" label="是否经过风险地区">
        <template slot-scope="scope">
          <span>{{ scope.row.risk }}</span>
        </template>
      </el-table-column>
       <el-table-column min-width="110px" align="center" label="家庭所在省份">
        <template slot-scope="scope">
          <span>{{ scope.row.home }}</span>
        </template>
      </el-table-column>
       <el-table-column min-width="110px" align="center" label="填写时间">
        <template slot-scope="scope">
          <span>{{ scope.row.writetime }}</span>
        </template>
      </el-table-column>

       <el-table-column :label="$t('table.actions')" align="center" min-width="150px" class-name="small-padding fixed-width">
        <template slot-scope="scope">
           <!-- //编辑 -->
          <el-button type="primary" size="mini" @click="edit(scope.row.id)">
            {{ $t('table.edit') }} 
          </el-button>
             <!-- //删除    -->
          <el-button size="mini" type="danger" @click="open(scope.row.id)">
            {{ $t('table.delete') }}
          </el-button>
        </template>
      </el-table-column>


    </el-table>
 <el-pagination
      @size-change="(val) => handleSizeChange(val)"
      @current-change="(val) => handleCurrentChange(val)"
      :current-page="page.current"
      :page-sizes="[20, 40, 60]"
      :page-size="page.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="page.total">
    </el-pagination>

    
  </div>
</template>

<script>
let change=1;
export default {
  name: 'holidayout',

  data() {
    return { 
        cname:'',
        stext:'',
        searchKey:"",
      page: {
        total: 0,
        current: 1,
        size: 20
      },
      dialogFormVisible: false,
      formLabelWidth: "80px",
      form: {},
      list: [
    {
      
    }
],
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },



  created() {
    var e=1;
    this.fetchData(e)
  },
  methods: {
        getKey(e){
      this.searchKey = e
    },

//搜素功能
      search(){
       var vm=this;
      if(!this.stext){
       
              this.axios({
          method: "GET",
          url: "http://106.13.30.60:8089/school/findAll/1/6"

        }).then(function(resp){
        vm.tableData=resp.data.records
        vm.total=resp.data.total
        vm.cname=""
        });
        
      }else{

         
          this.axios({
          method: "GET",
          url: "http://106.13.30.60:8089/school/search/"+this.searchKey+"/"+this.stext

        }).then(function(resp){
          vm.total=resp.data.total
          vm.list=resp.data
        });
      
      }
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
      
      

    
      fetchData(e){
        var vm=this;

         this.axios({
          method: "GET",
          url: "http://106.13.30.60:8089/school/findAll/"+e+"/20"

        }).then(function(resp){
         console.log(resp.data.total)
          vm.list=resp.data.records
        vm.page.total=resp.data.total
        vm.page.current=resp.data.current
        vm.page.size=resp.data.size
          
        });
        
      },
      
      edit(id){
     
        
        this.$router.push("/editholidayin/index/"+id)
      
      },
    
      
  //打开弹窗，提示删除情况
      open(id) {

        var vm=this;
      
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          
          this.axios({
          method: "DELETE",
          url: "http://106.13.30.60:8089/school/deleteById/"+id

        }).then(function(resp){
            
            if(resp.data=="success"){
               vm.$message({
            type: 'success',
            message: '删除成功!'
            
          });
           
          vm.handleCurrentChange(change);

            }else{
              
              vm.$message.error('操作发生错误');
            }
            
        });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'          
          });          
        });
      },

    //导出zip操作
     handleDownload() {
       var vm =this;
      this.downloadLoading = true
      import('@/vendor/Export2Zip').then(zip => {
        const tHeader = ['序列','姓名','性别','学号','院系','体温','出行时间','离校时间','出行方式','出发地点','目的地','车次','是否经过风险地区','家庭所在省份','填写时间']
        const filterVal = ['id','name','sex','card','depart','temp','gate','wate','travel','place','destination','train','risk','home','writetime']
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
        const tHeader = ['序列','姓名','性别','学号','院系','体温','出行时间','离校时间','出行方式','出发地点','目的地','车次','是否经过风险地区','填写时间']
        const filterVal = ['id','name','sex','card','depart','temp','gate','wate','travel','place','destination','train','risk','writetime']
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
