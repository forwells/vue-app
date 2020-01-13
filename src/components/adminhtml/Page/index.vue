<template>
    <div class="Page">
        <div>
            {{title}}
        </div>
    </div>
</template>

<style lang="sass" scoped>
    @import './index.scss'
</style>

<script>


export default {
    name: 'Page',
    data() {
        return {
            title: 'adminhtml index page'
        };
    },
    
    methods: {
        
    },
    mounted() {
        
    },
};
</script>
