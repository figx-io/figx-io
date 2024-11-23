import type IComponent from './IComponent';
import { describe, expect, it } from 'vitest';
import Component from './Component';

describe('icomponent', (): void => {
	describe('properties', (): void => {
		describe('width', (): void => {
			it('default width should be Number.NaN', (): void => {
				const component: IComponent = new Component();
				expect(component.width).toBeNaN();
			});
		});
	});
});
