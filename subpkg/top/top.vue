<template>
	<view>
		<view class="dou-top">
			<view class="titel"> 一周口碑电影榜</view>
         <view>
        <view class="titel2"> 豆瓣电影</view>
         </view>
		</view>
    <!-- 头部 -->
	<view class="contal">
		<view class="tt">
			<view class="left">看过0部 <text class="left_text">/ 共10部</text></view>
		</view>
		<view class="right" @click="login">登录查看成就</view>
		 </view>
    <!--大盒子  -->
    <view class="week-box" v-for="(item,i) in list" :key="i" @click="detail(item)">
      <!-- 存放图片 -->
      <view class="rank-box">No.{{i+1}}</view>
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
		<view class="looked" @click="look">
			<uni-icons class="icon" v-show="!islooked"  color="#ffaaff"   type="star" size="25"></uni-icons>
			<uni-icons class="icon" v-show="islooked"  color="#ffaaff" type="star-filled" size="25"></uni-icons>
			<view class="looked_1">看过</view>
		</view>
		</view>
		</view>
        <view class="keyword">
        	{{item.keyword}}
        </view>
    </view>
    
	</view>
</template>

<script>
	import {mapMutations,mapState} from 'vuex'
	export default {
		computed:{
			...mapState('m_home',['list']),
		},
		data() {
			return {
				weekList:[],
				islooked:false
			};
		},
    methods:{
		...mapMutations('m_home',['link']),
	  login(){
		  uni.navigateTo({
			  url:'../../subpkg/my-login/my-login'
		  })
	  },
	  look(){
		  this.islooked = !this.islooked
	  },
	  detail(i){
	  	this.link(i)
	  	uni.navigateTo({
	  		url:'../../subpkg/detail/detail'
	  	})
	  },
    }
	}
</script>

<style lang="scss">
.dou-img{
  width: 50px;
  height: 50px;
}
.dou-top{
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100px;
	background-color: #262626;
	padding-top: 50px;
	.titel{
		font-size: 25px;
		font-style: italic;
		color:#b3b300;
		width: 80%;
		text-align: center;
		height: 50px;
	}
	.titel2{
		width: 100%;
		height: 50px;
		font-size: 17px;
		color:#b3b300;
		font-style: italic;
		text-align: center;
	}
}

.contal{
	width: 90%;
	height: 30px;
	display: flex;
	padding-top: 20px;
	margin: 0 auto;
	justify-content: space-between;
	.left{
		margin-top: 10px;
		font-size: 13px;
		.left_text{
			font-size: 13px;
			color: #b5b5b5;
		}
	}
	.right{
		width: 100px;
		border-radius: 20px;
		background-color: #ffff00;
		font-size: 13px;
		text-align: center;
		height: 30px;
		line-height: 30px;
		color: #aa55ff;
	}
	}
.week-box{
  width: 90%;
  height: 100px;
  margin: 0 auto;
margin-top: 10px;
margin-bottom: 140px;
.img{
	
	width:150px;
	height:100px;
	image{
		border-radius: 10px;
		width: 110%;
		height: 110%;
	}
}
  .rank-box{
	  border-radius: 2px;
	  width: 50px;
	  height: 20px;
	  color: #ffffff;
	  font-size: 15px;
	  text-align: center;
	  background-color: plum;
  }
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
  .keyword{
	  margin-top: 10px;
	  background-color: #e5e5e5;
	  height: 40px;
	  font-size: 13px;
	  line-height: 40px;
	  color: #aa55ff;
	  padding-left: 10px;
	  border-radius: 10px;
  }

  
}



</style>
