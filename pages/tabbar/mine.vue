<template>
	<view class="mine">
    <!-- 个人信息 -->
		<view class="top">
      <view class="user-wrapper">
        <image class="avatar" :src="userInfo.avatar"></image>
        <view class="column" v-if="hasLogin">
          <text class="username">{{ userInfo.nickname || userInfo.username }}</text>
          <text class="user-group">普通会员</text>
        </view>
        <view class="login-box" v-else @click="navTo('/pages/login/login')">
          <text>请登录</text>
        </view>
      </view>
		</view>
    
    <!-- 订单 -->
    <view class="order-wrap">
      <view class="o-header row">
        <text class="tit">我的订单</text>
        <text class="more">查看全部</text>
      </view>
      <view class="o-list">
        <view class="item center">
          <text class="mix-icon icon-daifukuan"></text>
          <text>待付款</text>
          <text class="number"></text>
        </view>
        <view class="item center">
          <text class="mix-icon icon-daifahuo"></text>
          <text>待发货</text>
        </view>
        <view class="item center">
          <text class="mix-icon icon-yishouhuo"></text>
          <text>待收货</text>
        </view>
      </view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {}
			}
		},
    computed: {
      hasLogin() {
        return true
      }
    },
		methods: {
			
		}
	}
</script>

<style>

</style>
