<template>
  <el-container direction="vertical">
    <el-row>
      <SectionAside></SectionAside>
      <SectionContent></SectionContent>
    </el-row>
  </el-container>
</template>

<style lang="scss" scope>
html, #application, body, .el-container, .el-row, .el-menu{
  height: 100%;
}

</style>

<script>
import SectionAside from "@/components/adminhtml/Section/aside";
import SectionContent from "@/components/adminhtml/Section/content";
export default {
  name: "Section",
  data() {
    return {};
  },
  components: {
    SectionAside,
    SectionContent
  },
  methods: {},
  mounted() {}
};
</script>
