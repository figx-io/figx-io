import { describe, expect, it } from 'vitest';
import Application from './Application';

describe('application', () => {
	describe('default body style properties', () => {
		it('default style.margin should be "0"', () => {
			const application = new Application();
			document.body.appendChild(application);
			expect(document.body.style.margin).toBe('0px');
			application.remove();
		});
		it('default style.minHeight should be "100%"', () => {
			const application = new Application();
			document.body.appendChild(application);
			expect(document.body.style.minHeight).toBe('100%');
			application.remove();
		});
		it('default style.height should be "100%"', () => {
			const application = new Application();
			document.body.appendChild(application);
			expect(document.body.style.height).toBe('100%');
			application.remove();
		});
	});
	describe('default documentElement style properties', () => {
		it('default style.minHeight should be "100%"', () => {
			const application = new Application();
			document.body.appendChild(application);
			expect(document.documentElement.style.minHeight).toBe('100%');
			application.remove();
		});
		it('default style.height should be "100%"', () => {
			const application = new Application();
			document.body.appendChild(application);
			expect(document.documentElement.style.height).toBe('100%');
			application.remove();
		});
	});
	describe('default style properties', () => {
		it('default style.display should be "flex"', () => {
			const application = new Application();
			expect(application.style.display).toBe('flex');
			application.remove();
		});
		it('default style.minHeight should be "100%"', () => {
			const application = new Application();
			document.body.appendChild(application);
			expect(application.style.minHeight).toBe('100%');
			application.remove();
		});
	});
	describe('properties', () => {
		describe('auto_layout', () => {
			it('default auto_layout should "vertical"', () => {
				const application = new Application();
				expect(application.auto_layout).toBe('vertical');
			});
		});
		describe('fontFamily', () => {
			it('default fontFamily should be ""', () => {
				const application = new Application();
				document.body.appendChild(application);
				expect(application.fontFamily).toBe('');
				application.remove();
			});
			it('given fontFamily is "", when fontFamily = "Inter", fontfamily should be "Inter"', () => {
				const application = new Application();
				application.fontFamily = 'Inter';
				document.body.appendChild(application);
				expect(application.fontFamily).toBe('Inter');
				application.remove();
			});
		});
	});
});
