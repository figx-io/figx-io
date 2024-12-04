import type IComponent from './IComponent';
import { describe, expect, it } from 'vitest';
import Application from './Application';
import Component from './Component';

describe('component', () => {
	describe('default style properties', () => {
		it('default style.display should be "inline-flex"', () => {
			const component = new Component();
			document.body.appendChild(component);
			expect(component.style.display).toBe('inline-flex');
			component.remove();
		});
		it('default style.flexDirection should be "row"', () => {
			const component = new Component();
			expect(component.style.flexDirection).toBe('row');
			component.remove();
		});
		it('default style.alignItems should be "flex-start"', () => {
			const component = new Component();
			expect(component.style.alignItems).toBe('flex-start');
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
			it('default auto_layout should be "horizontal"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(component.auto_layout).toBe('horizontal');
				component.remove();
			});
			it('when auto_layout = "horizontal", auto_layout should be "horizontal"', (): void => {
				const component = new Component();
				component.auto_layout = 'horizontal';
				document.body.appendChild(component);
				expect(component.auto_layout).toBe('horizontal');
				component.remove();
			});
			it('when auto_layout = "horizontal", style.flexDirection should be "row" and style.flexWrap should be ""', (): void => {
				const component = new Component();
				component.auto_layout = 'horizontal';
				document.body.appendChild(component);
				expect(component.style.flexDirection).toBe('row');
				expect(component.style.flexWrap).toBe('');
				component.remove();
			});
			it('when auto_layout = "vertical", auto_layout should be "vertical"', (): void => {
				const component = new Component();
				component.auto_layout = 'vertical';
				document.body.appendChild(component);
				expect(component.auto_layout).toBe('vertical');
				component.remove();
			});
			it('when auto_layout = "vertical", style.flexDirection should be "column" and style.flexWrap should be ""', (): void => {
				const component = new Component();
				component.auto_layout = 'vertical';
				document.body.appendChild(component);
				expect(component.style.flexDirection).toBe('column');
				expect(component.style.flexWrap).toBe('');
				component.remove();
			});
			it('when auto_layout = "wrap", auto_layout should be "wrap"', (): void => {
				const component = new Component();
				component.auto_layout = 'wrap';
				document.body.appendChild(component);
				expect(component.auto_layout).toBe('wrap');
				component.remove();
			});
			it('when auto_layout = "wrap", style.flexDirection should be "row", style.flexWrap should be "wrap" and style.alignContent should be "flex-start"', (): void => {
				const component = new Component();
				component.auto_layout = 'wrap';
				document.body.appendChild(component);
				expect(component.style.flexDirection).toBe('row');
				expect(component.style.flexWrap).toBe('wrap');
				component.remove();
			});
		});
		describe('alignment', () => {
			it('default alignment should be "top_left"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(component.alignment).toBe('top_left');
				component.remove();
			});
			it('when alignment = "top_left", alignment should be "top_left"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.alignment = 'top_left';
				expect(component.alignment).toBe('top_left');
				component.remove();
			});
			it('when alignment = "top_center", alignment should be "top_center"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.alignment = 'top_center';
				expect(component.alignment).toBe('top_center');
				component.remove();
			});
			it('when alignment = "top_right", alignment should be "top_right"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.alignment = 'top_right';
				expect(component.alignment).toBe('top_right');
				component.remove();
			});
			it('when alignment = "left", alignment should be "left"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.alignment = 'left';
				expect(component.alignment).toBe('left');
				component.remove();
			});
			it('when alignment = "right", alignment should be "right"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.alignment = 'right';
				expect(component.alignment).toBe('right');
				component.remove();
			});
			it('when alignment = "bottom_left", alignment should be "bottom_left"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.alignment = 'bottom_left';
				expect(component.alignment).toBe('bottom_left');
				component.remove();
			});
			it('when alignment = "bottom_center", alignment should be "bottom_center"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.alignment = 'bottom_center';
				expect(component.alignment).toBe('bottom_center');
				component.remove();
			});
			it('when alignment = "bottom_right", alignment should be "bottom_right"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.alignment = 'bottom_right';
				expect(component.alignment).toBe('bottom_right');
				component.remove();
			});
		});
	});
	describe('methods', () => {
		describe('add_component()', () => {
			it('when an instance of a non Component, it should throw a TypeError', () => {
				const component = new Component();
				document.body.appendChild(component);
				expect(() => {
					const div = document.createElement('div');
					component.add_component(div as unknown as IComponent);
				}).toThrowError(TypeError);
				component.remove();
			});
			it('when a component as added, it should contain this component', () => {
				const parent = new Component();
				const child = new Component();
				document.body.appendChild(parent);
				parent.add_component(child);
				expect(parent.contains(child)).toBe(true);
				child.remove();
				parent.remove();
			});
		});
	});
	describe('size', () => {
		describe('given a new Application is added to body', () => {
			describe('given a Component is width = 300 and height = 300', () => {
				it('it should have a measured size of 300x300 pixels on screen', () => {
					const application = new Application();
					document.body.appendChild(application);
					const component = new Component();
					component.width = 300;
					component.height = 300;
					application.add_component(component);
					const { height, width } = component.getBoundingClientRect();
					expect(height, 'height should be 300').toBe(300);
					expect(width, 'width should be 300').toBe(300);
				});
			});
			describe('given a component with 3 children, 100x100, 200x200 and 300x300', () => {
				it('it should have a size of 600x300 pixels', () => {
					const application = new Application();
					document.body.appendChild(application);
					const container = new Component();
					const component1 = new Component();
					component1.width = 100;
					component1.height = 100;
					const component2 = new Component();
					component2.width = 200;
					component2.height = 200;
					const component3 = new Component();
					component3.width = 300;
					component3.height = 300;
					container.add_component(component1);
					container.add_component(component2);
					container.add_component(component3);
					application.add_component(container);
					const { height, width } = container.getBoundingClientRect();
					expect(width).toBe(600);
					expect(height).toBe(300);
				});
			});
			describe('given a component with 3 children, 100x100, 200x200, 300x300 and auto_layout = "vertical"', () => {
				it('it should have a size of 300x600 pixels', () => {
					const application = new Application();
					document.body.appendChild(application);
					const container = new Component();
					container.auto_layout = 'vertical';
					const component1 = new Component();
					component1.width = 100;
					component1.height = 100;
					const component2 = new Component();
					component2.width = 200;
					component2.height = 200;
					const component3 = new Component();
					component3.width = 300;
					component3.height = 300;
					container.add_component(component1);
					container.add_component(component2);
					container.add_component(component3);
					application.add_component(container);
					const { height, width } = container.getBoundingClientRect();
					expect(width).toBe(300);
					expect(height).toBe(600);
				});
			});
		});
	});
});
