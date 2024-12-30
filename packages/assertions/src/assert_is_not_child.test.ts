import { describe, expect, it } from 'vitest';
import { assert_is_not_child } from './assert_is_not_child';

class AssertIsNotChildTestElement extends HTMLElement {

}
customElements.define('assert_is_not_child_test-element', AssertIsNotChildTestElement);

describe('assert_is_not_child', () => {
	it('when assert_is_not_child(component, component) it should return undefined', () => {
		const value = assert_is_not_child(new AssertIsNotChildTestElement(), new AssertIsNotChildTestElement());
		expect(value).toBeUndefined();
	});
	it('when assert_is_not_child(child, parent) it should throw a TypeError', () => {
		const child = new AssertIsNotChildTestElement();
		const parent = new AssertIsNotChildTestElement();
		parent.appendChild(child);
		expect(() => {
			assert_is_not_child(child, parent);
		}).toThrow(TypeError);
	});
});
