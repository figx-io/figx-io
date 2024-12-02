import type IComponent from './IComponent';
import { describe, expect, it } from 'vitest';
import Component from './Component';

describe('component', () => {
	describe('default style properties', () => {
		it('default style.display should be "inline-flex"', () => {
			const component = new Component();
			expect(component.style.display).toBe('inline-flex');
		});
	});
	describe('default properties', () => {
		describe('width', (): void => {
			it('default width should be Number.NaN', (): void => {
				const component: IComponent = new Component();
				expect(component.width).toBeNaN();
			});
		});
	});
});
