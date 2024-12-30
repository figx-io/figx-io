import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	build: {
		emptyOutDir: true,
		lib: {
			entry: [
				'./src/Application.ts',
				'./src/Component.ts',
				'./src/Container.ts',
				'./src/Hex.ts',
				'./src/Text.ts',
			],
			formats: ['es'],
		},
		minify: false,
		outDir: './dist',
		rollupOptions: {
			external: [
				'@figx-io/assertions/assert_has_parent_auto_layout',
				'@figx-io/assertions/assert_is_boolean',
				'@figx-io/assertions/assert_is_from_one_to_thousand',
				'@figx-io/assertions/assert_is_from_zero_to_one',
				'@figx-io/assertions/assert_is_html_element',
				'@figx-io/assertions/assert_is_non_negative_or_auto',
				'@figx-io/assertions/assert_is_non_negative',
				'@figx-io/assertions/assert_is_not_child',
				'@figx-io/assertions/assert_is_number',
				'@figx-io/assertions/assert_is_positive_integer',
				'@figx-io/assertions/assert_is_string',
				'@figx-io/assertions/assert_is_valid_alignment',
				'@figx-io/assertions/assert_is_valid_auto_layout',
				'@figx-io/assertions/assert_is_valid_hex',
				'@figx-io/assertions/assert_is_valid_line_height',
				'@figx-io/assertions/assert_is_valid_size',
				'@figx-io/assertions/assert_is_valid_text_align_horizontal',
				'@figx-io/assertions/assert_is_valid_text_align_vertical',
				'@figx-io/assertions/assert_is_valid_vertical_trim',
			],
		},
		sourcemap: 'inline',
		target: 'esnext',
	},
	// don't create declaration types for test files
	plugins: [dts({ exclude: './src/**/*.test.ts' })],
});
