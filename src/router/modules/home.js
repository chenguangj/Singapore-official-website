import Layout from '@/layout/index.vue';

export default {
	path: '/',
	component: Layout,
	redirect: { name: 'Home' },
	meta: {
		hideInMenu: true
	},
	children: [
		{
			path: 'home',
			name: 'Home',
			meta: {
				hideInMenu: true
			},
			component: () => import('@/views/home/index.vue')
		},
		{
			path: 'cases',
			name: 'Cases',
			meta: {
				hideInMenu: true
			},
			component: () => import('@/views/cases/index.vue')
		},
		{
			path: 'contact',
			name: 'Contact',
			meta: {
				hideInMenu: true
			},
			component: () => import('@/views/contact/index.vue')
		}
	]
};
