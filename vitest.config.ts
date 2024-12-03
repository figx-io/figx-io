/// <reference types="vitest/config" />
import { defineConfig } from 'vite';

export default defineConfig({
	test: {
		browser: {
			enabled: true,
			headless: true,
			name: 'chromium', // browser name is required
			provider: 'playwright', // or 'webdriverio'
			screenshotFailures: false,
		},
		coverage: {
			exclude: ['packages/**/src/**/I*.ts', 'packages/**/src/**/*test.ts'],
			include: ['packages/**/src/**/*.ts'],
			reporter: ['lcovonly'],
		},
	},
});
