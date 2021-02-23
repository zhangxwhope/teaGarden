<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
  .content{
    padding-bottom: 30px;
  }
  
  .title{
    font-weight: bold;
    text-align: center;
    padding: 20px 0;
    font-size: 20px;
  }
  
  .tips{
    color: #999999;
    font-size: 14px;
    padding: 20px 30px;
  }
  
  .btn-list{
    padding: 0 30px;
    button{
      margin-top: 20px;
    }
  }
</style>
