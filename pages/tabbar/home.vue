<template>
	<view class="home">
		<!-- 顶部栏 -->
		<!-- #ifdef MP-WEIXIN -->
		<page-header :showFillView="true"></page-header>
		<!-- #endif -->
    <!-- 头部轮播图 -->
    <banner :list="carousel"></banner>
    <!-- 分类 -->
    <view class="cate-section">
      <view class="item" v-for="item in navList" :key="item._id" @click="navTo(item.link)">
        <image class="icon" :src="item.image"></image>
        <text>{{ item.name }}</text>
      </view>
    </view>
    <!-- 中部广告位 -->
    <view class="mid-ad" @click="navTo(midAdvert.link)">
      <image :src="midAdvert.image" mode="scaleToFill"></image>
    </view>
    <!-- #ifdef MP-WEIXIN -->
    <mix-load-more :status="loadingType"></mix-load-more>
    <!-- #endif -->
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
        navList: [], // 导航列表
				advertList: [] // 广告列表
			}
		},
    computed: {
      /* 中间广告位 */
      midAdvert(){
      	if(this.advertList.length === 0) return {};
      	const res = this.advertList.filter(item=> item.advert_type === 'middle');
      	return res.length > 0 ? res[0]: {};
      },
      /* 轮播图 */
      carousel(){
      	return this.advertList.filter(item=> item.advert_type === 'carousel');
      }
    },
    onLoad() {
      this.loadAdvert()
      this.loadNavList()
    },
		methods: {
			// 加载广告，缓存10分钟
      async loadAdvert () {
        const res = await this.$request('advert', 'getAdvertList', {}, {
          cache: 10*60
        })
        this.advertList = res.data
        this.log(res)
      },
      // 加载导航，缓存1小时
      async loadNavList () {
        const res = await this.$request('advert', 'getNavList', {}, {
          cache: 60*60
        })
        this.navList = res.data
      }
		}
	}
</script>

<style>
  page{
    background-color: #f7f7f7;
  }
</style>

<style lang="scss" scoped>
/* 分类 */
.cate-section{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 10rpx 16rpx;
  background: #fff;
  .item{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    padding: 20rpx 0;
    font-size: 24rpx;
    color: #333;
  }
  .icon{
    width: 84rpx;
    height: 84rpx;
    margin-bottom: 14rpx;
    border-radius: 50%;
  }
}

/* 中间广告位 */
.mid-ad{
  width: 100%;
  height: 208rpx;
  padding: 0 20rpx 20rpx;
  background: #fff;
  
  image{
    width: 100%;
    height: 100%;
  }
}
</style>
