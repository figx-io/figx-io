import antfu from '@antfu/eslint-config';

export default antfu({
	rules: {
		'no-console': 'warn',
		'perfectionist/sort-array-includes': 'error',
		'perfectionist/sort-classes': 'error',
		'perfectionist/sort-imports': 'error',
		'perfectionist/sort-interfaces': 'error',
		'perfectionist/sort-objects': 'error',
	},
	stylistic: {
		indent: 'tab',
		semi: true,
	},
});
