<template>
	<view>
		<!-- 头部 -->
		<view class="container" @click="top">
			<view class="ti">一周口碑电影榜</view>
			<view class="img">
				<image src="../../static/1691381756114.png"></image>
				<text>+10</text>
		    </view>
		</view>
		<view class="rec-movie">
		  <view class="showMsg" >
        <!-- 电影排行榜 -->
		<view class="titel"  @click="lookmorej1">
        <image src="../../static/3839A082A178F54ACD24ECD3ECC9749E.jpg"  class="top-img"></image>
		<view class="movies">
        <view class="top-movie" v-for="(item,i) in recMovie" :key="i">
        {{i+1}}.{{item.title}} <text class="tab"> {{item.rate}} </text>
        </view>
		</view>
		</view>
        <!-- 华语口碑 -->
        <view class="titel"  @click="lookmorej2">
        <image src="../../static/990AF7C48286E26833D9827D26E6B4D8.jpg"  class="top-img"></image>
        <view class="movies">
        <view class="top-movie" v-for="(item,i) in chinaMovie" :key="i">
        {{i+1}}.{{item.title}} <text class="tab"> {{item.rate}} </text>
        </view>
        </view>
        </view>
       <!-- 剩下电影 -->
		  <view class="titel" @click="lookmorej3">
		  <image src="../../static/5C49BB88C02A2851B99260E34F9F9641.png"  class="top-img"></image>
		  <view class="movies">
		  <view class="top-movie" v-for="(item,i) in lastMovie" :key="i" >
		  {{i+1}}.{{item.title}} <text class="tab"> {{item.rate}} </text>
		  </view>
		  </view>
		  </view>
   <!-- 第四个电影list -->
   <view class="titel"  @click="lookmorej4">
   <image src="../../static/EEEC6362C0C34EA01DECE3B72E6142EE.jpg"  class="top-img"></image>
   <view class="movies">
   <view class="top-movie" v-for="(item,i) in fourthMovie" :key="i">
   {{i+1}}.{{item.title}} <text class="tab"> {{item.rate}} </text>
   </view>
   </view>
   </view>
   <!-- 第五个电影list -->
      <view class="titel" @click="lookmorej5">
      <image src="../../static/F38E275BCB5F3E291BBC99A932971ECE.jpg"  class="top-img"></image>
      <view class="movies">
      <view class="top-movie" v-for="(item,i) in fifthMovie" :key="i" >
      {{i+1}}.{{item.title}} <text class="tab"> {{item.rate}} </text>
      </view>
      </view>
      </view>
       
     <!-- 第六个电影list -->
       
      <view class="titel" @click="lookmorej6">
      <image src="../../static/v2-cf514fe205a58362131d9916df8198f9_b.jpg"  class="top-img"></image>
      <view class="movies">
      <view class="top-movie" v-for="(item,i) in sixthMovie" :key="i" >
      {{i+1}}.{{item.title}} <text class="tab"> {{item.rate}} </text>
      </view>
      </view>
      </view>
       
		  </view>
		</view>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default {
		data() {
			return {
				recMovie:[],
        chinaMovie:[],
        lastMovie:[],
        fourthMovie:[],
        fifthMovie:[],
        sixthMovie:[]
			}
		},
    onLoad(){
      this.getRecMovie()
      this.getChinaMovie()
      this.getLastMovie()
      this.getFourthMovie()
      this.getFifthMovie()
      this.getSixthMovie()
         },
         methods:{
			 ...mapMutations('m_home',['getList']),
        async getRecMovie(){
      const{data:res}= await uni.$http.get('/query?name=动作&limit=3')
     this.recMovie=res
      console.log(res)
       },
       // 获取国产电影
    async   getChinaMovie(){
         const{data:res}= await uni.$http.get('/query?name=惊悚&limit=3')  
         this.chinaMovie=res
       },
      // 获取剩余电影
    async    getLastMovie(){
         const{data:res}= await uni.$http.get('/query?name=喜剧&limit=3')
         this.lastMovie=res
       },
       // 获取第四个电影列表
   async   getFourthMovie(){
        const{data:res}= await uni.$http.get('/query?name=爱情&limit=3')
        this.fourthMovie=res
      },
      // 获取第五个电影列表
     async getFifthMovie(){
        const{data:res}=await uni.$http.get('/query?name=犯罪&limit=3')
        this.fifthMovie=res
      },
      // 获取第六个电影列表
      async  getSixthMovie(){
          const{data:res}=await uni.$http.get('/query?name=科幻&limit=3')
          this.sixthMovie=res
        },
		//跳转top
		async top(){
			const {data: res} = await uni.$http.get('/query?limit=40')
			this.getList(res)
			uni.navigateTo({
				url:'../../subpkg/top/top'
			})
		},
		async lookmorej1(){
			const {data: res} = await uni.$http.get('/query?name=动作&limit=40')
			this.getList(res)
			uni.navigateTo({
				url:'../../subpkg/top/top'
			})
		},
		async lookmorej2(){
			const {data: res} = await uni.$http.get('/query?name=惊悚&limit=40')
			this.getList(res)
			uni.navigateTo({
				url:'../../subpkg/top/top'
			})
		},
		async lookmorej3(){
			const {data: res} = await uni.$http.get('/query?name=喜剧&limit=40')
			this.getList(res)
			uni.navigateTo({
				url:'../../subpkg/top/top'
			})
		},
		async lookmorej4(){
			const {data: res} = await uni.$http.get('/query?name=爱情&limit=40')
			this.getList(res)
			uni.navigateTo({
				url:'../../subpkg/top/top'
			})
		},
		async lookmorej5(){
			const {data: res} = await uni.$http.get('/query?name=犯罪&limit=40')
			this.getList(res)
			uni.navigateTo({
				url:'../../subpkg/top/top'
			})
		},
		async lookmorej6(){
			const {data: res} = await uni.$http.get('/query?name=科幻&limit=40')
			this.getList(res)
			uni.navigateTo({
				url:'../../subpkg/top/top'
			})
		},
    }
	}
 
    
 
</script>

<style lang="scss">
.container{
	width: 100%;
	height: 170px;
	padding-top: 30px;
	background-image: url('../../static/OIP-C.jpg');
	background-size: cover;
	.ti{
		margin-top: 10px;
		font-size: 25px;
		font-style: italic;
		color:#ffaaff;
		
	}
	.img{
		display: flex;
		align-items: center;
		margin-top: -30px;
		height: 200px;
		image{
			border-radius: 10px;
			width: 50%;
			height: 50%;
			
		}
		text{
			margin-left: 10px;
			font-size: 20px;
			color: #cecece;
		}
	}

}
.titel{
	height: 100px;
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.top-img{
		border-radius: 5px;
		width: 100px;
		height: 100px;
	}
	.movies{
		margin-right: 20px;
		border: 1px solid #cecece;
		width: 200px;
		height:70px;
		display: flex;
		flex-direction: column;
		.top-movie{
			margin-left: 10px;
			margin-top: 5px;
			font-size: 12px;
			.tab{
				margin-left: 10px;
				color: #ee0000;
			}
		}
	}
	
}  
</style>
