import Layout from '@/layout/index.vue';

export default {
	path: '/about',
	component: Layout,
	redirect: { name: 'About.AboutCom' },
	meta: {
		hideInMenu: false,
		title: '关于我们'
	},
	children: [
		{
			path: 'aboutCom',
			name: 'About.AboutCom',
			meta: {
				hideInMenu: false,
				title: '公司介绍',
				des: '',
				type: 'company',
				icon: ''
			},
			component: () => import('@/views/about/index.vue')
		}
	]
};
