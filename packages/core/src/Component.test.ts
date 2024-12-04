import { describe, expect, it } from 'vitest';
import Component from './Component';

describe('component', () => {
	describe('default style properties', () => {
		it.skip('default style.display should be "inline-flex"', () => {
			const component = new Component();
			document.body.appendChild(component);
			expect(component.style.display).toBe('inline-flex');
			component.remove();
		});
	});
	describe('lifecycle', () => {
		describe('connectedCallback()', (): void => {
			it('given component is added to parent, parent should contain component', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(document.body.contains(component)).toBe(true);
				component.remove();
			});
		});
	});
	describe('properties', () => {
		describe('width', () => {
			it('default width should be "hug"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(component.width).toBe('hug');
				component.remove();
			});
			it('when width is set to a negative number, a RangeError should be thrown', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(() => {
					component.width = -1;
				}).toThrowError(RangeError);
				component.remove();
			});
			it('when width = 123, width should be 123', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.width = 123;
				expect(component.width).toBe(123);
				component.remove();
			});
			it('when width = 123, style.width should be "123px"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.width = 123;
				expect(component.style.width).toBe('123px');
				component.remove();
			});
		});
		describe('height', () => {
			it('default height should be "hug"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(component.height).toBe('hug');
				component.remove();
			});
			it('when height is set to a negative number, a RangeError should be thrown', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(() => {
					component.height = -1;
				}).toThrowError(RangeError);
				component.remove();
			});
			it('when height = 123, height should be 123', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.height = 123;
				expect(component.height).toBe(123);
				component.remove();
			});
			it('when height = 123, style.height should be "123px"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.height = 123;
				expect(component.style.height).toBe('123px');
				component.remove();
			});
		});
		describe('auto_layout', () => {
			it('default auto_layout should be "none"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(component.auto_layout).toBe('none');
				component.remove();
			});
			it('when auto_layout = "none", auto_layout should be "none"', (): void => {
				const component = new Component();
				component.auto_layout = 'none';
				document.body.appendChild(component);
				expect(component.auto_layout).toBe('none');
				component.remove();
			});
			it('when auto_layout = "horizontal", auto_layout should be "horizontal"', (): void => {
				const component = new Component();
				component.auto_layout = 'horizontal';
				document.body.appendChild(component);
				expect(component.auto_layout).toBe('horizontal');
				component.remove();
			});
			it('when auto_layout = "vertical", auto_layout should be "vertical"', (): void => {
				const component = new Component();
				component.auto_layout = 'vertical';
				document.body.appendChild(component);
				expect(component.auto_layout).toBe('vertical');
				component.remove();
			});
			it('when auto_layout = "wrap", auto_layout should be "wrap"', (): void => {
				const component = new Component();
				component.auto_layout = 'wrap';
				document.body.appendChild(component);
				expect(component.auto_layout).toBe('wrap');
				component.remove();
			});
		});
	});
});
