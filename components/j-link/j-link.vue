<template>
	<text class="underline" @click="navigator" :style="{color}">{{text}}</text>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
    props: {
      url: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: '#586b95'
      }
    },
    methods: {
      navigator() {
        uni.navigateTo({
          url: '/pages/webview/webview?url=' + this.url
        })
      }
    }
	}
</script>

<style>
.underline{
  text-decoration: underline;
}
</style>
