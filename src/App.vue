<!--  app   -->
<template>
  <div id="application">
    <!-- Frontend -->
    <frontendIndex v-if="routeData.name != 'admin-index'"></frontendIndex>
    <!-- Adminhtml -->
    <adminIndex v-if="routeData.name=='admin-index'"></adminIndex>
  </div>
</template>

<script>
import frontendIndex from '@/components/frontend/html/index.vue'
import adminIndex from '@/components/adminhtml/page/index'
export default {
  name: 'application',
  created: ()=>{
    
  },
  components: {
    frontendIndex,
    adminIndex
  },
  methods: {
    
  },
  computed: {
    routeData() {
      console.log(this.$route)
      return this.$route;
    }
  }
}

</script>

<style>
</style>
