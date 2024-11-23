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
			// TODO coverage breaks modifying non test files and rerun tests?
			// enabled: true,
			// include: ['src/**/*.ts'],
			// reporter: ['text-summary', 'html'],
		},
	},
});
