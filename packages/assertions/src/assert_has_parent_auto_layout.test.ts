import { describe, expect, it } from 'vitest';
import { assert_has_parent_auto_layout } from './assert_has_parent_auto_layout';

describe('assert_has_parent_auto_layout', () => {
	it('when assert_has_parent_auto_layout({ parent_auto_layout: "horizontal" }) it should return undefined', () => {
		const value = assert_has_parent_auto_layout({ parent_auto_layout: 'horizontal' });
		expect(value).toBeUndefined();
	});
	it('when assert_has_parent_auto_layout({ parent_auto_layout: false }) it should throw a TypeError', () => {
		expect(() => {
			assert_has_parent_auto_layout({ parent_auto_layout: false });
		}).toThrow(TypeError);
	});
});
