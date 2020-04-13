<template>
    <el-col :span="4" class="navbar">
        <el-menu
            :default-active="activeIndex"
            class="aside-menu"
            mode="verticle"
            @select="handleSelect"
        >
            <el-menu-item v-for="(item, index) in menuList" :key="index" :index="index">
                <a :href="'/omas/'+item.url"><span>{{item.name}}</span></a>
            </el-menu-item>
        </el-menu>
    </el-col>
</template>

<script>
export default {
    name: "section-aside",
    data() {
        return {
            activeIndex: 0,
            menuList: null
        };
    },

    methods: {
        handleSelect(key, keyPath) {
            console.log(key);
            console.log(keyPath);
        }
    },
    mounted() {
        this.$adminApi.menuList().then(res => {
            console.log(res);
            this.menuList = res.data;
        });
    }
};
</script>

<style lang="scss" scoped>
@import "../css/aside";
</style>