import { describe, expect, it } from 'vitest';
import Application from './Application';
import Component from './Component';
import Container from './Container';
import DropShadow from './DropShadow';
import Hex from './Hex';

describe('component', () => {
	describe('default style properties', () => {
		it('default style.display should be "inline-block"', () => {
			const component = new Component();
			expect(component.style.display).toBe('inline-block');
		});
		it('default style.minWidth should be "0px"', () => {
			const component = new Component();
			expect(component.style.minWidth).toBe('0px');
		});
		it('default style.minHeight should be "0px"', () => {
			const component = new Component();
			expect(component.style.minHeight).toBe('0px');
		});
		it('default style.maxHeight should be ""', () => {
			const component = new Component();
			expect(component.style.maxHeight).toBe('');
		});
		it('default style.maxWidth should be ""', () => {
			const component = new Component();
			expect(component.style.maxWidth).toBe('');
		});
		it('default style.opacity should be ""', () => {
			const component = new Component();
			expect(component.style.opacity).toBe('');
		});
		it('default style.borderRadius should be ""', () => {
			const component = new Component();
			expect(component.style.borderRadius).toBe('');
		});
		it('default style.boxSizing should be "border-box"', () => {
			const component = new Component();
			expect(component.style.boxSizing).toBe('border-box');
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
		describe('max_height', () => {
			it('default max_height should be Infinity', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(component.max_height).toBe(Infinity);
				component.remove();
			});
			it('when max_height is set to a negative number, a RangeError should be thrown', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(() => {
					component.max_height = -1;
				}).toThrowError(RangeError);
				component.remove();
			});
			it('when max_height = 123, max_height should be 123', (): void => {
				const component = new Component();
				component.max_height = 123;
				expect(component.max_height).toBe(123);
			});
			it('when max_height = 123, style.maxHeight should be "123px"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.max_height = 123;
				expect(component.style.maxHeight).toBe('123px');
				component.remove();
			});
		});
		describe('max_width', () => {
			it('default max_width should be Infinity', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(component.max_width).toBe(Infinity);
				component.remove();
			});
			it('when max_width is set to a negative number, a RangeError should be thrown', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				expect(() => {
					component.max_width = -1;
				}).toThrowError(RangeError);
				component.remove();
			});
			it('when max_width = 123, max_width should be 123', (): void => {
				const component = new Component();
				component.max_width = 123;
				expect(component.max_width).toBe(123);
			});
			it('when max_width = 123, style.maxWidth should be "123px"', (): void => {
				const component = new Component();
				document.body.appendChild(component);
				component.max_width = 123;
				expect(component.style.maxWidth).toBe('123px');
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
		describe('parent_auto_layout', () => {
			it('default parent_auto_layout should be "horizontal"', () => {
				const component = new Component();
				document.body.appendChild(component);
				expect(component.parent_auto_layout).toBe('horizontal');
				component.remove();
			});
			it('when parent_auto_layout = "Hello" it should throw a TypeError', () => {
				expect(() => {
					const component = new Component();
					// @ts-expect-error we are testing invalid value
					component.parent_auto_layout = 'Hello';
				}).toThrow(TypeError);
			});
			describe('given parent auto_layout is "horizontal"', () => {
				describe('when parent auto_layout = "vertical"', () => {
					it('children parent_auto_layout should be "vertical"', () => {
						const parent = new Container();
						const child = new Component();
						parent.add_component(child);
						document.body.appendChild(parent);
						parent.auto_layout = 'horizontal';
						parent.auto_layout = 'vertical';
						expect(child.parent_auto_layout).toBe('vertical');
						parent.remove();
						child.remove();
					});
				});
			});
		});
		describe('opacity', () => {
			it('default opacity should be 1', () => {
				const component = new Component();
				expect(component.opacity).toBe(1);
			});
			it('when opacity = 0.5, opacity should be 0.5', () => {
				const component = new Component();
				component.opacity = 0.5;
				expect(component.opacity).toBe(0.5);
			});
			it('when opacity = 0.5, style.opacity should be "0.5"', () => {
				const component = new Component();
				component.opacity = 0.5;
				document.body.appendChild(component);
				expect(component.style.opacity).toBe('0.5');
				component.remove();
			});
			it('when opacity = -1 it should throw a RangeError', () => {
				expect(() => {
					const component = new Component();
					component.opacity = -1;
				}).toThrow(RangeError);
			});
		});
		describe('visible', () => {
			it('default visible should be true', () => {
				const component = new Component();
				expect(component.visible).toBe(true);
			});
			it('when visible === true, style.display should be "inline-block"', () => {
				const component = new Component();
				document.body.appendChild(component);
				component.visible = false;
				component.visible = true;
				expect(component.style.display).toBe('inline-block');
				component.remove();
			});
			it('when visible === false, style.display should be "none"', () => {
				const component = new Component();
				component.visible = false;
				document.body.appendChild(component);
				expect(component.style.display).toBe('none');
				component.remove();
			});
			it('when invalid visible input, it should throw a TypeError', () => {
				expect(() => {
					const component = new Component();
					// @ts-expect-error we are testing invalid value
					component.visible = 'invalid';
				}).toThrow(TypeError);
			});
		});
		describe('effects', () => {
			it('default effects should be an null', () => {
				const component = new Component();
				expect(component.effects).toBe(null);
			});
			it('default style.filter should be ""', () => {
				const component = new Component();
				expect(component.style.filter).toBe('');
			});
			describe('when effects = [dropShadow]', () => {
				it('effects should be [dropShadow]', () => {
					const component = new Component();
					const effects = [new DropShadow(0, 0, 0, new Hex('#123456'))];
					component.effects = effects;
					expect(component.effects).toBe(effects);
				});
			});
			describe('when effects = [dropShadow] and then null', () => {
				it('effects should be null', () => {
					const component = new Component();
					document.body.appendChild(component);
					component.effects = [new DropShadow(0, 0, 0, new Hex('#123456'))];
					component.effects = null;
					expect(component.effects).toBe(null);
					component.remove();
				});
			});
			describe('when effects = [new DropShadow(1, 2, 3, new Hex("#123456"))]', () => {
				it('style.filter should be "drop-shadow(1px 2px 3px #123456FF)"', () => {
					const component = new Component();
					component.effects = [new DropShadow(1, 2, 3, new Hex('#123456'))];
					document.body.appendChild(component);
					expect(component.style.filter).toBe('drop-shadow(rgb(18, 52, 86) 1px 2px 3px)');
					component.remove();
				});
			});
			describe('when effects = [new DropShadow(1, 2, 3, new Hex("#123456")), new DropShadow(1, 2, 3, new Hex("#123456"))]', () => {
				it('style.filter should be "drop-shadow(rgb(18, 52, 86) 1px 2px 3px) drop-shadow(rgb(18, 52, 86) 1px 2px 3px)"', () => {
					const component = new Component();
					component.effects = [
						new DropShadow(1, 2, 3, new Hex('#123456')),
						new DropShadow(1, 2, 3, new Hex('#123456')),
					];
					document.body.appendChild(component);
					expect(component.style.filter).toBe('drop-shadow(rgb(18, 52, 86) 1px 2px 3px) drop-shadow(rgb(18, 52, 86) 1px 2px 3px)');
					component.remove();
				});
			});
			it('when invalid effects input, it should throw a TypeError', () => {
				expect(() => {
					const component = new Component();
					// @ts-expect-error we are testing invalid value
					component.effects = 'invalid';
				}).toThrow(TypeError);
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
