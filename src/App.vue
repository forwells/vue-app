<template>
  <div id="appclication">
    <!-- Header -->
    <Header v-if="routeData.name != 'adminhtml'"></Header>
    <adminHtmlPage></adminHtmlPage>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import adminHtmlPage from '@/components/adminhtml/Page/index'
export default {
  name: 'application',
  created: ()=>{
    
  },
  components: {
    Header,
    adminHtmlPage
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
