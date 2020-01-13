<template>
  <div id="appclication">
    <!-- Header -->
    <frontendIndex v-if="routeData.name != 'adminhtml'"></frontendIndex>
    <adminHtmlPage></adminHtmlPage>
  </div>
</template>

<script>
import frontendIndex from '@/components/frontend/html/index.vue'
// import adminHtmlPage from '@/components/adminhtml/Page/index'
export default {
  name: 'application',
  created: ()=>{
    
  },
  components: {
    frontendIndex,
    // adminHtmlPage
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
