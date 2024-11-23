import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	build: {
		emptyOutDir: false,
		lib: {
			entry: ['./src/Button.ts'],
			formats: ['es'],
		},
		minify: false,
		outDir: './dist',
		rollupOptions: {
			external: ['@figx-io/core/container'],
		},
		sourcemap: 'inline',
		target: 'esnext',
	},
	plugins: [dts()],
});
