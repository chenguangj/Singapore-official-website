import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': resolve(__dirname, './src')
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler'
			}
		}
	},
	plugins: [
		vue(),
		Components({
			resolvers: [ElementPlusResolver()]
		}),
		AutoImport({
			imports: ['vue', 'vuex', 'vue-router'],
			dts: 'src/auto-import.d.ts',
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue$/,
				/\.vue\?vue/, // .vue
				/\.md$/ // .md
			],
			// eslint报错解决
			eslintrc: {
				enabled: 'false', // 先true生成文件后改为false
				filepath: './.eslintrc-auto-import.json',
				globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
			}
		})
	],
	server: {
		port: 8000,
		host: '0.0.0.0',
		open: true
		// proxy:{}
	}
});
