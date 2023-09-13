export default {
	// 当前模块开启命名空间
	namespaced: true,
	state:()=>({
		// 信息列表
		list:[],
		// 详情页列表
		detil:[]
	}),
	mutations:{
		// 获取主页信息
		getList(state,list){
			
			state.list = list
		console.log(state.list)
		},
		// 详情页数据获取
		link(stae,detil){
			stae.detil = detil
			console.log(stae.detil)
		}
	},
	getter:{
		
	}
}