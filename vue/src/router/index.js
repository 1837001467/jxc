import login from "@/view/Login.vue"
import home from "@/view/home.vue"
let routes = [{
			path: "/",
			name: "首页",
			component: home,
			meta: {
				title: "我是首页"
			},
			children: [{
					path: '/ck',
					component: () => import('@/view/storage/ck.vue'),
					name: "出库",
					meta: {
						title: '出库'
					},
				}, {
					path: "/rk",
					name: "入库",
					component: () => import('@/view/storage/rk.vue'),
					meta: {
						title: "入库"
					}
				}]
			},
			{
				path: "/login",
				name: "登陆",
				component: login,
				meta: {
					title: "登陆"
				}
			},
		]

		import {
			createRouter,
			createWebHistory,
			createWebHashHistory
		} from 'vue-router'

		let router = createRouter({
			history: createWebHistory(),
			routes
		})


		export default router
