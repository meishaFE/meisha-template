<template>
  <div class="home">
    <v-header @logout="logout"></v-header>
    <v-menu v-on:collapse="toggleMenuCollapse"></v-menu>
    <div class="main"
      :class="{large: isMenuColllapse}">
      <router-view />
    </div>
  </div>
</template>

<script>
import vHeader from '@/components/Header.vue';
import vMenu from '@/components/Menu.vue';
export default {
  name: 'Home',
  data () {
    return {
      isMenuColllapse: false
    };
  },
  methods: {
    toggleMenuCollapse (status) {
      this.isMenuColllapse = status;
    },
    logout () {
      this.$store.dispatch('logout');
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
  .home {
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    min-width: 1103px;

    .main {
      position: absolute;
      top: 50px;
      left: 180px;
      right: 0;
      bottom: 0;
      @include transition(left .3s ease);

      &.large {
        left: 64px;
      }
    }
  }
</style>
