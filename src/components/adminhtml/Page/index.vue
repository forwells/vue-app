<template>
    <adminSection></adminSection>
</template>

<style lang="sass" scoped>
    @import './index.scss'
</style>

<script>
import adminSection from '@/components/adminhtml/Section/index'

export default {
    name: 'admin-index',
    data() {
        return {
            title: 'adminhtml index page'
        };
    },
    components:{
        adminSection
    },
    methods: {
        
    },
    mounted() {
        
    },
};
</script>
