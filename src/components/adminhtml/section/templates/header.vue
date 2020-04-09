<template>
  <el-header>
      <el-menu :default-active="activeIndex" class="tommy" mode="horizontal">
          <el-menu-item index="1">
            首页
          </el-menu-item>
          <el-submenu index="2">
              <template slot="title">内容管理</template>
              <el-menu-item index="2-1">文章</el-menu-item>
              <el-menu-item index="2-2">分类</el-menu-item>
              <el-menu-item index="2-3">设置</el-menu-item>
          </el-submenu>
          <el-menu-item index="3" disabled>消息</el-menu-item>
          <el-menu-item index="4" class=""><i class="el-icon-s-tools"></i><span>设置</span></el-menu-item>
      </el-menu>
  </el-header>
</template>

<style lang="stylus" scoped>
    .el-menu.tommy
        background-color: transparent
        font-size: 12px
</style>

<script>
export default {
  name: "section-header",
  data() {
    return {
        activeIndex: '1',

    };
  },

  methods: {
      
  },
  mounted() {}
};
</script>
