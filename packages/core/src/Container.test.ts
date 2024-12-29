import { describe, expect, it } from 'vitest';
import Container from './Container';

describe('container', () => {
	describe('properties', () => {
		describe('padding', () => {
			it('default padding_horizontal should be 0', () => {
				const container = new Container();
				document.body.appendChild(container);
				expect(container.padding_horizontal).toBe(0);
				container.remove();
			});
			it('default padding_vertical should be 0', () => {
				const container = new Container();
				document.body.appendChild(container);
				expect(container.padding_vertical).toBe(0);
				container.remove();
			});
			it('when padding_horizontal = 32, padding_horizontal should be 32', () => {
				const container = new Container();
				document.body.appendChild(container);
				container.padding_horizontal = 32;
				expect(container.padding_horizontal).toBe(32);
				container.remove();
			});
			it('when padding_horizontal = 32, style.paddingLeft and style.paddingRight should be 32px', () => {
				const container = new Container();
				document.body.appendChild(container);
				container.padding_horizontal = 32;
				expect(container.style.paddingLeft).toBe('32px');
				expect(container.style.paddingRight).toBe('32px');
				container.remove();
			});
			it('when padding_vertical = 32, padding_vertical should be 32', () => {
				const container = new Container();
				document.body.appendChild(container);
				container.padding_vertical = 32;
				expect(container.padding_vertical).toBe(32);
				container.remove();
			});
			it('when padding_vertical = 32, style.paddingTop and style.paddingBottom should be 32px', () => {
				const container = new Container();
				document.body.appendChild(container);
				container.padding_vertical = 32;
				expect(container.style.paddingTop).toBe('32px');
				expect(container.style.paddingBottom).toBe('32px');
				container.remove();
			});
		});
	});
});
