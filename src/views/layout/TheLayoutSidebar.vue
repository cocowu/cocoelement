<template>
  <aside class="sidebar" :class="{'sidebar-hide': !openNav}">
    <el-menu :default-active="selectMenu" class="sidebar-menu" :collapse="!openNav" background-color="#606266"
      text-color="white"
      active-text-color="#42b983"
             :collapse-transition="false" :router="true">
      <template v-for="menu in user.accessMenu">
        <el-menu-item v-if="!menu.children" :key="menu.name" :index="menu.path" class="menuitem">
          <i :class="menu.icon" v-if="menu.icon"></i>
          <span slot="title">{{menu.title}}</span>
        </el-menu-item>
        <the-submenu :key="menu.name" :subMenu="menu" v-else class="menuparent"></the-submenu>
      </template>
    </el-menu>
  </aside>
</template>

<script>
import TheLayoutSubSidebar from './TheLayoutSubSidebar'
import { mapState } from 'vuex'

export default {
  name: 'TheLayoutSidebar',
  props: ['openNav'],
  components: {
    'the-submenu': TheLayoutSubSidebar
  },
  computed: {
    selectMenu () {
      return this.$route.meta.menuPath || this.$route.path
    },
    ...mapState(['user'])
  }
}
</script>

<style scoped lang="scss">

::v-deep .el-submenu__title {
  height: 36px;
  line-height: 36px;
}

.sidebar {
  float: left;
  width: 200px;
  height: 100%;
  border-right: 1px solid #e6e6e6;
  overflow: auto;

  .sidebar-menu {
    border: none;
    height: 100%;

  }
}

.sidebar-hide {
  width: 65px;
}

.menuitem {
  font-size: 12px;
  height: 36px;
  line-height: 36px;
}
</style>

