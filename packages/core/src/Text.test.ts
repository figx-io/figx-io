import { describe, expect, it } from 'vitest';
import Text from './Text';

describe('text', () => {
	describe('default styles', () => {
		it('default style.fontFamily should be ""', (): void => {
			const text = new Text();
			expect(text.style.fontFamily).toBe('');
		});
	});
	describe('default properties', () => {
		describe('characters', () => {
			it('default characters should be ""', (): void => {
				const text = new Text();
				expect(text.characters).toBe('');
			});
			it('default textContent should be ""', (): void => {
				const text = new Text();
				expect(text.textContent).toBe('');
			});
		});
		describe('font_family', () => {
			it('default font_family should be ""', (): void => {
				const text = new Text();
				expect(text.font_family).toBe('');
			});
		});
	});
	describe('properties', () => {
		describe('characters', () => {
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
	});
});
