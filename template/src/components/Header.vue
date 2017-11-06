<template>
  <section class="view-header">
    <a class="logo-left">
      <span>{{title}}</span>
    </a>
    <ul class="right-link">
      <li v-for="(item, index) in rightLinks" :key="index">
        <router-link :to="item.router">{{item.label}}</router-link>
      </li>
      <li>
        <a @click.prevent.stop="$emit('logout')">退出</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default() {
        return '梅沙教育'
      }
    },
    rightLinks: {
      type: Array,
      default() {
        return [{
          router: '',
          label: '账户权限'
        }, {
          router: '',
          label: '个人设置'
        }];
      }
    },
  }
};
</script>

<style lang="scss" rel="stylesheet/scss"  scoped>
@import '../assets/scss/index';
.view-header {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 50px;
  background: $bgColorNav;
  .logo-left {
    display: block;
    width: 180px;
    height: 50px;
    background: $fontColorSubTitle;
    cursor: pointer;
    text-align: center;
    span {
      display: inline-block;
      padding-left: 35px;
      @include font-style(16px,$fontColorWhite,50px);
      background: url('http://meishakeji-oss1.oss-cn-shenzhen.aliyuncs.com/camps/camppic/f988f49793f9455dab80afcc11a2049a.png') no-repeat left center;
    }
    &:hover {
      background: $defaultColorNormal;
    }
  }
  .right-link {
    position: absolute;
    right: 28px;
    top: 0;
    li {
      float: left;
      margin-left: 40px;
      a {
        cursor: pointer;
        @include font-style(14px,$fontColorWhite,50px);
      }
    }
  }
}
</style>

