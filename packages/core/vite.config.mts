import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	build: {
		emptyOutDir: false,
		lib: {
			entry: [
				'./src/Application.ts',
				'./src/Component.ts',
				'./src/Container.ts',
				'./src/Text.ts',
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
