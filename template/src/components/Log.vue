<template>
  <section class="view-log">
    <div class="log-name">操作日志</div>
    <template v-if="logArr.length>0">
      <ul>
        <li class="display-flex" v-for="(item,k) in logArr" :key="k" :class="{'attention-status':item.level == 2, 'red-status':item.level === 3}">
          <div class="time-div">
            \{{item.createTime}}
          </div>
          <div class="w-200">
            \{{item.operator | setDefaultText}}
          </div>
          <div class="flex1">
            <template v-if="logObj.rowId!=''">
              \{{item.detail}}
            </template>
            <template v-else>
              \{{item.description}}
            </template>
          </div>
        </li>
      </ul>
      <div class="load-more-log" v-if="hasMore">
        <span @click="loadMore">加载更多记录</span><i class="el-icon-arrow-down"></i>
      </div>
    </template>
    
    <div class="no-data-default" v-else>
      暂无数据
    </div>
    
  </section>
</template>

<script>
// 日志操作，得更换后台接口地址
export default {
  name: 'Log',
  props: {
    logObj: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  data () {
    return {
      logArr: [],
      hasMore: true,
      pageObj: {
        currentPage: 1,
        perPage: 10,
        count: 0
      }
    };
  },
  created () {
    // this.getLogList();
  },
  methods: {
    getLogList () {
      let params = {
        data: {
          currentPage: this.pageObj.currentPage,
          perPage: this.pageObj.perPage,
          type: this.logObj.objectType,
          rowId: this.logObj.objectId || ''
        }
      };
      $http.get(CONFIG.API.GET_LOG, {params})
      .then(res => {
        if (res) {
          this.pageObj.count = res.data.count;
          let list = res.data.list;
          if (this.pageObj.currentPage === 1) {
            this.logArr = list;
          } else {
            this.logArr = this.logArr.concat(list);
          }
          this.checkHasMore(res.data);
        }
      })
      .catch(error => {
        console.log(error);
        this.$message({
          type: 'error',
          duration: 1500,
          message: (error && error.msg) || '网络故障'
        });
      });
    },
    checkHasMore (obj) {
      if (obj.lastPage === this.pageObj.currentPage) {
        this.hasMore = false;
      }
    },
    loadMore () {
      ++this.pageObj.currentPage;
      this.getLogList();
    }
  },
  components: {
  }
};
</script>

<style lang="scss" rel="stylesheet/scss"  scoped>
  @import '../assets/scss/index';
  .view-log{
    margin-top: 10px;
    .log-name{
      @include  font-style(14px,$fontColorSubTitle,48px);
      font-weight: bold;
    }
    ul{
      margin-top: 3px;
      li{
        margin-bottom: 10px;
      }
      div{
         padding-right: 40px;
         @include  font-style(14px,$fontColorSubTitle,18px);
         word-break: break-all;
         white-space: normal;
         height: 18px;
         &.w-200{
           width: 200px;
         }
         &:last-child{
           height: auto;
         }
         &.time-div{
           position: relative;
           padding-left: 12px;
           &:before{
             content: '';
             position: absolute;
             display: block;
             width: 6px;
             height: 6px;
             left: 0;
             top:50%;
             margin-top: -3px;
             background: $fontColorSubTitle;
           }
         }
      }
      li.red-status{
        div{
          color: $negativeColorNormal;
          &.time-div{
            &:before{
              background: $negativeColorNormal;
            }
          }
        }
      }
      li.attention-status{
        div{
          color: $defaultColorNormal;
          &.time-div{
            &:before{
              background: $defaultColorNormal;
            }
          }
        }
      }
    }

    .load-more-log{
      text-align: center;
      padding:10px 0 20px 0;
      span,i{
        @include  font-style(14px,$fontColorTip,20px);
        cursor: pointer;
      }
      i{
        padding-left: 10px;
        font-size: 12px;
      }
    }
  }
</style>

