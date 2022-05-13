<template>
  <div class="app-container">
    
    <el-table :data="list" border fit highlight-current-row style="width: 100%" >
      <el-table-column align="center" label="序列" width="80px">
        <template slot-scope="scope">
          <span >{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="100px" align="center" label="预警手机">
        <template slot-scope="scope">
          <span>{{ scope.row.phone }}</span>
        </template>
      </el-table-column>

          <el-table-column min-width="100px" align="center" label="预警邮箱">
        <template slot-scope="scope">
          <span>{{ scope.row.email }}</span>
        </template>
      </el-table-column>

       <el-table-column min-width="100px" align="center" label="自检周期">
        <template slot-scope="scope">
          <span>{{ scope.row.tall }}</span>
        </template>
      </el-table-column>
        <el-table-column min-width="110px" align="center" label="填写时间">
        <template slot-scope="scope">
          <span>{{ scope.row.writetime }}</span>
        </template>
      </el-table-column>

       <el-table-column :label="$t('table.actions')" align="center" width="250px" class-name="small-padding fixed-width">
        <template slot-scope="scope">
         
          </el-button>
             <!-- //删除    -->
          <el-button size="mini" type="danger" @click="open(scope.row.id)">
            {{ $t('table.delete') }}
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
          url: "http://106.13.30.60:8089/send/find"

        }).then(function(resp){

          vm.list=resp.data
          console.log(vm.list)
        });

        
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
          url: "http://106.13.30.60:8089/send/deleteById/"+id

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


}
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
