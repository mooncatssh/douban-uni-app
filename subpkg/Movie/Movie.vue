<template>
	<view>
		<!-- 更多电影列表 -->
		<view class="container">
		<view class="movielist" v-for="(item1,i) in list" @click="clickmovie(item1)">
			<image :src="`http://120.79.164.150${item1.img}`"></image>
			<view class="text">{{item1.title}}</view>
			<view class="rate">
			<uni-rate :touchable="false" :value="5" size="10"  />
			<view class="rate1">{{item1.rate}}</view>
			</view>
		</view> 
	</view>
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	export default {
		computed:{
			...mapState('m_home',['list']),
		},
		data() {
			return {
				
			};
		},
		onLoad(){
			
		},
		methods:{
			...mapMutations('m_home',['link']),
			// 电影详情
			clickmovie(i){
				this.link(i)
				uni.navigateTo({
					url:'../../subpkg/detail/detail'
				})
			}
		}
	}
</script>

<style lang="scss">
.container{
	margin-left: 30px;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
.movielist{
	width: 30%;
	height: 150px;
	margin-top: 30px;
	image{
		width: 70%;
		height: 70%;
	}
	.text{
		width: 70%;
		font-size: 7px;
	}
	.rate{
		width: 70%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.rate1{
			font-size: 10px;
			text-align: right;
		}
	}
}
}
</style>
