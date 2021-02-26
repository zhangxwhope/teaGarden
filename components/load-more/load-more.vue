<template>
	<view class="load-more center">
		<!-- <image class="loading-icon" src=""></image> -->
    <icon class="loading-icon" type="waiting" size="60"></icon>
    <text class="text">{{ textList[status] }}</text>
	</view>
</template>

<script>
  /**
   * 上滑加载更多
   * @prop {Number} status 0加载前 1加载中 2没有更多
   * @prop {Array} textList ['加载前提示', '加载中提示', '加载完提示']
   */
	export default {
		data() {
			return {
				
			};
		},
    props: {
      status: {
        type: Number,
        default: 0
      },
      textList: {
        type: Array,
        default() {
          return [
            '上拉显示更多',
            '正在加载...',
            '我也是有底线的~'
          ]
        }
      }
    }
	}
</script>

<style lang="scss" scoped>
.load-more{
  width: 750rpx;
  height: 110rpx;
}

.loading-icon{
  margin-right: 20rpx;
}

.text{
  font-size: 26rpx;
  color: #999;
}
</style>
