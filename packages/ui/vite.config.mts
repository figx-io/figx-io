import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	build: {
		emptyOutDir: true,
		lib: {
			entry: [
				'./src/Button.ts',
			],
			formats: ['es'],
		},
		minify: false,
		outDir: './dist',
		rollupOptions: {
			external: [
				'@figx-io/core/Component',
				'@figx-io/core/Container',
			],
		},
		sourcemap: 'inline',
		target: 'esnext',
	},
	// don't create declaration types for test files
	plugins: [dts({ exclude: './src/**/*.test.ts' })],
});
