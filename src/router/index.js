import Vue from 'vue'
import VueRouter from 'vue-router' //导入router
import Index from '../view/index.vue'
Vue.use(VueRouter) //挂载router

// const index = ()=>import('@/view/index')
const routes = [
	{
		path: '/',
		redirect: '/index'
	},
	{
		path: '/index',
		name: 'index',
		component: Index
	}
]

//创建路由对象，配置映射关系
const router = new VueRouter({
	mode: 'history',
	routes
})
//将路由对象导出
export default router
