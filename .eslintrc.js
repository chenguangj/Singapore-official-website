module.exports = {
	root: true,
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		node: true
	},
	extends: ['./.eslintrc-auto-import.json'],
	rules: {
		'no-console': import.meta.env.MODE === 'production' ? 'error' : 'off',
		'no-debugger': import.meta.env.MODE === 'production' ? 'error' : 'off',

		// 禁止function中出现重名参数
		'no-dupe-args': 2,

		// indent: ["error", 4],

		// 括号样式
		'brace-style': [
			2,
			'1tbs',
			{
				allowSingleLine: true
			}
		],
		// 强制箭头函数前后使用一致空格
		'arrow-spacing': [
			2,
			{
				before: true,
				after: true
			}
		],
		// 强制/禁止 数组在括号内使用空格
		'array-bracket-spacing': [2, 'never'],
		'object-curly-spacing': [
			2,
			'always',
			{
				objectsInObjects: false
			}
		]
	}
};
