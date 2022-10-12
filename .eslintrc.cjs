module.exports = {
	env: {
		browser: true
	},
	parser: '@typescript-eslint/parser',
	plugins: ['svelte3', '@typescript-eslint'],
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3'
		}
	],
	rules: {
		'no-console': [1],
		'sort-imports': [
			'error',
			{
				ignoreCase: false,
				ignoreDeclarationSort: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['all', 'multiple', 'single', 'none'],
				allowSeparatedGroups: false
			}
		]
	},
	settings: {
		'svelte3/typescript': true
	},
	ignorePatterns: ['.eslintrc.*', 'svelte.config.*'],
	// type-aware linting rules (dynamic linting)
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
		extraFileExtensions: ['.svelte']
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking'
	]
};
