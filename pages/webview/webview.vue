<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: ''
			};
		},
    async onLoad({url, title}) {
      this.url = url
      title ? uni.setNavigationBarTitle({title}) : ''
    }
	}
</script>

<style lang="scss">

</style>
