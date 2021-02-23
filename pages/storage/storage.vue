<template>
	<view class="content">
		<view class="title">直接上传文件到云存储</view>
    <view class="tips">
      <text>各个小程序平台运行时，网络相关的 API 在使用前需要配置域名白名单。</text>
      <j-link text="参考" url="https://uniapp.dcloud.io/uniCloud/quickstart?id=%e5%b0%8f%e7%a8%8b%e5%ba%8f%e4%b8%ad%e4%bd%bf%e7%94%a8unicloud%e7%9a%84%e7%99%bd%e5%90%8d%e5%8d%95%e9%85%8d%e7%bd%ae"></j-link>
    </view>
    <view class="btn-list">
      <button type="primary" plain @click="upload">选择文件“后”上传</button>
      <text class="tips">先调用chooseImage选完文件/图片/视频后用uploadFile方法上传</text>
      <button type="primary" plain @click="chooseAndUploadFile">选择文件“并”上传</button>
      <text class="tips">调用chooseAndUploadFile方法选择文件/图片/视频直接上传</text>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
    methods: {
      // 选择文件“后”上传
      upload () {
        new Promise((resolve, reject) => {
          uni.chooseImage({
             count: 1,
             success: (res) => {
               console.log(res, 'chooseImage')
               const file = res.tempFiles[0]
               this.getImageInfo(file, resolve, reject)
             },
             fail: () => {
               reject(new Error('Fail_Cancel'))
             }
          })
        }).then(options => {
          uni.showLoading({
            title: '文件上传中...'
          })
          return uniCloud.uploadFile({
            ...options,
            onUploadProgress(e) {
              console.log(e, 'onUploadProgress')
            }
          })
        }).then(res => {
          uni.hideLoading()
          console.log(res)
          uni.showModal({
            content: '图片上传成功，fileId为：' + res.fileID,
            showCancel: false
          })
        }).catch(err => {
          uni.hideLoading()
          console.log(err)
          if (err.message !== 'Fail_Cancel') {
            uni.showModal({
              content: `图片上传失败，错误信息为：${err.message}`,
              showCancel: false
            })
          }
        })
      },
      // 选择文件“并”上传
      chooseAndUploadFile () {
        uni.showLoading({
          title: '文件上传中...'
        })
        uniCloud.chooseAndUploadFile({
          type: 'image',
          onChooseFile: (res) => {
            console.log(res, 'onChooseFile')
            const processAll = []
            for (let i = 0; i < res.tempFiles.length; i++) {
              processAll.push(this.cropImg(res.tempFiles[i]))
            }
            return Promise.all(processAll).then(fileList => {
              let result = {
                tempFilePaths: []
              }
              result.tempFiles = fileList.map((fileItem, index) => {
                result.tempFilePaths.push(fileItem.filePath)
                return {
                  path: fileItem.filePath,
                  cloudPath: '' + Date.now() + index + '.' + fileItem.cloudPath.split('.').pop()
                }
              })
              return result
            })
          }
        }).then(res => {
          console.log(res)
          uni.showModal({
            content: JSON.stringify(res),
            showCancel: false
          })
        }).catch(err => {
          console.log(err)
          uni.showModal({
            content: JSON.stringify(err),
            showCancel: false
          })
        }).finally(() => {
          uni.hideLoading()
        })
      },
      getImageInfo(file, resolve, reject) {
         let ext
         let filePathProcessed = file.path
         // #ifdef H5
         ext = file.name.split('.').pop()
         resolve({
           filePath: filePathProcessed,
           cloudPath: Date.now() + '.' + ext
         })
         // #endif
         // #ifndef H5
         uni.getImageInfo({
           src: filePathProcessed,
           success(info) {
             ext = info.type.toLowerCase()
             resolve({
               filePath: filePathProcessed,
               cloudPath: Date.now() + '.' + ext
             })
           },
           fail(err) {
             reject(new Error(err.errMsg || '未能获取图片类型'))
           }
         })
         // #endif
      },
      cropImg(file) {
        return new Promise((resolve, reject) => {
          this.getImageInfo(file, resolve, reject)
        })
      }
    }
	}
</script>

<style lang="scss">

</style>
