<!--    app     -->
<template>
  <div id="application">
    <!-- Frontend -->
    <frontendIndex v-if="routeData.name != 'admin-index'"></frontendIndex>
    <!-- Adminhtml -->
    <adminIndex v-if="routeData.name=='admin-index'"></adminIndex>
  </div>
</template>

<script>
import frontendIndex from '@/components/frontend/Html/index.vue'
import adminIndex from '@/components/adminhtml/Page/index.vue'
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

<style lang="sass" scoped>
  
</style>
