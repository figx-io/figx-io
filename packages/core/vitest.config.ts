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
			viewport: {
				height: 1000,
				width: 1000,
			},
		},
		coverage: {
			// TODO coverage breaks modifying non test files and rerun tests?
			// enabled: true,
			// exclude Interfaces and test files from coverage
			exclude: ['src/**/I*.ts', 'src/**/*test.ts'],
			include: ['src/**/*.ts'],
			// reporter: ['text'], // html and others break automatic refresh
		},
	},
});
