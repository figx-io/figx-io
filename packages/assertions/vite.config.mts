import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	build: {
		emptyOutDir: true,
		lib: {
			entry: [
				'./src/assert_has_parent_auto_layout.ts',
				'./src/assert_is_boolean.ts',
				'./src/assert_is_from_zero_to_hundred.ts',
				'./src/assert_is_from_one_to_thousand.ts',
				'./src/assert_is_from_zero_to_one.ts',
				'./src/assert_is_html_element.ts',
				'./src/assert_is_i_color.ts',
				'./src/assert_is_non_negative_or_auto.ts',
				'./src/assert_is_non_negative.ts',
				'./src/assert_is_not_child.ts',
				'./src/assert_is_number.ts',
				'./src/assert_is_positive_integer.ts',
				'./src/assert_is_string.ts',
				'./src/assert_is_valid_alignment.ts',
				'./src/assert_is_valid_auto_layout.ts',
				'./src/assert_is_valid_fill.ts',
				'./src/assert_is_valid_hex.ts',
				'./src/assert_is_valid_line_height.ts',
				'./src/assert_is_valid_size.ts',
				'./src/assert_is_valid_text_align_horizontal.ts',
				'./src/assert_is_valid_text_align_vertical.ts',
				'./src/assert_is_valid_vertical_trim.ts',
			],
			formats: ['es'],
		},
		minify: false,
		outDir: './dist',
		sourcemap: 'inline',
		target: 'esnext',
	},
	// don't create declaration types for test files
	plugins: [dts({ exclude: './src/**/*.test.ts' })],
});
