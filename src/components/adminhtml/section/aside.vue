<template>
  <el-col :span="4">
    <el-menu :default-active="activeIndex" class="aside-menu" mode="verticle" @select="handleSelect">
      <el-menu-item index="1">仪表盘</el-menu-item>
      <el-menu-item index="2">文章管理</el-menu-item>
      <el-menu-item index="3">功能管理</el-menu-item>
      <el-menu-item index="4">站点配置</el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
export default {
  name: "section-aside",
  data() {
    return {
      activeIndex: "1"
    };
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key);
      console.log(keyPath);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.el-menu.aside-menu{
  height: auto;
}

</style>