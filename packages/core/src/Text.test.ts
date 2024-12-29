import { describe, expect, it } from 'vitest';
import Text from './Text';

describe('text', () => {
	describe('properties', () => {
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
	});
});
