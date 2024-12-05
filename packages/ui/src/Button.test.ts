import { describe, it } from 'vitest';
import Button from './Button';

describe('text', () => {
	describe('contructor', () => {
		it('it can be instatiated and added to the DOM', (): void => {
			const button = new Button();
			document.body.appendChild(button);
			button.remove();
		});
	});
});
