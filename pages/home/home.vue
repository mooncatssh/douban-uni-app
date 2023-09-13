<template>
	<view>
		<!-- 主体-->
		<view class="container">
			<!-- 搜索栏 -->
			<view class="my-search" @click="mysearch">
				<view class="my-search-box1" >
					<uni-icons type="search" size="20"></uni-icons>
					<text>搜索</text>
				</view>
			</view>
			<!-- 电影内容 -->
			<view class="contant">
				<scroll-view class="contant_box" scroll-y="true">
					<!-- 动作 -->
					<!-- 电影分栏 -->
					<view class="movie_box">
						<view class="titel">
							<text class="tiel">动作</text>
							<view class="na1" @click="lookmore">查看更多</view>
						</view>
					<view class="movie_box2">
						<scroll-view class="contant_box2" scroll-x="true">
							<!-- 内容区 -->
							<view class="movie" v-for="(item1,i1) in movielistd" :key="i1" @click="clickmovie(item1)">
								<image :src="`http://120.79.164.150${item1.img}`"></image>
								<view class="text">{{item1.title}}</view>
								<view class="rate">
								<uni-rate :touchable="false" :value="5" size="10"  />
								<view class="rate1">{{item1.rate}}</view>
								</view>
							</view>
						</scroll-view>
					</view>
					</view>
					<!-- 奇幻 -->
					<!-- 电影分栏 -->
					<view class="movie_box">
						<view class="titel">
							<text class="tiel">奇幻</text>
							<view class="na1" @click="lookmoreq">查看更多</view>
						</view>
					<view class="movie_box2">
						<scroll-view class="contant_box2" scroll-x="true">
							<!-- 内容区 -->
							<view class="movie" v-for="(item1,i1) in movielistq" :key="i1" @click="clickmovie(item1)">
								<image :src="`http://120.79.164.150${item1.img}`"></image>
								<view class="text">{{item1.title}}</view>
								<view class="rate">
								<uni-rate :touchable="false" :value="5" size="10"  />
								<view class="rate1">{{item1.rate}}</view>
								</view>
							</view>
						</scroll-view>
					</view>
					</view>
					<!-- 剧情 -->
					<!-- 电影分栏 -->
					<view class="movie_box">
						<view class="titel">
							<text class="tiel">剧情</text>
							<view class="na1" @click="lookmorej">查看更多</view>
						</view>
					<view class="movie_box2">
						<scroll-view class="contant_box2" scroll-x="true">
							<!-- 内容区 -->
							<view class="movie" v-for="(item1,i1) in movielistj" :key="i1" @click="clickmovie(item1)">
								<image :src="`http://120.79.164.150${item1.img}`"></image>
								<view class="text">{{item1.title}}</view>
								<view class="rate">
								<uni-rate :touchable="false" :value="5" size="10"  />
								<view class="rate1">{{item1.rate}}</view>
								</view>
							</view>
						</scroll-view>
					</view>
					</view>
					<!-- 冒险 -->
					<!-- 电影分栏 -->
					<view class="movie_box">
						<view class="titel">
							<text class="tiel">冒险</text>
							<view class="na1" @click="lookmorem">查看更多</view>
						</view>
					<view class="movie_box2">
						<scroll-view class="contant_box2" scroll-x="true">
							<!-- 内容区 -->
							<view class="movie" v-for="(item1,i1) in movielistm" :key="i1" @click="clickmovie(item1)">
								<image :src="`http://120.79.164.150${item1.img}`"></image>
								<view class="text">{{item1.title}}</view>
								<view class="rate">
								<uni-rate :touchable="false" :value="5" size="10"  />
								<view class="rate1">{{item1.rate}}</view>
								</view>
							</view>
						</scroll-view>
					</view>
					</view>
					<!-- 喜剧 -->
					<!-- 电影分栏 -->
					<view class="movie_box">
						<view class="titel">
							<text class="tiel">喜剧</text>
							<view class="na1" @click="lookmorex">查看更多</view>
						</view>
					<view class="movie_box2">
						<scroll-view class="contant_box2" scroll-x="true">
							<!-- 内容区 -->
							<view class="movie" v-for="(item1,i1) in movielistx" :key="i1" @click="clickmovie(item1)">
								<image :src="`http://120.79.164.150${item1.img}`"></image>
								<view class="text">{{item1.title}}</view>
								<view class="rate">
								<uni-rate :touchable="false" :value="5" size="10"  />
								<view class="rate1">{{item1.rate}}</view>
								</view>
							</view>
						</scroll-view>
					</view>
					</view>
					<!-- 爱情 -->
					<!-- 电影分栏 -->
					<view class="movie_box">
						<view class="titel">
							<text class="tiel">爱情</text>
							<view class="na1" @click="lookmorea">查看更多</view>
						</view>
					<view class="movie_box2">
						<scroll-view class="contant_box2" scroll-x="true">
							<!-- 内容区 -->
							<view class="movie" v-for="(item1,i1) in movielistx" :key="i1" @click="clickmovie(item1)">
								<image :src="`http://120.79.164.150${item1.img}`"></image>
								<view class="text">{{item1.title}}</view>
								<view class="rate">
								<uni-rate :touchable="false" :value="5" size="10"  />
								<view class="rate1">{{item1.rate}}</view>
								</view>
							</view>
						</scroll-view>
					</view>
					</view>
				</scroll-view>
			</view>
			<!-- 底部 -->
			<view class="footer">证照信息</view>
		</view>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default {
		data() {
			return {
				// 电影内容
				movielistd:[],
				movielistq:[],
				movielistm:[],
				movielistj:[],
				movielistx:[],
				movielistf:[],
				lists:[]
				
			};
		},
		onLoad(){
			this.getMovieListd()
			this.getMovieListq()
			this.getMovieListj()
			this.getMovieListm()
			this.getMovieListx()
		},
		methods:{
			...mapMutations('m_home',['link','getList']),
			// 动作
			async getMovieListd(){
			 	const {data: res} = await uni.$http.get('/query?name='+'动作')
		
				this.movielistd = res
			},
			// 奇幻
			async getMovieListq(){
			 	const {data: res} = await uni.$http.get('/query?name='+'奇幻')
				
				this.movielistq = res
			},
			// 剧情
			async getMovieListj(){
			 	const {data: res} = await uni.$http.get('/query?name='+'剧情')
				this.movielistj = res
			},
			// 冒险
			async getMovieListm(){
			 	const {data: res} = await uni.$http.get('/query?name='+'冒险')
				
				this.movielistm = res
			},
			// 喜剧
			async getMovieListx(){
			 	const {data: res} = await uni.$http.get('/query?name='+'喜剧')
			
				this.movielistx = res
			},
			// 爱情
			async getMovieListf(){
			 	const {data: res} = await uni.$http.get('/query?name='+'爱情')
				this.movielistf = res
			},
			// 跳转查看
			async lookmore(){
				const {data: res} = await uni.$http.get('/query?name=动作&limit=40')
				this.getList(res)
				uni.navigateTo({
					url:'../../subpkg/Movie/Movie'
				})
			},
			async lookmoreq(){
				const {data: res} = await uni.$http.get('/query?name=奇幻&limit=40')
				this.getList(res)
				uni.navigateTo({
					url:'../../subpkg/Movie/Movie'
				})
			},
			async lookmorej(){
				const {data: res} = await uni.$http.get('/query?name=剧情&limit=40')
				this.getList(res)
				uni.navigateTo({
					url:'../../subpkg/Movie/Movie'
				})
			},
			async lookmorem(){
				const {data: res} = await uni.$http.get('/query?name=冒险&limit=40')
				this.getList(res)
				uni.navigateTo({
					url:'../../subpkg/Movie/Movie'
				})
			},
			async lookmorex(){
				const {data: res} = await uni.$http.get('/query?name=喜剧&limit=40')
				this.getList(res)
				uni.navigateTo({
					url:'../../subpkg/Movie/Movie'
				})
			},
			async lookmorea(){
				const {data: res} = await uni.$http.get('/query?name=爱情&limit=40')
				this.getList(res)
				uni.navigateTo({
					url:'../../subpkg/Movie/Movie'
				})
			},
			// 电影详情
			clickmovie(i){
				this.link(i)
				uni.navigateTo({
					url:'../../subpkg/detail/detail'
				})
			},
			// 搜索
			mysearch(){
				uni.navigateTo({
					url:'../../subpkg/my-search/my-search'
				})
			}
			
		}
	}
</script>

<style lang="scss">
.container{
    .my-search{
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		padding: 0 20px;
		width: 80%;
		height: 35px;
		border-radius: 10px;
		background-color: #e8e8e8;
		.my-search-box1{
			display: flex;
			justify-content: center;
			align-items: center;
			text{
				font-size: 15px;
				// font-style: italic;
				color: #808080;
			}
		}
	}
	.contant{
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		width: 90%;
		.contant_box{
			.movie_box{
				.titel{
					margin-top: 10px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.tiel{
						font-style: italic;
						font-size: 20px;
						color: #ffaaff;
					}
					.na1{
						font-size: 15px;
						color: #48d900;
					}
				}
			}
			.movie_box2{
				.contant_box2{
					white-space: nowrap;
					.movie{
						padding: 0;
						margin-top: 10px;
						display: inline-block;
						width: 90px;
						height: 150px;
						image{
							border-radius: 7px;
							width: 80%;
							height: 80%;
						}
					.text{
						width: 80%;
						font-style: italic;
						font-size: 10px;
						
						}
						.rate{
							width: 80%;
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
			}
		}
	}
	.footer{
		
		height: 50px;
		text-align: center;
		line-height: 60px;
		font-size: 14px;
		color: #cecece;
	}
}
</style>
