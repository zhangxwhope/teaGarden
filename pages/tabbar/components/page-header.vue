<template>
	<view class="mix-page-header">
		<view 
      class="content row"
      :style="{
        paddingRight: headerPaddingRight + 'px',
        paddingTop: statusBarHeight + 'px',
        height: navigationBarHeight + statusBarHeight + 'px'
      }"
    >
		  <view class="search-wrap center">
        <view class="input-box row">
          <text class="mix-icon icon-sousuo"></text>
          <input 
            type="text"
            placeholder="请输入搜索关键字"
            maxlength="20"
            v-model="keyword"
            @confirm="search"
            confirm-type="search"
          />
          <text v-if="keyword" class="mix-icon icon-guanbi2" @click="clearInput"></text>
        </view>
        <view class="search-btn center" @click="search">
          <text>搜索</text>
        </view>
      </view>
		</view>
    <!-- 占位栏 -->
    <view v-if="showFillView" :style="[{minHeight: navigationBarHeight+statusBarHeight+'px'}]"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: ''
			};
		},
    props: {
      //顶部是否占位
      showFillView: {
      	type: Boolean,
      	default: true
      }
    },
    computed: {
      statusBarHeight(){
      	return this.systemInfo.statusBarHeight
      },
      navigationBarHeight(){
      	return this.systemInfo.navigationBarHeight;
      },
      customWidth(){
      	return this.systemInfo.custom.width;
      },
      customHeight(){
      	return this.systemInfo.custom.height;
      },
      //小程序右侧需要留出气泡空间
      headerPaddingRight(){
      	// #ifndef MP
      	return 0;
      	// #endif
      	// #ifdef MP-WEIXIN
      	return this.customWidth + 20;
      	// #endif
      }
    },
    methods: {
      search() {
        
      },
      clearInput() {
        
      }
    }
	}
</script>

<style lang="scss" scoped>
.content{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 95;
  width: 100%;
  background-color: #fff;
}

.search-wrap{
  padding-left: 24rpx;
  height: 100rpx;
  
  .icon-sousuo{
    padding: 0 12rpx 0 20rpx;
    font-size: 40rpx;
    color: #999;
  }
  .input-box {
    width: 604rpx;
    height: 80rpx;
    border-radius: 100rpx;
    background: #f5f6f7;
  }
  .input{
    flex: 1;
    font-size: 30rpx;
    color: #333;
  }
  .icon-guanbi2{
    padding: 10rpx 20rpx;
    font-size: 32rpx;
    color: #999;
  }
  .search-btn {
    flex-shrink: 0;
    padding: 0 24rpx 0 20rpx;
    font-size: 32rpx;
    color: #007aff;
  }
}
</style>
