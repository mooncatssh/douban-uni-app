<template>
	<view>
		<view class="container">
			<!-- 登录 -->
			<view class="login">
				<view class="btn" @click="login">登录</view>
			</view>
			<!-- 下半 -->
			<view class="main">
				<!-- 标题 -->
				<view class="title">
					<view class="left">我的书影音</view>
					<view class="right"  @click="login">登录查看
					<uni-icons class="icon" color="#c1c1c1" type="right" size="13"></uni-icons>
					</view>
				</view>
				<!-- 中间主体 -->
				<view class="center">
					<view class="center_box1">
						<!-- 左边 -->
						<view class="left">
							<image src="../../static/演绎难度.png"></image>
							<view class="left_left">
								<view class="text1">观影分析</view>
								<view class="text2">0 看过</view>
							</view>
						</view>
						<!-- 右边 -->
						<view class="right">
							<view class="right_right">标记10部影片开启观影分析</view>
							<view class="right_btn"  @click="login">立即开启</view>
							<uni-icons class="icon" color="#c1c1c1" type="right" size="13"></uni-icons>
						</view>
					</view>
					<view class="center_box1">
						<!-- 左边 -->
						<view class="left">
							<image src="../../static/ico03.png"></image>
							<view class="left_left">
								<view class="text1">读书分析</view>
								<view class="text2">0 读过</view>
							</view>
						</view>
						<!-- 右边 -->
						<view class="right">
							<view class="right_right">标记10本书开启读书分析</view>
							<view class="right_btn"  @click="login">立即开启</view>
							<uni-icons class="icon" color="#c1c1c1" type="right" size="13"></uni-icons>
						</view>
					</view>
					<view class="center_box1">
						<!-- 左边 -->
						<view class="left">
							<image src="../../static/音乐.png"></image>
							<view class="left_left">
								<view class="text1">音乐分析</view>
								<view class="text2">0 听过</view>
							</view>
						</view>
						<!-- 右边 -->
						<view class="right">
							<view class="right_right">标记10张唱片开启音乐分析</view>
							<view class="right_btn"  @click="login">立即开启</view>
							<uni-icons class="icon" color="#c1c1c1" type="right" size="13"></uni-icons>
						</view>
					</view>
				</view>
				<!-- 底部 -->
				<view class="footer">
					<view class="footer_box1">关于</view>
					<view class="footer_box2">用户协议</view>
					<view class="footer_box3">隐私协议</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			login(){
				uni.navigateTo({
					url:'../../subpkg/my-login/my-login'
				})
			}
		}
	}
</script>

<style lang="scss">
.container{	
    .login{
	display: flex;
	align-items: center;
	width: 100%;
	height: 150px;
	background-color: #ffaaff;
	.btn{
		width: 50%;
		height: 40px;
		margin: 0 auto;
		background-color: white;
		border-radius: 20px;
		text-align: center;
		line-height: 40px;
		font-size: 20px;
		color: #aa00ff;
	}
   }
   .main{
	   width: 90%;
	   margin: 0 auto;
	   .title{
		   display: flex;
		   justify-content: space-between;
		   margin-top: 10px;
		   .left{
			   font-size: 20px;
			   color: #ffaa7f;
		   }
		   .right{
			   font-size: 13px;
			   color: #c1c1c1;
		   }
	   }
   }
   .center{
	   width: 100%;
	   margin: 0 auto;
	   .center_box1{
		   height: 62px;
		   display: flex;
		   justify-content: space-between;
		   align-items: center;
		   border-bottom: 0.3px solid #ffaaff;
		   .left{
			   margin-top: 20px;
			   width: 120px;
			   display: flex;
			   justify-content: space-between;
			   align-items: center;
			   image{
				width: 50px;
				height: 30px;
			   }
			   .left_left{
				   margin-left: 20px;
				   width: 150px;
				   .text1{
					   font-size: 14px;
					   color: #aa00ff;
				   }
				   .text2{
					   margin-top: 10px;
					   font-size: 15px;
					   color: #c1c1c1;
				   }
			   }
		   }
		   .right{
			   width: 150px;
			   display: flex;
			   justify-content: space-between;
			   align-items: center;
			   .right_right{
				   margin-top: 40px;
				   width: 70px;
				   font-size: 10px;
				   color: #c1c1c1;
			   }
			   .right_btn{
				    margin-top: 40px;
					border-radius: 5px;
					width: 80px;
					background-color: #ffaaff;
				   height: 20px;
				   font-size: 13px;
				   color: #aa00ff;
				   text-align: center;
				   line-height: 20px;
			   }
			   .icon{
				   margin-top: 40px;
			   }
		   }
	   }
   }
   .footer{
	   width: 100%;
	   margin: 0 auto;
	   margin-top: 3px;
	   .footer_box1{
		   margin-top: 5px;
		   font-size: 13px;
		   color: #b6b6b6;
	   }
	   .footer_box2{
		   margin-top: 5px;
	   		   font-size: 15px;
	   		   color: #b6b6b6;
	   }
	   .footer_box3{
		   margin-top: 5px;
	   		   font-size: 15px;
	   		   color: #b6b6b6;
	   }
   }
   
}
</style>
