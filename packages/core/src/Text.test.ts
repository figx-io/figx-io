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
			it('when font_weight = 600, fontWeight should be 600', (): void => {
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
	});
});
