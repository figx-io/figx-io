import { describe, expect, it } from 'vitest';
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
			it('default #text_content.style.webkitLineClamp should be ""', (): void => {
				const text = new Text();
				const text_content = text.firstChild;
				if (text_content instanceof HTMLElement) {
					expect(text_content.style.webkitLineClamp).toBe('');
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
				it('#text_content.style.webkitLineClamp should be ""', (): void => {
					const text = new Text();
					text.truncate_text = true;
					text.truncate_text = false;
					document.body.appendChild(text);
					const text_content = text.firstChild;
					if (text_content instanceof HTMLElement) {
						expect(text_content.style.webkitLineClamp).toBe('');
					}
					text.remove();
				});
			});
		});
	});
});
