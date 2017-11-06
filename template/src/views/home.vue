<template>
  <section class="view-all">
    <vHeader></vHeader>
    <vMenu v-on:changeMenu="changeMenu"></vMenu>
    <section class="view-right" :class="{'is-change':isShow}">

    </section>
  </section>
</template>

<script>
import vHeader from '../components/Header.vue';
import vMenu from '../components/Menu.vue';
export default {
  name: 'Home',
  data () {
    return {
      isShow: false
    };
  },
  methods: {
    changeMenu (status) {
      this.isShow = status;
    }
  },
  components: {
    vHeader,
    vMenu
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../assets/scss/index";
  .view-all{
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    min-width: 1103px;
    .view-right{
      position: absolute;
      top: 50px;
      left: 180px;
      right: 0;
      bottom: 0;
      @include transition(left .3s ease);
    }
    .view-right.is-change{
      left: 64px;
    }
  }
</style>
