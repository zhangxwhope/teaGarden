<template>
	<view class="product-list">
		<!-- 头部 -->
    
    <!-- 顶部筛选，分类栏 -->
    <view class="top">
      <!-- 排序 -->
      <view class="sort-bar row">
        <view 
          class="item row center"
          :class="{active: item.current, last: index === sortList.length - 1}"
          v-for="(item, index) in sortList"
          :key="index"
          @click="changeSort(item)"
        >
          <text>{{ item.name }}</text>
          <view v-if="item.isPrice" class="icon-wrap">
            <text class="mix-icon icon-down" :class="{active: item.type === 3}"></text>
            <text class="mix-icon icon-arrow-top" :class="{active: item.type === 4}"></text>
          </view>
        </view>
      </view>
      <!-- 商品分类 -->
      <scroll-view 
        v-if="curCateItem.parent_id" 
        class="cate-bar" 
        scroll-x
        :scroll-left="curCateItem.left ? curCateItem.left : 0"
        scroll-with-animation 
      >
        <view class="cate-wrap row">
          <view class="fill-view"></view>
          <text 
            class="item" 
            v-for="item in cateList" 
            :key="item._id" 
            :class="{active: item._id === curCateItem._id}"
            @click="changeCategory(item)"
          >
            {{ item.name }}
          </text>
          <view class="fill-view"></view>
        </view>
      </scroll-view>
    </view>
    
    <!-- 产品列表 -->
    <product-list ref="productList" :list="list" :listType="listType"></product-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sortList: [
					{name: '综合排序', type: 1, current: true},
					{name: '销量', type: 2, current: false},
					{name: '价格', type: 3, isPrice: true, current: false}
				],
        cateList: [],
        curCateItem: {}, //当前分类
        list: [], //商品列表
        listType: 'column', //列表类型 column竖向列表 row 横向列表
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
