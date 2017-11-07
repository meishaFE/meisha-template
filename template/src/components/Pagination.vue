<template>
  <section class="page-opera-view">
    <el-pagination @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :small="pageObj.isSamll"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageObj.pageSize"
      :layout="pageObj.layOutString"
      :total="pageObj.pageTotal">
    </el-pagination>
  </section>
</template>

<script>
// pageObj.pageSize:每页显示条目个数
// pageObj.pageTotal:总条目数
// pageObj.pageSizeArr：每页显示条数下拉项
// pageObj.layOutString：组件布局
// pageObj.isSmall：是否使用小型分页 默认false
// changePage：页码或者每页数量发生改变时调用的函数，perPage 标志每页数量发生的改变，gotoPage 标志为去到第几页
export default {
  name: 'Pagination',
  methods: {
    handleSizeChange (val) {
      this.$emit('changePage', val, 'perPage');
    },
    handleCurrentChange (val) {
      this.currentPage = val;
      this.$emit('changePage', val, 'gotoPage');
    }
  },
  data () {
    return {
      currentPage: 1
    };
  },
  props: [ 'pageObj' ]
};
</script>

<style lang="scss" rel="stylesheet/scss"  scoped>
  @import "../../assets/scss/index";
  .page-opera-view{
      text-align: right;
  }
</style>

