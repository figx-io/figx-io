import { describe, expect, it } from 'vitest';
import { assert_is_html_element } from './assert_is_html_element';

class AssertIsHtmlTestElement extends HTMLElement {

}
customElements.define('assert_is_html_test-element', AssertIsHtmlTestElement);

describe('assert_is_html_element', () => {
	it('when assert_is_html_element(element) it should return undefined', () => {
		const value = assert_is_html_element(new AssertIsHtmlTestElement());
		expect(value).toBeUndefined();
	});
	it('when assert_is_html_element("not an HTMLElement") it should throw a TypeError', () => {
		expect(() => {
			assert_is_html_element('not a component');
		}).toThrow(TypeError);
	});
});
