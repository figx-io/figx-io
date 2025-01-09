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
				'./src/LinearGradient.ts',
				'./src/Rectangle.ts',
				'./src/StopColor.ts',
				'./src/SVG.ts',
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
