<template>
  <section class="view-all">
    <v-header class="view-top" :userInfo="userInfo" @logout="logout"></v-header>
    <v-menu @collapse="toggleMenuCollapse"></v-menu>
    <div class="view-right" :class="{'is-change': isMenuColllapse}" v-loading="isLoading">
       <keep-alive>
        <router-view v-on:changeLoading="changeLoading" v-if="$route.meta.keepAlive"/>
      </keep-alive>
      <router-view v-on:changeLoading="changeLoading" v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </section>
</template>

<script>
import vHeader from '@/components/Header.vue';
import vMenu from '@/components/Menu.vue';
export default {
  name: 'Home',
  data () {
    return {
      userInfo: null,
      isMenuColllapse: false,
      isLoading: false
    };
  },
  methods: {
    toggleMenuCollapse (status) {
      this.isMenuColllapse = status;
    },
    logout () {
      this.$store.dispatch('logout');
    },
    changeLoading (isLoading) {
      this.isLoading = isLoading;
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
  .view-all {
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    min-width: 1103px;

    .view-top{
      position: relative;
      z-index: 3000;
    }
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
