<template>
	<view class="home">
		<!-- 顶部栏 -->
		<!-- #ifdef MP-WEIXIN -->
		<page-header :showFillView="true"></page-header>
		<!-- #endif -->
    <!-- 头部轮播图 -->
    <banner :list="carousel"></banner>
    
	</view>
</template>

<script>
  import pageHeader from './components/page-header.vue'
  import banner from './components/banner.vue'
	export default {
    components: {
      pageHeader,
      banner
    },
		data() {
			return {
				advertList: [] // 广告列表
			}
		},
    computed: {
      carousel(){
      	return this.advertList.filter(item=> item.advert_type === 'carousel');
      }
    },
		methods: {
			
		}
	}
</script>

<style>

</style>
