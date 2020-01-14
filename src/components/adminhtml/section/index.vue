<template>
  <el-container class="is-vertical">
    <sectionHeader></sectionHeader>
    <sectionContent></sectionContent>
  </el-container>
</template>

<style lang="sass" scoped>
    @import './index.scss'
</style>

<script>
import sectionHeader from "@/components/adminhtml/section/header";
// import sectionAside from '@/components/adminhtml/section/aside'
import sectionContent from "@/components/adminhtml/section/content";
export default {
  name: "Section",
  data() {
    return {};
  },
  components: {
    // sectionAside,
    sectionHeader,
    sectionContent
  },
  methods: {},
  mounted() {}
};
</script>
