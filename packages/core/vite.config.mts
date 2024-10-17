import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	build: {
		emptyOutDir: false,
		lib: {
			entry: './src/index.ts',
			fileName: 'index',
			formats: ['es'],
		},
		minify: false,
		sourcemap: 'inline',
		target: 'esnext',
	},
	esbuild: {
		target: 'esnext',
	},
	plugins: [dts()],
});
