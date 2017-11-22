<template>
  <el-dialog
    :title="dialogObj.title"
    :close-on-click-modal="false"
    :visible.sync="dialogObj.dialogVisible"
    :class="{'dialog-a':dialogObj.type == 'A','dialog-b':dialogObj.type == 'B','dialog-c':dialogObj.type == 'C','dialog-self':true}">
    <span v-if="dialogObj.type == 'A'"><i class="icon-style el-icon-information"></i>\{{dialogObj.content}}</span>
    <slot v-if="dialogObj.type == 'B' || dialogObj.type == 'C'" name="template"></slot>
    <span slot="footer" class="dialog-footer">
      <el-button v-if="!dialogObj.isNeedCancle" @click="dialogObj.dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="sure">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
// 弹窗种类3种 根据 dialogObj.type来区分 A：380尺寸  B 460尺寸 C:948尺寸
export default {
  name: 'Dialog',
  data () {
    return {
    };
  },
  methods: {
    sure () {
      this.dialogObj.confirmCall();
    }
  },
  props: {
    dialogObj: {
      type: Object,
      default () {
        return {
          title: '提示',
          content: '这是文本内容',
          dialogVisible: false,
          type: 'A',
          isNeedCancle: true,
          confirmCall () {
          },
          cancleCall () {
          }
        };
      }
    }
  },
  components: {
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" >
@import "../../assets/scss/index";
//弹窗样式改造
.dialog-self .el-dialog{
    .el-dialog__header{
        padding: 20px;
        border-bottom: 1px solid $borderColorTable;
    }
    .el-dialog__body{
        max-height: 469px;
    }
    .el-dialog__footer{
        border-top: 1px solid $borderColorTable;
        padding: 16px 20px;
    }
    .icon-style{
        color: $warnColorNormal;
        margin-right: 10px;
    }
}

//A类弹窗
.dialog-a .el-dialog{
    width: 380px;
}


//B类弹窗
.dialog-b .el-dialog{
    width: 460px;
}

//C类弹窗
.dialog-c .el-dialog{
    width: 948px;
}
</style>

