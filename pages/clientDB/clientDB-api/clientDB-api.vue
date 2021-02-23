<template>
	<view>
    <alertCode ref="alertCode"></alertCode>
		
    <view class="tips">
      <view>schema配置详见uniCloud-aliyun/database下的book.schema.json、order.schema.json</view>
    </view>
    
    <uni-section title="简单查询" subTitle="在符合schema设置的前提下,直接在前端查询云端数据库的数据" type="line"></uni-section>
    <button type="primary" plain @click="getData('book')">查图书book表的数据</button>
    <button type="primary" plain @click="getData('order')">查订单order表的数据</button>
    
    <uni-section title="查询列表分页" subTitle="设置每页查询数量和页码查询" type="line"></uni-section>
    <view class="item">
      <text>页码：</text>
      <uni-number-box :min="1" @change="$event/1>0?pageSize = $event/1:''" :value="pageSize"></uni-number-box>
    </view>
    <view class="item">
      <text>每页查询数量：</text>
      <uni-number-box :min="1" @change="$event/1>0?pageCurrent = $event/1:''" :value="pageCurrent"></uni-number-box>
    </view>
    <button type="primary" plain @click="getPageData('book')">分页查图书book表的数据</button>
    
    <uni-section title="联表查询" subTitle="只需在db schema中，将两个表的关联字段建立映射关系，就可以把2个表当做一个虚拟表来直接查询。" type="line"></uni-section>
    <button type="primary" plain @click="getOrder">联表查询订单和图书</button>
    
    <uni-section title="getOne" subTitle="使用clientDB时可以在get方法内传入getOne:true来返回一条数据" type="line"></uni-section>
    <button type="primary" plain @click="getOneBook">查询一本图书数据</button>
    
    <uni-section title="getCount" subTitle="使用clientDB时可以在get方法内传入getCount:true来同时返回总数" type="line"></uni-section>
    <button type="primary" plain @click="getBookHasCount">查询结构返回总数</button>
    
    <uni-section title="field" subTitle="查询时可以使用field方法指定返回字段，在<uni-clientDB>组件中也支持field属性。不使用field方法时会返回所有字段" type="line"></uni-section>
    <button type="primary" plain @click="getBookTitle">仅查询图书数据的书名</button>
    
	</view>
</template>

<script>
  const db = uniCloud.database();
	export default {
		data() {
			return {
				pageSize: 1,
        pageCurrent: 2
			};
		},
    methods: {
      getData(tableName) {
        uni.showLoading({
          mask: true
        })
        db.collection(tableName)
          .get()
          .then(res => {
            this.$refs.alertCode.open(res.result)
          }).catch(err => {
            
          }).finally(() => {
            uni.hideLoading()
          })
      }
    }
	}
</script>

<style lang="scss">

</style>
