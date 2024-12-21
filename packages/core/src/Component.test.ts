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
		it('default style.justifyContent should be "flex-start"', () => {
			const component = new Component();
			expect(component.style.justifyContent).toBe('flex-start');
			component.remove();
		});
		it('default style.alignItems should be "flex-start"', () => {
			const component = new Component();
			expect(component.style.alignItems).toBe('flex-start');
			component.remove();
		});
		it('default style.minWidth should be "0px"', () => {
			const component = new Component();
			expect(component.style.minWidth).toBe('0px');
			component.remove();
		});
		it('default style.minHeight should be "0px"', () => {
			const component = new Component();
			expect(component.style.minHeight).toBe('0px');
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
				component.width = 123;
				expect(component.width).toBe(123);
			});
			it('when width = 123, style.width should be "123px"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.width = 123;
				expect(component.style.width).toBe('123px');
				component.remove();
			});
		});
		describe('min_height', () => {
			it('default min_height should be 0', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(component.min_height).toBe(0);
				component.remove();
			});
			it('when min_height is set to a negative number, a RangeError should be thrown', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(() => {
					component.min_height = -1;
				}).toThrowError(RangeError);
				component.remove();
			});
			it('when min_height = 123, min_height should be 123', (): void => {
				const component = new Component();
				component.min_height = 123;
				expect(component.min_height).toBe(123);
			});
			it('when min_height = 123, style.minHeight should be "123px"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.min_height = 123;
				expect(component.style.minHeight).toBe('123px');
				component.remove();
			});
		});
		describe('min_width', () => {
			it('default min_width should be 0', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(component.min_width).toBe(0);
				component.remove();
			});
			it('when min_width is set to a negative number, a RangeError should be thrown', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(() => {
					component.min_width = -1;
				}).toThrowError(RangeError);
				component.remove();
			});
			it('when min_width = 123, min_width should be 123', (): void => {
				const component = new Component();
				component.min_width = 123;
				expect(component.min_width).toBe(123);
			});
			it('when min_width = 123, style.minWidth should be "123px"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.min_width = 123;
				expect(component.style.minWidth).toBe('123px');
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
				expect(() => {
					component.height = -1;
				}).toThrowError(RangeError);
			});
			it('when height = 123, height should be 123', (): void => {
				const component = new Component();
				component.height = 123;
				expect(component.height).toBe(123);
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
			describe('alignment styles', () => {
				describe('given auto_layout = "horizontal"', () => {
					it('when alignment = "top_left", styles should be correct', (): void => {
						const component = new Component();
						component.auto_layout = 'horizontal';
						component.alignment = 'top_left';
						document.body.appendChild(component);
						expect(component.style.justifyContent).toBe('flex-start');
						expect(component.style.alignItems).toBe('flex-start');
						component.remove();
					});
					it('when alignment = "top_center", styles should be correct', (): void => {
						const component = new Component();
						component.auto_layout = 'horizontal';
						component.alignment = 'top_center';
						document.body.appendChild(component);
						expect(component.style.justifyContent).toBe('center');
						expect(component.style.alignItems).toBe('flex-start');
						component.remove();
					});
					it('when alignment = "top_right", styles should be correct', (): void => {
						const component = new Component();
						component.auto_layout = 'horizontal';
						component.alignment = 'top_right';
						document.body.appendChild(component);
						expect(component.style.justifyContent).toBe('flex-end');
						expect(component.style.alignItems).toBe('flex-start');
						component.remove();
					});
					it('when alignment = "left", styles should be correct', (): void => {
						const component = new Component();
						component.auto_layout = 'horizontal';
						component.alignment = 'left';
						document.body.appendChild(component);
						expect(component.style.justifyContent).toBe('flex-start');
						expect(component.style.alignItems).toBe('center');
						component.remove();
					});
					it('when alignment = "center", styles should be correct', (): void => {
						const component = new Component();
						component.auto_layout = 'horizontal';
						component.alignment = 'center';
						document.body.appendChild(component);
						expect(component.style.justifyContent).toBe('center');
						expect(component.style.alignItems).toBe('center');
						component.remove();
					});
					it('when alignment = "right", styles should be correct', (): void => {
						const component = new Component();
						component.auto_layout = 'horizontal';
						component.alignment = 'right';
						document.body.appendChild(component);
						expect(component.style.justifyContent).toBe('flex-end');
						expect(component.style.alignItems).toBe('center');
						component.remove();
					});
					it('when alignment = "bottom_left", styles should be correct', (): void => {
						const component = new Component();
						component.auto_layout = 'horizontal';
						component.alignment = 'bottom_left';
						document.body.appendChild(component);
						expect(component.style.justifyContent).toBe('flex-start');
						expect(component.style.alignItems).toBe('flex-end');
						component.remove();
					});
					it('when alignment = "bottom_center", styles should be correct', (): void => {
						const component = new Component();
						component.auto_layout = 'horizontal';
						component.alignment = 'bottom_center';
						document.body.appendChild(component);
						expect(component.style.justifyContent).toBe('center');
						expect(component.style.alignItems).toBe('flex-end');
						component.remove();
					});
					it('when alignment = "bottom_right", styles should be correct', (): void => {
						const component = new Component();
						component.auto_layout = 'horizontal';
						component.alignment = 'bottom_right';
						document.body.appendChild(component);
						expect(component.style.justifyContent).toBe('flex-end');
						expect(component.style.alignItems).toBe('flex-end');
						component.remove();
					});
				});
				describe('given auto_layout = "vertical"', () => {
					it('when alignment = "top_left", styles should be correct', (): void => {
						const component = new Component();
						component.auto_layout = 'vertical';
						component.alignment = 'top_left';
						document.body.appendChild(component);
						expect(component.style.justifyContent).toBe('flex-start');
						expect(component.style.alignItems).toBe('flex-start');
						component.remove();
					});
					it('when alignment = "top_center", styles should be correct', (): void => {
						const component = new Component();
						component.auto_layout = 'vertical';
						component.alignment = 'top_center';
						document.body.appendChild(component);
						expect(component.style.justifyContent).toBe('flex-start');
						expect(component.style.alignItems).toBe('center');
						component.remove();
					});
					it('when alignment = "top_right", styles should be correct', (): void => {
						const component = new Component();
						component.auto_layout = 'vertical';
						component.alignment = 'top_right';
						document.body.appendChild(component);
						expect(component.style.justifyContent).toBe('flex-start');
						expect(component.style.alignItems).toBe('flex-end');
						component.remove();
					});
					it('when alignment = "left", styles should be correct', (): void => {
						const component = new Component();
						component.auto_layout = 'vertical';
						component.alignment = 'left';
						document.body.appendChild(component);
						expect(component.style.justifyContent).toBe('center');
						expect(component.style.alignItems).toBe('flex-start');
						component.remove();
					});
					it('when alignment = "center", styles should be correct', (): void => {
						const component = new Component();
						component.auto_layout = 'vertical';
						component.alignment = 'center';
						document.body.appendChild(component);
						expect(component.style.justifyContent).toBe('center');
						expect(component.style.alignItems).toBe('center');
						component.remove();
					});
					it('when alignment = "right", styles should be correct', (): void => {
						const component = new Component();
						component.auto_layout = 'vertical';
						component.alignment = 'right';
						document.body.appendChild(component);
						expect(component.style.justifyContent).toBe('center');
						expect(component.style.alignItems).toBe('flex-end');
						component.remove();
					});
					it('when alignment = "bottom_left", styles should be correct', (): void => {
						const component = new Component();
						component.auto_layout = 'vertical';
						component.alignment = 'bottom_left';
						document.body.appendChild(component);
						expect(component.style.justifyContent).toBe('flex-end');
						expect(component.style.alignItems).toBe('flex-start');
						component.remove();
					});
					it('when alignment = "bottom_center", styles should be correct', (): void => {
						const component = new Component();
						component.auto_layout = 'vertical';
						component.alignment = 'bottom_center';
						document.body.appendChild(component);
						expect(component.style.justifyContent).toBe('flex-end');
						expect(component.style.alignItems).toBe('center');
						component.remove();
					});
					it('when alignment = "bottom_right", styles should be correct', (): void => {
						const component = new Component();
						component.auto_layout = 'vertical';
						component.alignment = 'bottom_right';
						document.body.appendChild(component);
						expect(component.style.justifyContent).toBe('flex-end');
						expect(component.style.alignItems).toBe('flex-end');
						component.remove();
					});
				});
			});
		});
		describe('parent_auto_layout', () => {
			it('default_auto_layout should be "horizontal"', () => {
				const component = new Component();
				document.body.appendChild(component);
				expect(component.parent_auto_layout).toBe('horizontal');
				component.remove();
			});
		});
		describe('padding', () => {
			it('default padding_horizontal should be 0', () => {
				const component = new Component();
				document.body.appendChild(component);
				expect(component.padding_horizontal).toBe(0);
				component.remove();
			});
			it('default padding_vertical should be 0', () => {
				const component = new Component();
				document.body.appendChild(component);
				expect(component.padding_vertical).toBe(0);
				component.remove();
			});
			it('when padding_horizontal = 32, padding_horizontal should be 32', () => {
				const component = new Component();
				document.body.appendChild(component);
				component.padding_horizontal = 32;
				expect(component.padding_horizontal).toBe(32);
				component.remove();
			});
			it('when padding_horizontal = 32, style.paddingLeft and style.paddingRight should be 32px', () => {
				const component = new Component();
				document.body.appendChild(component);
				component.padding_horizontal = 32;
				expect(component.style.paddingLeft).toBe('32px');
				expect(component.style.paddingRight).toBe('32px');
				component.remove();
			});
			it('when padding_vertical = 32, padding_vertical should be 32', () => {
				const component = new Component();
				document.body.appendChild(component);
				component.padding_vertical = 32;
				expect(component.padding_vertical).toBe(32);
				component.remove();
			});
			it('when padding_vertical = 32, style.paddingTop and style.paddingBottom should be 32px', () => {
				const component = new Component();
				document.body.appendChild(component);
				component.padding_vertical = 32;
				expect(component.style.paddingTop).toBe('32px');
				expect(component.style.paddingBottom).toBe('32px');
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
		describe('given component is child of Application', () => {
			describe('given Application auto_layout = "horizontal"', () => {
				it('given width = 123, styles should be correct', () => {
					const application = new Application();
					application.auto_layout = 'horizontal';
					document.body.appendChild(application);
					const component = new Component();
					application.add_component(component);
					component.width = 123;
					expect(component.style.width).toBe('123px');
					expect(component.style.flexGrow).toBe('');
					expect(component.style.flexShrink).toBe('0');
					application.remove();
				});
				it('given width = "fill", styles should be correct', () => {
					const application = new Application();
					application.auto_layout = 'horizontal';
					document.body.appendChild(application);
					const component = new Component();
					component.width = 'fill';
					application.add_component(component);
					expect(component.style.width).toBe('');
					expect(component.style.flexGrow).toBe('1');
					application.remove();
				});
				it('given width = "hug", styles should be correct', () => {
					const application = new Application();
					application.auto_layout = 'horizontal';
					document.body.appendChild(application);
					const component = new Component();
					component.width = 'hug';
					application.add_component(component);
					expect(component.style.width).toBe('');
					expect(component.style.flexGrow).toBe('');
					application.remove();
				});
				it('given height = 123, styles should be correct', () => {
					const application = new Application();
					application.auto_layout = 'horizontal';
					document.body.appendChild(application);
					const component = new Component();
					component.height = 123;
					application.add_component(component);
					expect(component.style.height).toBe('123px');
					expect(component.style.alignSelf).toBe('');
					application.remove();
				});
				it('given height = "fill", styles should be correct', () => {
					const application = new Application();
					application.auto_layout = 'horizontal';
					document.body.appendChild(application);
					const component = new Component();
					component.height = 'fill';
					application.add_component(component);
					expect(component.style.height).toBe('');
					expect(component.style.alignSelf).toBe('stretch');
					application.remove();
				});
				it('given height = "hug", styles should be correct', () => {
					const application = new Application();
					application.auto_layout = 'horizontal';
					document.body.appendChild(application);
					const component = new Component();
					component.height = 'hug';
					application.add_component(component);
					expect(component.style.height).toBe('');
					expect(component.style.alignSelf).toBe('');
					application.remove();
				});
			});
			describe('given Application auto_layout = "vertical"', () => {
				it('given width = 123, styles should be correct', () => {
					const application = new Application();
					application.auto_layout = 'vertical';
					document.body.appendChild(application);
					const component = new Component();
					application.add_component(component);
					component.width = 123;
					expect(component.style.width).toBe('123px');
					expect(component.style.alignSelf).toBe('');
					application.remove();
				});
				it('given width = "fill", styles should be correct', () => {
					const application = new Application();
					application.auto_layout = 'vertical';
					document.body.appendChild(application);
					const component = new Component();
					application.add_component(component);
					component.width = 'fill';
					expect(component.style.width).toBe('');
					expect(component.style.alignSelf).toBe('stretch');
					application.remove();
				});
				it('given width = "hug", styles should be correct', () => {
					const application = new Application();
					application.auto_layout = 'vertical';
					document.body.appendChild(application);
					const component = new Component();
					application.add_component(component);
					component.width = 'hug';
					expect(component.style.width).toBe('');
					expect(component.style.alignSelf).toBe('');
					application.remove();
				});
				it('given height = 123, styles should be correct', () => {
					const application = new Application();
					application.auto_layout = 'vertical';
					document.body.appendChild(application);
					const component = new Component();
					application.add_component(component);
					component.height = 123;
					expect(component.style.height).toBe('123px');
					expect(component.style.flexGrow).toBe('');
					application.remove();
				});
				it('given height = "fill", styles should be correct', () => {
					const application = new Application();
					application.auto_layout = 'vertical';
					document.body.appendChild(application);
					const component = new Component();
					application.add_component(component);
					component.height = 'fill';
					expect(component.style.height).toBe('');
					expect(component.style.flexGrow).toBe('1');
					application.remove();
				});
				it('given height = "hug", styles should be correct', () => {
					const application = new Application();
					application.auto_layout = 'vertical';
					document.body.appendChild(application);
					const component = new Component();
					application.add_component(component);
					component.height = 'hug';
					expect(component.style.height).toBe('');
					expect(component.style.flexGrow).toBe('');
					application.remove();
				});
			});
		});
	});
});
