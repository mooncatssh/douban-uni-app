<template>
	<view class="content">
		<view class="container">
		<!-- 头部 -->
		<view class="container_title">
			<image class="img" :src="`http://120.79.164.150${detil.img}`"></image>
			<view class="container_right">
				<view class="title">{{detil.title}}({{detil.year}})</view>
				<view class="title2">{{detil.types}}/{{detil.countries}}</view>
				<view class="btn">
					<view class="btn1" @click="want(detil)">
						<uni-icons v-show="islook" class="icon" color="plum"  type="heart-filled" size="17"></uni-icons>
						<uni-icons v-show="!islook" class="icon" color="plum"  type="heart" size="17"></uni-icons>
						<text class="btn1_text">想看</text>
					</view>
					<view class="btn1" @click="wont(detil)">
						<uni-icons v-show="islooked" class="icon" color="plum" type="star-filled" size="20"></uni-icons>
						<uni-icons v-show="!islooked" class="icon" color="plum" type="star" size="20"></uni-icons>
						<text class="btn1_text">看过</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 中间 -->
		<view class="main">
			<view class="mian_box">
				<view class="box_left">豆瓣评分 TM</view>
				<uni-icons class="icon" color="plum" type="right" size="17"></uni-icons>
			</view>
			<view class="mian_start">
			<view class="rate">
			<view class="main_rate">{{detil.rate}}</view>
			<uni-rate :touchable="false" :value="5" size="15"  />
			</view>
			<!-- 评分条 -->
			<view class="fen">
				<view class="left">
				<view class="stars4 starstop" title="推荐">5星</view>
				<view class="stars4 starstop" title="推荐">4星</view>
				<view class="stars4 starstop" title="推荐">3星</view>
				<view class="stars4 starstop" title="推荐">2星</view>
				<view class="stars4 starstop" title="推荐">1星</view>
				</view>
				<view class="right">
					<view class="start_fen1"></view>
					<view class="start_fen2"></view>
					<view class="start_fen3"></view>
					<view class="start_fen4"></view>
					<view class="start_fen5"></view>
				</view>
			</view>
		</view>
		</view>
		<!-- 下部 -->
		<view class="container_footer">
			<view class="footer_titel">简介</view>
			<view class="keyword">{{detil.keyword}}</view>
			<view class="actor">影人</view>
			<view class="actor_list">{{detil.actor}}</view>
		</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		computed:{
			...mapState('m_home',['detil']),
		},
		data() {
			return {
				// 点击想看
				islook:false,
				islooked:false
			};
		},
		methods:{
			want(i){
				uni.$showMsg(i.title+'已加入想看名单')
				this.islook = !this.islook
			},
			wont(i){
				uni.$showMsg(i.title+'已加入看过')
				this.islooked = !this.islooked
			}
		}
	}
</script>

<style lang="scss">

.container{
	margin-left: 16px;
	width: 90%;
	height: 200px;
	.container_title{
		margin-top: 20px;
		width: 100%;
		height: 80%;
		display: flex;
		justify-content: space-between;
		.img{
			border-radius: 10px;
			width: 30%;
			height: 80%;
		}
		.container_right{
			width: 150px;
			margin-left: 10px;
			display: flex;
			flex-direction: column;
			.title{
				font-style: italic;
				font-size: 20px;
			}
			.title2{
				margin-top: 10px;
				font-size: 13px;
				color: #b6b6b6;
			}
			.btn{
				margin-top: 30px;
				height: 20%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.btn1{
					border-radius: 5px;
					margin-left: 10px;
					width: 100%;
					height: 30px;
					text-align: center;
					line-height: 25px;
					background-color: #eaeaea;
					padding-top: 5px;
					.btn1_text{
						color: plum;
						margin-left: 5px;
						font-size: 15px;
					}
				}
			}
		}
	}
	.main{
		border-radius: 10px;
		background-color: #ebebeb;
		margin-top: 10px;
		height: 90px;
		.mian_box{
			
			padding:0 10px;
			padding-top: 10px;
			display: flex;
			justify-content: space-between;
			.box_left{
				color: plum;
				font-size: 10px;
			}
			
		}
		.mian_start{
			display: flex;
			margin-left: 40px;
		.rate{
			display: flex;
			flex-direction: column;
			width: 45%;
			.main_rate{
				width: 50%;
				color: red;
				text-align: center;
				font-size: 25px;
			}
		}
		.fen{
			display: flex;
			margin-bottom: 100px;
			width: 40%;
			.left{
				width: 20%;
				height: 30px ;
				.stars4{
					color: #ffaaff;
					font-size: 9px;
					width: 30px;
				}
			}
			.right{
			.start_fen1{
				border-radius: 20px;
				height: 7px;
				width: 50px;
				background-color: yellow;
			}
			.start_fen2{
				margin-top: 5px;
				border-radius: 20px;
			    height: 7px;
				width: 25px;
				background-color: yellow;
			}
			.start_fen3{
				margin-top: 5px;
				border-radius: 20px;
				height: 7px;
				width: 10px;
				background-color: yellow;
			}
			.start_fen4{
				margin-top: 5px;
				border-radius: 20px;
				height: 7px;
				width: 30px;
				background-color: yellow;
			}
			.start_fen5{
				margin-top: 5px;
				border-radius: 20px;
				height: 7px;
				width: 100px;
				background-color: yellow;
			}
			}
		}
		}
	}
	.container_footer{
		margin-top: 10px;
		.footer_titel{
			font-size: 20px;
			color: #ffaaff;
		}
		.keyword{
			font-size: 30px;
			color: #aa55ff;
		}
		.actor{
			font-size: 20px;
			color: #ffaaff;
		}
		.actor_list{
			font-size: 20px;
			color: #aa55ff;
		}
	}
}
</style>
