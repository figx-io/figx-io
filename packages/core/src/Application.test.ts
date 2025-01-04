import { describe, expect, it } from 'vitest';
import Application from './Application';
import Hex from './Hex';
import LinearGradient from './LinearGradient';
import StopColor from './StopColor';

describe('application', () => {
	describe('default body style properties', () => {
		it('default style.margin should be "0"', () => {
			// eslint-disable-next-line no-new
			new Application();
			expect(document.body.style.margin).toBe('0px');
		});
		it('default style.minHeight should be "100%"', () => {
			// eslint-disable-next-line no-new
			new Application();
			expect(document.body.style.minHeight).toBe('100%');
		});
		it('default style.height should be "100%"', () => {
			// eslint-disable-next-line no-new
			new Application();
			expect(document.body.style.height).toBe('100%');
		});
	});
	describe('default documentElement style properties', () => {
		it('default style.minHeight should be "100%"', () => {
			// eslint-disable-next-line no-new
			new Application();
			expect(document.documentElement.style.minHeight).toBe('100%');
		});
		it('default style.height should be "100%"', () => {
			// eslint-disable-next-line no-new
			new Application();
			expect(document.documentElement.style.height).toBe('100%');
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
			expect(application.style.minHeight).toBe('100%');
		});
	});
	describe('properties', () => {
		describe('auto_layout', () => {
			it('default auto_layout should "vertical"', () => {
				const application = new Application();
				expect(application.auto_layout).toBe('vertical');
			});
		});
		describe('font_family', () => {
			it('default body.style.fontFamily should be ""', () => {
				// eslint-disable-next-line no-new
				new Application();
				expect(document.body.style.fontFamily).toBe('');
			});
			it('default font_family should be ""', () => {
				const application = new Application();
				expect(application.font_family).toBe('');
			});
			it('given font_family is "", when font_family = "Inter", body.fontfamily should be "Inter"', () => {
				const application = new Application();
				application.font_family = 'Inter';
				expect(application.font_family).toBe('Inter');
			});
			it('given font_family is "", when font_family = "Inter", body.style.fontfamily should be "Inter"', () => {
				const application = new Application();
				application.font_family = 'Inter';
				document.body.appendChild(application);
				expect(document.body.style.fontFamily).toBe('Inter');
				application.remove();
			});
			it('when font_family = null, it should throw a TypeError', () => {
				expect(() => {
					const application = new Application();
					// @ts-expect-error we are testing invalid value
					application.font_family = null;
				}).toThrow(TypeError);
			});
		});
		describe('fill', () => {
			it('default body.style.background should be ""', () => {
				// eslint-disable-next-line no-new
				new Application();
				expect(document.body.style.background).toBe('');
			});
			it('default fill should be null', () => {
				const application = new Application();
				expect(application.fill).toBe(null);
			});
			it('when fill = new Hex("#123456"), fill should be instance of Hex', () => {
				const application = new Application();
				application.fill = new Hex('#123456');
				expect(application.fill).toBeInstanceOf(Hex);
			});
			it('when fill = null, body.style.background should be ""', () => {
				const application = new Application();
				document.body.appendChild(application);
				application.fill = null;
				expect(document.body.style.background).toBe('');
			});
			it('when fill = new Hex("#123456"), body.style.background should be ""', () => {
				const application = new Application();
				document.body.appendChild(application);
				application.fill = new Hex('#123456');
				expect(document.body.style.background).toBe('rgb(18, 52, 86)');
				application.remove();
			});
			describe('when fill = new LinearGradient([new StopColor(new Hex("#123456"))], 0)', () => {
				it('fill should be instance of LinearGradient', () => {
					const application = new Application();
					application.fill = new LinearGradient([new StopColor(new Hex('#123456'), 0)]);
					expect(application.fill).toBeInstanceOf(LinearGradient);
				});
			});
			it('when fill = "Hello", it should throw a TypeError', () => {
				expect(() => {
					const application = new Application();
					// @ts-expect-error we are testing invalid value
					application.fill = 'Hello';
				}).toThrow(TypeError);
			});
		});
	});
});
