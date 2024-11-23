import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	build: {
		emptyOutDir: false,
		lib: {
			entry: [
				'./src/IComponent.ts',
				'./src/Component.ts',
				'./src/Container.ts',
			],
			formats: ['es'],
		},
		minify: false,
		outDir: './dist',
		sourcemap: 'inline',
		target: 'esnext',
	},
	plugins: [dts()],
});
