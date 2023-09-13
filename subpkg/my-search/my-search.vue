<template>
	<view>
	<view class="search-box">
		<uni-search-bar  @input="input" :radius="100" cancelButton="none"></uni-search-bar>
	</view>
	<!-- 搜索列表 -->
	<view class="search-list" v-if="searchResult.length !== 0">
		<view class="search-list-item" v-for="(item,i) in searchResult" :key="i" @click="gotodetail(item)">
			<view class="box-content">
			 <view class="img">
			   <image :src="`http://120.79.164.150${item.img}`" ></image>
			 </view>
			 <!-- 存放电影名 导演简介 -->
			 <view class="left_box">
			 <view class="info-box">
			<view class="title-box" style="color: #3f1717; font-style: italic; font-weight: bold;">
			     {{item.title}}:
			   </view>
			   <!-- 评分 -->
					<view class="rate">
						<uni-rate :touchable="false" :value="5" size="10"  />
						<text>{{item.rate}}</text> 
					</view>
			   <!-- 导演，国家 -->
			   <view class="contry" >
			   {{item.year}}/{{item.countries}}/{{item.actor}}/  {{item.director}}
			   </view>
					<!-- 看过 -->
			   </view>
					
					</view>
		</view>
		</view>
	</view>
	</view>
</template>

<script>
	import {mapMutations } from 'vuex'
	export default {
		data() {
			return {
				timer:null,
				//搜索参数
				kw:0,
				//搜索的结果列表
				searchResult:[],
			};
		},
		computed:{
			
		},
		
		methods:{
			...mapMutations('m_home','getList'),
		input(e){
			//计时器
			clearTimeout(this.timer)
			this.timer = setTimeout(()=>{
				this.kw = e
				this.getSearch()
			},500)	
		},
			//搜索列表请求
			async getSearch(){
				if(this.kw == ''){
					return this.searchResult = []
				}
				const {data:res} = await uni.$http.get('/query+?id='+this.kw)
				
				this.searchResult = res
			},
			//点击跳转商品详情页
			gotodetail(i){
			    this.getList(i)
					uni.navigateTo({
						url:'../../subpkg/detail/detail'
				})
			},
			clear(){
				this.historyList = []
			}
		}
	}
</script>

<style lang="scss">
.uni-search-bar{
	display: flex;
	flex-direction: row;
	position: relative;
	padding: 16rpx;
}
.search-box{
	position: sticky;
	top: 0;
	z-index: 999;
	
}
.search-list-item{
	background-color: #ffffff;
	display: flex;
	padding-bottom: 20px;
	align-items: center;//垂直居中对齐
	justify-content: space-between;//两端对齐，间隔相等
	.box-content{
		  margin-top: 10px;
		  display: flex;
		  justify-content: space-around;
		  .left_box{
			  display: flex;
			  justify-content: space-between;
			  align-items: center;
		  .info-box{
		  margin-left: 15px;
		  width: 150px;
		  .title-box{
		  font-size: 17px;
	}
	.rate{
		  margin-top: 11px;
		  display: flex;
		  align-items: center;
		  text{
			  font-size: 10px;
			  margin-left: 10px;
			  color: #cbcbcb;
		  }
	}
	.contry{
		  margin-top: 10px;
		  font-size: 13px;
		  color: #bcbcbc;
	}
	}
	.looked{
		  display: flex;
		  flex-direction: column;
		  border-left:  1px solid pink;
		  width: 40px;
		  height: 50%;
		 padding-top: 30px;
		  padding-left: 20px;
		  .icpn{
			 
		  }
		  .looked_1{
			  color: #ffaaff;
			  font-size: 14px;
		  }
	}
	}
	}
}

</style>
