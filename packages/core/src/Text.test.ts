import { describe, expect, it } from 'vitest';
import Hex from './Hex';
import Text from './Text';

describe('text', () => {
	describe('properties', () => {
		describe('default style properties', () => {
			it('default style.display should be "inline-block"', () => {
				const text = new Text();
				expect(text.style.display).toBe('inline-flex');
			});
		});
		describe('characters', () => {
			it('default characters should be ""', (): void => {
				const text = new Text();
				expect(text.characters).toBe('');
			});
			it('default textContent should be ""', (): void => {
				const text = new Text();
				expect(text.textContent).toBe('');
			});
			it('given characters is "", when characters = "Hello", characters should be "Hello"', (): void => {
				const text = new Text();
				text.characters = 'Hello';
				expect(text.characters).toBe('Hello');
			});
			it('when characters = "Hello", textContent should be "Hello"', (): void => {
				const text = new Text();
				document.body.appendChild(text);
				text.characters = 'Hello';
				expect(text.textContent).toBe('Hello');
				text.remove();
			});
			it('when haracters = null, it should throw a TypeError', () => {
				expect(() => {
					const text = new Text();
					// @ts-expect-error we are testing invalid value
					text.characters = null;
				}).toThrow(TypeError);
			});
		});
		describe('fill', () => {
			it('default fill should be null', (): void => {
				const text = new Text();
				expect(text.fill).toBe(null);
			});
			it('default style.color should be ""', (): void => {
				const text = new Text();
				expect(text.style.color).toBe('');
			});
			it('when text.fill = new Hex("#123456"), text.fill should be instance of Hex', (): void => {
				const text = new Text();
				text.fill = new Hex('#123456');
				expect(text.fill).toBeInstanceOf(Hex);
			});
			it('when text.fill = new Hex("#123456"), text.style.color should be "rgb(18, 52, 86)"', (): void => {
				const text = new Text();
				text.fill = new Hex('#123456');
				document.body.appendChild(text);
				expect(text.style.color).toBe('rgb(18, 52, 86)');
				text.remove();
			});
			it('when text.fill = new Hex("#123456", 50), text.style.color should be "rgba(18, 52, 86, 0.5)"', (): void => {
				const text = new Text();
				text.fill = new Hex('#123456', 50);
				document.body.appendChild(text);
				expect(text.style.color).toBe('rgba(18, 52, 86, 0.5)');
				text.remove();
			});
			it('given text.fill = new Hex("#123456"), when text.fill = null, text.fill should be null', (): void => {
				const text = new Text();
				document.body.appendChild(text);
				text.fill = new Hex('#123456');
				text.fill = null;
				expect(text.fill).toBe(null);
				text.remove();
			});
			it('when text.fill = "Hello", it should throw a TypeError', () => {
				expect(() => {
					const text = new Text();
					// @ts-expect-error we are testing invalid value
					text.fill = 'Hello';
				}).toThrow(TypeError);
			});
		});
		describe('font_family', () => {
			it('default style.fontFamily should be ""', (): void => {
				const text = new Text();
				expect(text.style.fontFamily).toBe('');
			});
			describe('font_family', () => {
				it('default font_family should be ""', (): void => {
					const text = new Text();
					expect(text.font_family).toBe('');
				});
			});
			it('when font_family = "Inter", font_family should be "Inter"', (): void => {
				const text = new Text();
				document.body.appendChild(text);
				text.font_family = 'Inter';
				expect(text.font_family).toBe('Inter');
				text.remove();
			});
			it('when font_family = "Inter", style.fontFamily should be "Inter"', (): void => {
				const text = new Text();
				document.body.appendChild(text);
				text.font_family = 'Inter';
				expect(text.style.fontFamily).toBe('Inter');
				text.remove();
			});
			it('when text.font_family = null, it should throw a TypeError', () => {
				expect(() => {
					const text = new Text();
					// @ts-expect-error we are testing invalid value
					text.font_family = null;
				}).toThrow(TypeError);
			});
		});
		describe('font_weight', () => {
			it('default style.fontWeight should be "400"', (): void => {
				const text = new Text();
				expect(text.style.fontWeight).toBe('400');
			});
			it('default font_weight should be 400', (): void => {
				const text = new Text();
				expect(text.font_weight).toBe(400);
			});
			it('when font_weight = 600, font_weight should be 600', (): void => {
				const text = new Text();
				text.font_weight = 600;
				expect(text.font_weight).toBe(600);
			});
			it('when font_weight = 600, style.fontWeight should be "600"', (): void => {
				const text = new Text();
				document.body.appendChild(text);
				text.font_weight = 600;
				expect(text.style.fontWeight).toBe('600');
				text.remove();
			});
			it('when font_weight = 0, it should throw a RangeError', () => {
				expect(() => {
					const text = new Text();
					text.font_weight = 0;
				}).toThrow(RangeError);
			});
		});
		describe('font_size', () => {
			it('default style.fontSize should be "16px"', (): void => {
				const text = new Text();
				expect(text.style.fontSize).toBe('16px');
			});
			it('default font_size should be 16', (): void => {
				const text = new Text();
				expect(text.font_size).toBe(16);
			});
			it('when font_size = 32, font_size should be 32', (): void => {
				const text = new Text();
				text.font_size = 32;
				expect(text.font_size).toBe(32);
			});
			it('when font_size = 32, style.fontSize should be "32px"', (): void => {
				const text = new Text();
				document.body.appendChild(text);
				text.font_size = 32;
				expect(text.style.fontSize).toBe('32px');
				text.remove();
			});
			it('when font_size = -1, it should throw a RangeError', () => {
				expect(() => {
					const text = new Text();
					text.font_size = -1;
				}).toThrow(RangeError);
			});
		});
		describe('line_height', () => {
			it('default style.lineHeight should be "1.2"', (): void => {
				const text = new Text();
				expect(text.style.lineHeight).toBe('1.2');
			});
			it('default line_height should be "auto"', (): void => {
				const text = new Text();
				expect(text.line_height).toBe('auto');
			});
			it('when line_height = 32, line_height should be 32', (): void => {
				const text = new Text();
				text.line_height = 32;
				expect(text.line_height).toBe(32);
			});
			it('when line_height = 32, style.lineHeight should be "32px"', (): void => {
				const text = new Text();
				text.line_height = 32;
				document.body.appendChild(text);
				expect(text.style.lineHeight).toBe('32px');
				text.remove();
			});
			it('given line_height = 32, when line_height = "auto", line_height should be "auto"', (): void => {
				const text = new Text();
				text.line_height = 32;
				text.line_height = 'auto';
				expect(text.line_height).toBe('auto');
			});
			it('given line_height = 32, when line_height = "auto", style.lineHeight should be "1.2"', (): void => {
				const text = new Text();
				text.line_height = 32;
				text.line_height = 'auto';
				document.body.appendChild(text);
				expect(text.style.lineHeight).toBe('1.2');
				text.remove();
			});
			it('when line_height = "Hello", it should throw a RangeError', () => {
				expect(() => {
					const text = new Text();
					// @ts-expect-error we are testing invalid value
					text.line_height = 'Hello';
				}).toThrow(RangeError);
			});
		});
		describe('text_align_vertical', () => {
			it('default style.alignItems should be "flex-start"', (): void => {
				const text = new Text();
				expect(text.style.alignItems).toBe('flex-start');
			});
			it('default text_align_vertical should be "top"', (): void => {
				const text = new Text();
				expect(text.text_align_vertical).toBe('top');
			});
			it('given text_align_vertical = "middle", when text_align_vertical = "top", style.alignItems should be "flex-start"', (): void => {
				const text = new Text();
				text.text_align_vertical = 'middle';
				text.text_align_vertical = 'top';
				document.body.appendChild(text);
				expect(text.style.alignItems).toBe('flex-start');
				text.remove();
			});
			it('when text_align_vertical = "middle", text_align_vertical should be "middle"', (): void => {
				const text = new Text();
				text.text_align_vertical = 'middle';
				expect(text.text_align_vertical).toBe('middle');
			});
			it('when text_align_vertical = "middle", style.alignItems should be "center"', (): void => {
				const text = new Text();
				text.text_align_vertical = 'middle';
				document.body.appendChild(text);
				expect(text.style.alignItems).toBe('center');
				text.remove();
			});
			it('when text_align_vertical = "bottom", text_align_vertical should be "bottom"', (): void => {
				const text = new Text();
				text.text_align_vertical = 'bottom';
				expect(text.text_align_vertical).toBe('bottom');
			});
			it('when text_align_vertical = "bottom", style.alignItems should be "flex-end"', (): void => {
				const text = new Text();
				text.text_align_vertical = 'bottom';
				document.body.appendChild(text);
				expect(text.style.alignItems).toBe('flex-end');
				text.remove();
			});
			it('when text_align_vertical = "Hello", it should throw a TypeError', () => {
				expect(() => {
					const text = new Text();
					// @ts-expect-error we are testing invalid value
					text.text_align_vertical = 'Hello';
				}).toThrow(TypeError);
			});
		});
		describe('text_align_horizontal', () => {
			it('default style.textAlign should be "start"', (): void => {
				const text = new Text();
				expect(text.style.textAlign).toBe('start');
			});
			it('default text_align_horizontal should be "left"', (): void => {
				const text = new Text();
				expect(text.text_align_horizontal).toBe('left');
			});
			it('when text_align_horizontal = "center", text_align_horizontal should be "center"', (): void => {
				const text = new Text();
				text.text_align_horizontal = 'center';
				expect(text.text_align_horizontal).toBe('center');
			});
			it('when text_align_horizontal = "center", style.textAlign should be "center"', (): void => {
				const text = new Text();
				text.text_align_horizontal = 'center';
				document.body.appendChild(text);
				expect(text.style.textAlign).toBe('center');
				text.remove();
			});
			it('when text_align_horizontal = "left", text_align_horizontal should be "left"', (): void => {
				const text = new Text();
				text.text_align_horizontal = 'center';
				text.text_align_horizontal = 'left';
				expect(text.text_align_horizontal).toBe('left');
			});
			it('when text_align_horizontal = "left", style.textAlign should be "start"', (): void => {
				const text = new Text();
				text.text_align_horizontal = 'center';
				text.text_align_horizontal = 'left';
				document.body.appendChild(text);
				expect(text.style.textAlign).toBe('start');
				text.remove();
			});
			it('when text_align_horizontal = "right", text_align_horizontal should be "right"', (): void => {
				const text = new Text();
				text.text_align_horizontal = 'right';
				expect(text.text_align_horizontal).toBe('right');
			});
			it('when text_align_horizontal = "right", style.textAlign should be "end"', (): void => {
				const text = new Text();
				text.text_align_horizontal = 'right';
				document.body.appendChild(text);
				expect(text.style.textAlign).toBe('end');
				text.remove();
			});
			it('when text_align_horizontal = "justified", text_align_horizontal should be "justified"', (): void => {
				const text = new Text();
				text.text_align_horizontal = 'justified';
				expect(text.text_align_horizontal).toBe('justified');
			});
			it('when text_align_horizontal = "justified", style.textAlign should be "justify"', (): void => {
				const text = new Text();
				text.text_align_horizontal = 'justified';
				document.body.appendChild(text);
				expect(text.style.textAlign).toBe('justify');
				text.remove();
			});
			it('when text_align_horizontal = "Hello", it should throw a TypeError', () => {
				expect(() => {
					const text = new Text();
					// @ts-expect-error we are testing invalid value
					text.text_align_horizontal = 'Hello';
				}).toThrow(TypeError);
			});
		});
		describe('truncate_text', () => {
			it('default #text_content.style.overflow should be "visible"', (): void => {
				const text = new Text();
				const text_content = text.firstChild;
				if (text_content instanceof HTMLElement) {
					expect(text_content.style.overflow).toBe('visible');
				}
			});
			it('default #text_content.style.display should be "inline-block"', (): void => {
				const text = new Text();
				const text_content = text.firstChild;
				if (text_content instanceof HTMLElement) {
					expect(text_content.style.display).toBe('inline-block');
				}
			});
			it('default #text_content.style.webkitBoxOrient should be ""', (): void => {
				const text = new Text();
				const text_content = text.firstChild;
				if (text_content instanceof HTMLElement) {
					expect(text_content.style.webkitBoxOrient).toBe('');
				}
			});
			it('default truncate_text should be false', (): void => {
				const text = new Text();
				expect(text.truncate_text).toBe(false);
			});
			it('when truncate_text = true, truncate_text should be true', (): void => {
				const text = new Text();
				text.truncate_text = true;
				expect(text.truncate_text).toBe(true);
			});
			it('when truncate_text = true and then false, truncate_text should be false', (): void => {
				const text = new Text();
				text.truncate_text = true;
				text.truncate_text = false;
				expect(text.truncate_text).toBe(false);
			});
			describe('given truncate_text = true', (): void => {
				it('#text_content.style.overflow should be "hidden"', (): void => {
					const text = new Text();
					text.truncate_text = true;
					document.body.appendChild(text);
					const text_content = text.firstChild;
					if (text_content instanceof HTMLElement) {
						expect(text_content.style.overflow).toBe('hidden');
					}
					text.remove();
				});
				it('#text_content.style.display should be "-webkit-box"', (): void => {
					const text = new Text();
					text.truncate_text = true;
					document.body.appendChild(text);
					const text_content = text.firstChild;
					if (text_content instanceof HTMLElement) {
						expect(text_content.style.display).toBe('-webkit-box');
					}
					text.remove();
				});
				it('#text_content.style.webkitBoxOrient should be "vertical"', (): void => {
					const text = new Text();
					text.truncate_text = true;
					document.body.appendChild(text);
					const text_content = text.firstChild;
					if (text_content instanceof HTMLElement) {
						expect(text_content.style.webkitBoxOrient).toBe('vertical');
					}
					text.remove();
				});
				it('#text_content.style.webkitLineClamp should be "1"', (): void => {
					const text = new Text();
					text.truncate_text = true;
					document.body.appendChild(text);
					const text_content = text.firstChild;
					if (text_content instanceof HTMLElement) {
						expect(text_content.style.webkitLineClamp).toBe('1');
					}
					text.remove();
				});
			});
			describe('given truncate_text = true and truncate_text = false', (): void => {
				it('#text_content.style.overflow should be "visible"', (): void => {
					const text = new Text();
					text.truncate_text = true;
					text.truncate_text = false;
					document.body.appendChild(text);
					const text_content = text.firstChild;
					if (text_content instanceof HTMLElement) {
						expect(text_content.style.overflow).toBe('visible');
					}
					text.remove();
				});
				it('#text_content.style.display should be "inline-block"', (): void => {
					const text = new Text();
					text.truncate_text = true;
					text.truncate_text = false;
					document.body.appendChild(text);
					const text_content = text.firstChild;
					if (text_content instanceof HTMLElement) {
						expect(text_content.style.display).toBe('inline-block');
					}
					text.remove();
				});
				it('#text_content.style.webkitBoxOrient should be ""', (): void => {
					const text = new Text();
					text.truncate_text = true;
					text.truncate_text = false;
					document.body.appendChild(text);
					const text_content = text.firstChild;
					if (text_content instanceof HTMLElement) {
						expect(text_content.style.webkitBoxOrient).toBe('');
					}
					text.remove();
				});
			});
			it('when truncate_text = "Hello", it should throw a TypeError', () => {
				expect(() => {
					const text = new Text();
					// @ts-expect-error we are testing invalid value
					text.truncate_text = 'Hello';
				}).toThrow(TypeError);
			});
		});
		describe('max_lines', () => {
			it('default max_lines should be 1', (): void => {
				const text = new Text();
				expect(text.max_lines).toBe(1);
			});
			it('default #text_content.style.webkitLineClamp should be "1"', (): void => {
				const text = new Text();
				const text_content = text.firstChild;
				if (text_content instanceof HTMLElement) {
					expect(text_content.style.webkitLineClamp).toBe('1');
				}
			});
			it('when max_lines = 2, max_lines should be 2', (): void => {
				const text = new Text();
				text.max_lines = 2;
				expect(text.max_lines).toBe(2);
			});
			it('when max_lines = 2, #text_content.style.webkitLineClamp should be "2"', (): void => {
				const text = new Text();
				text.max_lines = 2;
				document.body.appendChild(text);
				const text_content = text.firstChild;
				if (text_content instanceof HTMLElement) {
					expect(text_content.style.webkitLineClamp).toBe('2');
				}
				text.remove();
			});
			it('when max_lines = 0, it should throw a RangeError', () => {
				expect(() => {
					const text = new Text();
					text.max_lines = 0;
				}).toThrow(RangeError);
			});
		});
		describe('vertical_trim', () => {
			it('default vertical_trim should be "standard"', (): void => {
				const text = new Text();
				expect(text.vertical_trim).toBe('standard');
			});
			it('default #text_content.style.textBoxTrim should be ""', (): void => {
				const text = new Text();
				const text_content = text.firstChild;
				if (text_content instanceof HTMLElement) {
					// @ts-expect-error textBoxTrim is not widely supported yet
					expect(text_content.style.textBoxTrim).toBe('');
				}
			});
			it('default style.textBoxEdge should be ""', (): void => {
				const text = new Text();
				const text_content = text.firstChild;
				if (text_content instanceof HTMLElement) {
					// @ts-expect-error textBoxEdge is not widely supported yet
					expect(text_content.style.textBoxEdge).toBe('');
				}
			});
			it('when vertical_trim = "cap", vertical_trim should be "cap"', (): void => {
				const text = new Text();
				text.vertical_trim = 'cap';
				expect(text.vertical_trim).toBe('cap');
			});
			it('when vertical_trim = "cap", #text_content.style.textBoxTrim should be "trim-both"', (): void => {
				const text = new Text();
				text.vertical_trim = 'cap';
				document.body.appendChild(text);
				const text_content = text.firstChild;
				if (text_content instanceof HTMLElement) {
					// @ts-expect-error textBoxTrim is not widely supported yet
					expect(text_content.style.textBoxTrim).toBe('trim-both');
				}
				text.remove();
			});
			it('when vertical_trim = "cap", #text_content.style.textBoxEdge should be "cap alphabetic"', (): void => {
				const text = new Text();
				text.vertical_trim = 'cap';
				document.body.appendChild(text);
				const text_content = text.firstChild;
				if (text_content instanceof HTMLElement) {
					// @ts-expect-error textBoxEdge is not widely supported yet
					expect(text_content.style.textBoxEdge).toBe('cap alphabetic');
				}
				text.remove();
			});
			it('when vertical_trim = "standard", vertical_trim should be "standard"', (): void => {
				const text = new Text();
				text.vertical_trim = 'cap';
				text.vertical_trim = 'standard';
				expect(text.vertical_trim).toBe('standard');
			});
			it('when vertical_trim = "standard", #text_content.style.textBoxTrim should be ""', (): void => {
				const text = new Text();
				text.vertical_trim = 'standard';
				document.body.appendChild(text);
				const text_content = text.firstChild;
				if (text_content instanceof HTMLElement) {
					// @ts-expect-error textBoxTrim is not widely supported yet
					expect(text_content.style.textBoxTrim).toBe('');
				}
				text.remove();
			});
			it('when vertical_trim = "standard", #text_content.style.textBoxEdge should be ""', (): void => {
				const text = new Text();
				text.vertical_trim = 'cap';
				text.vertical_trim = 'standard';
				document.body.appendChild(text);
				const text_content = text.firstChild;
				if (text_content instanceof HTMLElement) {
					// @ts-expect-error textBoxEdge is not widely supported yet
					expect(text_content.style.textBoxEdge).toBe('');
				}
				text.remove();
			});
			it('when vertical_trim = "Hello", it should throw a TypeError', () => {
				expect(() => {
					const text = new Text();
					// @ts-expect-error we are testing invalid value
					text.vertical_trim = 'Hello';
				}).toThrow(TypeError);
			});
		});
	});
});
