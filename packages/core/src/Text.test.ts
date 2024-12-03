import { describe, expect, it } from 'vitest';
import Text from './Text';

describe('component', () => {
	describe('default properties', () => {
		describe('characters', () => {
			it('default characters should be ""', (): void => {
				const text = new Text();
				document.body.appendChild(text);
				expect(text.characters).toBe('');
				text.remove();
			});
		});
	});
	describe('properties', () => {
		describe('characters', () => {
			it('given characters is "", when characters = "Hello", characters should be "Hello"', (): void => {
				const text = new Text();
				document.body.appendChild(text);
				text.characters = 'Hello';
				expect(text.characters).toBe('Hello');
				text.remove();
			});
		});
	});
});
