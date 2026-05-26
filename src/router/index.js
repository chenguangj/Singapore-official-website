import { createRouter, createWebHistory } from 'vue-router';
import HOME from './modules/home';
import ABOUT from './modules/about';
const routes = [HOME, ABOUT];
const router = createRouter({
	history: createWebHistory(),
	routes
});
router.beforeEach((to, from, next) => {
	next();
});

// 跳转页面的时候回到最顶部（有 hash 锚点时跳过）
router.afterEach((to) => {
	if (!to.hash) {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
});
export default router;
