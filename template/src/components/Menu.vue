<template>
  <section class="view-menu"
    :class="{'hidden-menu': isCollapse}">
    <div class="toggle-menu-view">
      \{{!isCollapse ? PROJECT_NAME : ''}}
      <span class="iconfont"
        @click="toggleCollapse">&#xe6c0;</span>
    </div>
    <el-menu default-active="1"
      @select="onSelect"
      @close="onClose"
      @open="onOpen"
      v-if="MENU_CONFIG && MENU_CONFIG.length"
      :router="router"
      :collapse="isCollapse">
      <template v-for="(item, index) in MENU_CONFIG">
        <el-submenu v-if="item.children && item.children.length"
          :key="`menu-${index}`"
          :index="item.index">
          <template v-if="item.title"
            slot="title">
            <i v-if="item.icon"
              :class="`el-icon-${item.icon}`"></i>
            <span slot="title">\{{item.title}}</span>
          </template>
          <template v-for="(child, childIdx) in item.children">
            <el-menu-item-group v-if="child.children && child.children.length"
              :key="`menu-group-${childIdx}`">
              <template v-if="child.title"
                slot="title">
                <i v-if="child.icon"
                  :class="`el-icon-${child.icon}`"></i>
                <span slot="title">\{{child.title}}</span>
              </template>
              <el-menu-item v-for="(groupItem, groupItemIdx) in child.children"
                :key="`menu-groupItem-${groupItemIdx}`"
                :index="groupItem.index">
                <span slot="title">\{{groupItem.title}}</span>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item v-else
              :key="`menu-item-${childIdx}`"
              :index="child.index">
              <span slot="title">\{{child.title}}</span>
            </el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item v-else
          :key="`menu-${index}`"
          :index="item.index">
          <template v-if="item.title">
            <i v-if="item.icon"
              :class="`el-icon-${item.icon}`"></i>
            <span slot="title">\{{item.title}}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </section>
</template>

<script>
import { MENU_CONFIG, PROJECT_NAME } from '@/config';
export default {
  name: 'Menu',
  props: {
    router: {
      type: Boolean,
      default () {
        return true;
      }
    }
  },
  data () {
    return {
      isCollapse: false,
      MENU_CONFIG,
      PROJECT_NAME
    };
  },
  methods: {
    toggleCollapse () {
      this.isCollapse = !this.isCollapse;
      this.$emit('collapse', this.isCollapse);
    },
    onSelect () {
      this.emit('select', arguments);
    },
    onOpen () {
      this.emit('open', arguments);
    },
    onClose () {
      this.emit('close', arguments);
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../assets/scss/index";
.view-menu {
    position: absolute;
    top: 50px;
    left: 0;
    width: 180px;
    height: 100%;
    background: $bgColorDisabled;
    .toggle-menu-view {
        position: relative;
        height: 48px;
        padding-left: 20px;
        background: $bgColorDisabled;
        border-bottom: 1px solid $borderColorTable;
        @include font-style(16px, $fontColorTitle, 48px);
        span {
            position: absolute;
            width: 64px;
            height: 48px;
            right: 0;
            top: 0;
            display: block;
            cursor: pointer;
            text-align: center;
            @include font-style(16px, $fontColorDisable, 48px);
        }
    }
}
.view-menu.hidden-menu {
    width: 64px;
}
</style>

