<template>
  <el-container direction="vertical">
    <el-row>
      <SectionAside></SectionAside>
      <SectionContent></SectionContent>
    </el-row>
  </el-container>
</template>

<style lang="scss" scope>
@import './css/index';
</style>

<script>
import SectionAside from "@/components/adminhtml/section/templates/aside";
import SectionContent from "@/components/adminhtml/section/templates/content";
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
