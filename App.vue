<script>
  import Vue from 'vue'
	export default {
		onLaunch: function() {
			console.log('App Launch')
      uni.getSystemInfo({
        success: info => {
          console.log(info, 'getSystemInfo')
          this.initSize(info)
        }
      })
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
    methods: {
      /**
       * 存储设备信息
       * @param {Object} 
       */
      initSize(info) {
        const systemInfo = info;
        let navigationBarHeight;
        let custom = {};
        // #ifndef MP
        custom = { height: 36, width: 88 };
        navigationBarHeight = 44;
        // #endif
        // #ifdef MP-WEIXIN
        custom = wx.getMenuButtonBoundingClientRect();
        navigationBarHeight = custom.bottom + custom.top - info.statusBarHeight * 2;
        // #endif	
        systemInfo.custom = custom;
        systemInfo.navigationBarHeight = navigationBarHeight;
        Vue.prototype.systemInfo = systemInfo;
      }
    }
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import url("./common/css/common.css");
	@import url("./common/css/icon.css");
</style>
