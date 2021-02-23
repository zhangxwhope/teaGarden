<template>
	<view class="content">
		<view class="title">uniCloud 基础示例</view>
    <view class="tips">
      <view>1.在uniCloud目录右键创建并关联服务空间</view>
      <view>2.在uniCloud/database目录内db_init.json上右键初始化云数据库</view>
      <view>3.在uniCloud/cloudfunctions目录右键选择“上传所有云函数”</view>
      <view>开始愉快的体验uniCloud吧！</view>
    </view>
    <view class="btn-list">
      <button type="primary" @click="add">新增一条数据</button>
      <button type="primary" @click="remove">删除一条数据</button>
      <button type="primary" @click="update">修改数据</button>
      <button type="primary" @click="get">查询前10条数据</button>
      <button type="primary" @click="useCommon">使用公共模块</button>
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
      // 新增一条数据
      add () {
        uni.showLoading({
          title: '处理中...'
        })
        uniCloud.callFunction({
          name: 'add',
          data: {
            name: 'DCloud',
            subType: 'uniCloud',
            createTime: Date.now()
          }
        }).then(res => {
          uni.hideLoading()
          uni.showModal({
            content: `成功添加一条数据，文档id为：${res.result.id}`,
            showCancel: false
          })
        }).catch(err => {
          uni.hideLoading()
          uni.showModal({
            content: `添加数据失败，错误信息为：${err.message}`,
            showCancel: false
          })
        })
      },
      // 删除一条数据
      remove () {
        uni.showLoading({
          title: '处理中...'
        })
        uniCloud.callFunction({
          name: 'remove'
        }).then(res => {
          uni.hideLoading()
          uni.showModal({
            content: res.result.msg,
            showCancel: false
          })
        }).catch(err => {
          uni.hideLoading()
          uni.showModal({
            content: `删除失败，错误信息为：${err.message}`,
            showCancel: false
          })
        })
      },
      // 修改数据
      update () {
        uni.showLoading({
          title: '处理中...'
        })
        uniCloud.callFunction({
          name: 'update',
          data: {
            name: 'DCloud',
            subType: 'html 5+',
            createTime: Date.now()
          }
        }).then(res => {
          uni.hideLoading()
          uni.showModal({
            content: res.result.msg,
            showCancel: false
          })
        }).catch(err => {
          uni.hideLoading()
          uni.showModal({
            content: `更新操作执行失败，错误信息为：${err.message}`,
            showCancel: false
          })
        })
      },
      // 查询前10条数据
      get () {
        uni.showLoading({
          title: '处理中...'
        })
        uniCloud.callFunction({
          name: 'get'
        }).then(res => {
          uni.hideLoading()
          uni.showModal({
            content: `查询成功，获取数据列表为：${JSON.stringify(res.result.data)}`,
            showCancel: false
          })
        }).catch(err => {
          uni.hideLoading()
          uni.showModal({
            content: `查询失败，错误信息为：${err.message}`,
            showCancel: false
          })
        })
      },
      // 使用公共模块
      useCommon () {
        uni.showLoading({
          title: '处理中...'
        })
        uniCloud.callFunction({
          name: 'use-common'
        }).then(res => {
          uni.hideLoading()
          uni.showModal({
            content: '云函数use-common返回结果：' + JSON.stringify(res.result),
            showCancel: false
          })
        }).catch(err => {
          uni.hideLoading()
          uni.showModal({
            content: `云函数use-common执行失败，错误信息为：${err.message}`,
            showCancel: false
          })
        })
      }
    }
	}
</script>

<style lang="scss">
  
</style>
