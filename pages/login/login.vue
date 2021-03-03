<template>
	<view class="login">
		<button type="primary" size="mini" open-type="getUserInfo" @getuserinfo="mpWxGetUserInfo">用户信息</button>
    <!-- <button type="primary" size="mini" open-type="contact" @contact="contactHanlder">客服</button>
    <button type="primary" size="mini" open-type="share">分享</button>
    <button type="primary" size="mini" open-type="getPhoneNumber" @getphonenumber="phoneNumberHandler">
      获取手机号
    </button> -->
    <!-- <button type="primary" size="mini" @click="mpWxGetUserInfo">登录</button> -->
   <!-- <button type="primary" size="mini" @click="chooseAddress">收货地址</button>
    <button type="primary" size="mini" @click="chooseInvoiceTitle">发票抬头</button> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mpWxCode: ''
			};
		},
    onLoad() {
      this.getMpWxCode()
    },
    methods: {
      // 获取code
      getMpWxCode() {
        uni.login({
          provider: 'weixin',
          success: res => {
            console.log(res, 'uni.login')
            this.mpWxCode = res.code
          }
        });
      },
      // 微信小程序登录
      mpWxGetUserInfo (userInfoData) {
        console.log(userInfoData, 'userInfoData')
        if(!userInfoData.detail.userInfo){
        	return;
        }
        this.$util.throttle(async ()=>{
        	uniCloud.callFunction({
        		name: 'login',
        		data: {
        			code: this.mpWxCode
        		},
            success: res => {
              console.log(res, 'login')
            },
            fail: err => {
              console.error(err)
            }
        	})
        })
      },
      userInfoHandler(info) {
        console.log(info, 'userInfoHandler')
      },
      contactHanlder(info) {
        console.log(info, 'contactHanlder')
      },
      phoneNumberHandler(info) {
        console.log(info, 'phoneNumberHandler')
      },
      getSetting () {
        /* 获取用户授权设置 */
        uni.getSetting({
          success: res => {
            console.log(res, 'getSetting')
          }
        })
      },
      getUserInfo () {
        uni.getUserInfo({
          success: info => {
            console.log(info, 'getUserInfo')
          }
        })
      },
      chooseAddress() {
        uni.chooseAddress({
          success: res => {
            console.log(res, 'chooseAddress')
          }
        })
      },
      chooseInvoiceTitle () {
        uni.chooseInvoiceTitle({
          success: res => {
            console.log(res, 'chooseInvoiceTitle')
          }
        })
      }
    }
	}
</script>

<style lang="scss" scoped>
.login button{
  margin: 10px;
}
</style>
