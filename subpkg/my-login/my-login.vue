<template>
	<view>
		<view class="container">
		<view v-show="isLogin" class="login_titel">账号密码登录/注册</view>
		<view v-show="isLogin" class="login_tite2">未注册的手机，验证后即完成注册</view>
		<input v-show="isLogin" class="uni-input1" focus placeholder="账号" v-model="Account" />
		<input v-show="isLogin" class="uni-input1" focus placeholder="密码" v-model="password" />
		<view v-show="isLogin"  @click="ismylogin" class="login_btn">登录</view>
		
		<view class="login" v-show="!isLogin" @click="mylogin">账号密码登录/注册</view>
		<radio class="login_rad" v-show="!isLogin"  :checked="ischecked" @click="checkded"></radio>
		<view v-show="!isLogin" class="footer">同意<text class="text">豆瓣使用协议</text>/<text class="text">隐私政策</text></view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin: false,
				ischecked: false,
				Account:'',
				password:''
			};
		},
		methods: {
			mylogin() {
				if (!this.ischecked) return uni.$showMsg('请先勾选隐私协议后继续登录')
				this.isLogin = true
			},
			checkded(){
				this.ischecked = !this.ischecked
			},
			ismylogin(){
				if (!this.ischecked) return uni.$showMsg('请先勾选隐私协议后继续登录')
				if(this.Account == 'cxy' && this.password == '123456'){
					uni.$showMsg('登录成功')
					this.Account = ''
					this.password = ''
					uni.switchTab({
						url: '../../pages/home/home'
					})
					
				}else if(this.Account == ''){
					uni.$showMsg('请输入账号')
				}
				else if(this.password == ''){
					uni.$showMsg('请输入密码')
				}else{
					uni.$showMsg('登录失败')
				}
				
			}
		}
	}
</script>

<style lang="scss">
.container{
	margin-top: 130px;
	.login {
		width: 70%;
		height: 50px;
		border-radius: 10px;
		margin: auto;
		text-align: center;
		line-height: 50px;
		background-color: #ffaaff;
		color: #aa55ff;
	}
	.login_rad{
		width: 70%;
		margin-left: 30px;
		position: absolute;
		bottom: 5px;
		transform:scale(0.7,0.7);
	}
	.footer{
		width: 70%;
		margin-left: 80px;
		position: absolute;
		bottom: 10px;
		font-size: 13px;
		.text{
			color: #ffaaff;
		}
	}
	.login_titel{
		width: 80%;
		text-align: center;
		margin: 0 auto;
		font-size: 30px;
		color: #ffaaff;
	}
	.login_tite2{
		width: 75%;
		text-align: center;
		margin: 0 auto;
		font-size: 15px;
		color: #d18bd1;
	}
	.uni-input1{
		height: 40px;
		width: 80%;
		margin: 0 auto;
		margin-top: 10px;
		color: #aa55ff;
		font-size: 15px;
		border-radius: 5px;
		background-color: #eaeaea;
	}
	.login_btn{
		width: 40%;
		margin: 0 auto;
		margin-top: 10px;
		text-align: center;
		height: 30px;
		line-height: 30px;
		border-radius: 5px;
		background-color: #ffaaff;
		color: #aa55ff;
	}
}
</style>