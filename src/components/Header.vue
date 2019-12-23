<template>
	<el-header class="bg-header">
		<el-row>
			<el-col :span="6">
				<img :src="logo.src" :alt="logo.alt" class="logo">
			</el-col>
			<el-col :span="18" class="menu-container">
				<el-menu :default-active="0" class="hoa-menu" mode="horizontal">
					<el-menu-item v-for="navItem in menu" :key="navItem.sort" :index="navItem.sort">
						<a :href="navItem.link">{{navItem.title}}</a>
					</el-menu-item>
				</el-menu>
			</el-col>
		</el-row>
	</el-header>
</template>

<script>
	export default {
		data: function() {
			return {
				logo: {
					alt: "Hoalook",
					src: "/upload/images/hoalook-font-logo.png"
				},
				menu: {
					0: {
						title: "Magento",
						link: "#",
						sort: 0,

					},
					1: {
						title: "Shopify",
						link: "",
						sort: 1,
					}
				}
			}
		},
		
		methods: {
			// handleSelect(key, keyPath) {
			// 	console.log(key, keyPath);
			// }
		}
	}
</script>

<style lang="stylus" scoped>
	.bg-header 
		background-color:#F2F6FC;
		box-shadow 0 0 5px 5px #ccc;
	.logo 
		margin-left:50%;
	.menu-container
		padding 0 50px 0 50px;
	.hoa-menu
		
		background-color transparent;
	.el-menu.el-menu--horizontal
		border none;
	.el-menu--horizontal>.el-menu-item.is-active
		border-bottom-color #E6A23C;
	.el-menu--horizontal>.el-menu-item a{
		text-decoration none;
	}
</style>
