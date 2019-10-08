<template>
  <el-header height="40px" class="header el-button--primary">
    <router-link to="/index">
      <div class="logo" :class="{'logo-hide': !openNav}">
        <img src="../../assets/img/default_ico.png" class="image"/>
        <span class="text">智 慧 供 水</span>
      </div>
    </router-link>
    <div class="content">
      <i v-if="openNav" class="el-icon-s-fold toggle" @click="navOpenToggle" title="隐藏菜单"></i>
      <i v-else class="el-icon-s-unfold toggle" @click="navOpenToggle" title="显示菜单"></i>
    </div>
    <el-dropdown trigger="hover" class="user">
      <span class="user-info">
        {{ user.name }}<i class="el-icon-s-custom" style="margin-left: 10px"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>我的账号</el-dropdown-item>
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item divided>主题设置</el-dropdown-item>
        <el-dropdown-item>语言选择</el-dropdown-item>
        <el-dropdown-item divided>
          <router-link to="/login">
            <el-link :underline="false">退出登录</el-link>
          </router-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TheLayoutHeader',

  /* 1、父组件可以使用 props 把数据传给子组件。
  */
  props: ['openNav'],
  computed: {
    ...mapState(['user'])
  },
  methods: {
    navOpenToggle () {
      /* 2、子组件可以使用 $emit 触发父组件的自定义事件。
      */
      this.$emit('toggle-open')
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  line-height: 40px;
  height: 40px;
  color: #ffffff;
  background-color: #606266;

  div {
    display: inline-block;
  }

  .logo {
    width: 200px;
    border-right: 1px solid #C0C4CC;
    margin-left: -20px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;

    .image {
      width: 32px;
      height: 32px;
      vertical-align: middle;
    }

    .text {
      color: #ffffff;
      margin-left: 20px;
    }
  }

  .logo-hide {
    width: 65px;

    .text {
      display: none;
    }
  }

  .content {
    padding: 0 20px;

    .toggle {
      font-size: 22px;
      cursor: pointer;
    }
  }

  .user {
    float: right;
    cursor: pointer;

    .user-info {
      color: #ffffff;

      i {
        vertical-align: middle;
      }
    }
  }
}
</style>
