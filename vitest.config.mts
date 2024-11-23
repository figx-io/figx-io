/// <reference types="vitest/config" />
import { defineConfig } from 'vite';

export default defineConfig({
	test: {
		browser: {
			enabled: true,
			headless: true,
			name: 'chromium', // browser name is required
			provider: 'playwright', // or 'webdriverio'
		},
		coverage: {
			// coverage breaks modifying non test files and rerun tests?
			// include: ['**/src/**/*.ts'],
			// enabled: true,
			// reporter: ['text-summary', 'html'],
		},
	},
});
