import { describe, expect, it } from 'vitest';
import Container from './Container';
import Hex from './Hex';
import LinearGradient from './LinearGradient';
import StopColor from './StopColor';

describe('container', () => {
	describe('default style properties', () => {
		it('default style.display should be "inline-flex"', () => {
			const container = new Container();
			expect(container.style.display).toBe('inline-flex');
		});
		it('default style.flexDirection should be "row"', () => {
			const container = new Container();
			expect(container.style.flexDirection).toBe('row');
		});
		it('default style.justifyContent should be "flex-start"', () => {
			const container = new Container();
			expect(container.style.justifyContent).toBe('flex-start');
		});
		it('default style.alignItems should be "flex-start"', () => {
			const container = new Container();
			expect(container.style.alignItems).toBe('flex-start');
		});
		it('default style.columnGap should be ""', () => {
			const container = new Container();
			expect(container.style.columnGap).toBe('');
		});
		it('default style.rowGap should be ""', () => {
			const container = new Container();
			expect(container.style.rowGap).toBe('');
		});
		it('default style.padding should be ""', () => {
			const container = new Container();
			expect(container.style.padding).toBe('');
		});
	});
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
			it('when padding_horizontal = -1 it should throw a RangeError', () => {
				expect(() => {
					const container = new Container();
					container.padding_horizontal = -1;
				}).toThrow(RangeError);
			});
			it('when padding_vertical = -1 it should throw a RangeError', () => {
				expect(() => {
					const container = new Container();
					container.padding_vertical = -1;
				}).toThrow(RangeError);
			});
		});
		describe('auto_layout', () => {
			it('default auto_layout should be "horizontal"', (): void => {
				const container = new Container();
				document.body.appendChild(container);
				expect(container.auto_layout).toBe('horizontal');
				container.remove();
			});
			it('when auto_layout = "horizontal", auto_layout should be "horizontal"', (): void => {
				const container = new Container();
				container.auto_layout = 'horizontal';
				document.body.appendChild(container);
				expect(container.auto_layout).toBe('horizontal');
				container.remove();
			});
			it('when auto_layout = "horizontal", style.flexDirection should be "row" and style.flexWrap should be ""', (): void => {
				const container = new Container();
				container.auto_layout = 'horizontal';
				document.body.appendChild(container);
				expect(container.style.flexDirection).toBe('row');
				expect(container.style.flexWrap).toBe('');
				container.remove();
			});
			it('when auto_layout = "vertical", auto_layout should be "vertical"', (): void => {
				const container = new Container();
				container.auto_layout = 'vertical';
				document.body.appendChild(container);
				expect(container.auto_layout).toBe('vertical');
				container.remove();
			});
			it('when auto_layout = "vertical", style.flexDirection should be "column" and style.flexWrap should be ""', (): void => {
				const container = new Container();
				container.auto_layout = 'vertical';
				document.body.appendChild(container);
				expect(container.style.flexDirection).toBe('column');
				expect(container.style.flexWrap).toBe('');
				container.remove();
			});
			it('when auto_layout = "wrap", auto_layout should be "wrap"', (): void => {
				const container = new Container();
				container.auto_layout = 'wrap';
				document.body.appendChild(container);
				expect(container.auto_layout).toBe('wrap');
				container.remove();
			});
			it('when auto_layout = "wrap", style.flexDirection should be "row", style.flexWrap should be "wrap" and style.alignContent should be "flex-start"', (): void => {
				const container = new Container();
				container.auto_layout = 'wrap';
				document.body.appendChild(container);
				expect(container.style.flexDirection).toBe('row');
				expect(container.style.flexWrap).toBe('wrap');
				container.remove();
			});
			it('when auto_layout = "Hello" it should throw a TypeError', () => {
				expect(() => {
					const container = new Container();
					// @ts-expect-error we are testing invalid value
					container.auto_layout = 'Hello';
				}).toThrow(TypeError);
			});
		});
		describe('alignment', () => {
			it('default alignment should be "top_left"', (): void => {
				const container = new Container();
				document.body.appendChild(container);
				expect(container.alignment).toBe('top_left');
				container.remove();
			});
			it('when alignment = "top_left", alignment should be "top_left"', (): void => {
				const container = new Container();
				document.body.appendChild(container);
				container.alignment = 'top_left';
				expect(container.alignment).toBe('top_left');
				container.remove();
			});
			it('when alignment = "top_center", alignment should be "top_center"', (): void => {
				const container = new Container();
				document.body.appendChild(container);
				container.alignment = 'top_center';
				expect(container.alignment).toBe('top_center');
				container.remove();
			});
			it('when alignment = "top_right", alignment should be "top_right"', (): void => {
				const container = new Container();
				document.body.appendChild(container);
				container.alignment = 'top_right';
				expect(container.alignment).toBe('top_right');
				container.remove();
			});
			it('when alignment = "left", alignment should be "left"', (): void => {
				const container = new Container();
				document.body.appendChild(container);
				container.alignment = 'left';
				expect(container.alignment).toBe('left');
				container.remove();
			});
			it('when alignment = "right", alignment should be "right"', (): void => {
				const container = new Container();
				document.body.appendChild(container);
				container.alignment = 'right';
				expect(container.alignment).toBe('right');
				container.remove();
			});
			it('when alignment = "bottom_left", alignment should be "bottom_left"', (): void => {
				const container = new Container();
				document.body.appendChild(container);
				container.alignment = 'bottom_left';
				expect(container.alignment).toBe('bottom_left');
				container.remove();
			});
			it('when alignment = "bottom_center", alignment should be "bottom_center"', (): void => {
				const container = new Container();
				document.body.appendChild(container);
				container.alignment = 'bottom_center';
				expect(container.alignment).toBe('bottom_center');
				container.remove();
			});
			it('when alignment = "bottom_right", alignment should be "bottom_right"', (): void => {
				const container = new Container();
				document.body.appendChild(container);
				container.alignment = 'bottom_right';
				expect(container.alignment).toBe('bottom_right');
				container.remove();
			});
			it('when alignment = "Hello" it should throw a TypeError', () => {
				expect(() => {
					const container = new Container();
					// @ts-expect-error we are testing invalid value
					container.alignment = 'Hello';
				}).toThrow(TypeError);
			});
			describe('alignment styles', () => {
				describe('given auto_layout = "horizontal"', () => {
					it('when alignment = "top_left", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'horizontal';
						container.alignment = 'top_left';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-start');
						expect(container.style.alignItems).toBe('flex-start');
						container.remove();
					});
					it('when alignment = "top_center", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'horizontal';
						container.alignment = 'top_center';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('center');
						expect(container.style.alignItems).toBe('flex-start');
						container.remove();
					});
					it('when alignment = "top_right", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'horizontal';
						container.alignment = 'top_right';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-end');
						expect(container.style.alignItems).toBe('flex-start');
						container.remove();
					});
					it('when alignment = "left", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'horizontal';
						container.alignment = 'left';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-start');
						expect(container.style.alignItems).toBe('center');
						container.remove();
					});
					it('when alignment = "center", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'horizontal';
						container.alignment = 'center';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('center');
						expect(container.style.alignItems).toBe('center');
						container.remove();
					});
					it('when alignment = "right", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'horizontal';
						container.alignment = 'right';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-end');
						expect(container.style.alignItems).toBe('center');
						container.remove();
					});
					it('when alignment = "bottom_left", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'horizontal';
						container.alignment = 'bottom_left';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-start');
						expect(container.style.alignItems).toBe('flex-end');
						container.remove();
					});
					it('when alignment = "bottom_center", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'horizontal';
						container.alignment = 'bottom_center';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('center');
						expect(container.style.alignItems).toBe('flex-end');
						container.remove();
					});
					it('when alignment = "bottom_right", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'horizontal';
						container.alignment = 'bottom_right';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-end');
						expect(container.style.alignItems).toBe('flex-end');
						container.remove();
					});
					describe('given gap_horizontal = "auto", style.justifyContent should be "space-between"', () => {
						it('when alignment = "top_left", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'horizontal';
							container.alignment = 'top_left';
							container.gap_horizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "top_center", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'horizontal';
							container.alignment = 'top_center';
							container.gap_horizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "top_right", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'horizontal';
							container.alignment = 'top_right';
							container.gap_horizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "left", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'horizontal';
							container.alignment = 'left';
							container.gap_horizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "center", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'horizontal';
							container.alignment = 'center';
							container.gap_horizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "right", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'horizontal';
							container.alignment = 'right';
							container.gap_horizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_left", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'horizontal';
							container.alignment = 'bottom_left';
							container.gap_horizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_center", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'horizontal';
							container.alignment = 'bottom_center';
							container.gap_horizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_right", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'horizontal';
							container.alignment = 'bottom_right';
							container.gap_horizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
					});
				});
				describe('given auto_layout = "wrap"', () => {
					it('when alignment = "top_left", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'wrap';
						container.alignment = 'top_left';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-start');
						expect(container.style.alignContent).toBe('flex-start');
						container.remove();
					});
					it('when alignment = "top_center", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'wrap';
						container.alignment = 'top_center';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('center');
						expect(container.style.alignContent).toBe('flex-start');
						container.remove();
					});
					it('when alignment = "top_right", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'wrap';
						container.alignment = 'top_right';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-end');
						expect(container.style.alignContent).toBe('flex-start');
						container.remove();
					});
					it('when alignment = "left", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'wrap';
						container.alignment = 'left';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-start');
						expect(container.style.alignContent).toBe('center');
						container.remove();
					});
					it('when alignment = "center", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'wrap';
						container.alignment = 'center';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('center');
						expect(container.style.alignContent).toBe('center');
						container.remove();
					});
					it('when alignment = "right", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'wrap';
						container.alignment = 'right';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-end');
						expect(container.style.alignContent).toBe('center');
						container.remove();
					});
					it('when alignment = "bottom_left", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'wrap';
						container.alignment = 'bottom_left';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-start');
						expect(container.style.alignContent).toBe('flex-end');
						container.remove();
					});
					it('when alignment = "bottom_center", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'wrap';
						container.alignment = 'bottom_center';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('center');
						expect(container.style.alignContent).toBe('flex-end');
						container.remove();
					});
					it('when alignment = "bottom_right", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'wrap';
						container.alignment = 'bottom_right';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-end');
						expect(container.style.alignContent).toBe('flex-end');
						container.remove();
					});
					describe('given gap_horizontal = "auto", style.justifyContent should be "space-between"', () => {
						it('when alignment = "top_left", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'wrap';
							container.alignment = 'top_left';
							container.gap_horizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "top_center", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'wrap';
							container.alignment = 'top_center';
							container.gap_horizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "top_right", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'wrap';
							container.alignment = 'top_right';
							container.gap_horizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "left", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'wrap';
							container.alignment = 'left';
							container.gap_horizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "center", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'wrap';
							container.alignment = 'center';
							container.gap_horizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "right", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'wrap';
							container.alignment = 'right';
							container.gap_horizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_left", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'wrap';
							container.alignment = 'bottom_left';
							container.gap_horizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_center", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'wrap';
							container.alignment = 'bottom_center';
							container.gap_horizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_right", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'wrap';
							container.alignment = 'bottom_right';
							container.gap_horizontal = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
					});
					describe('given gap_vertical = "auto", style.alignContent should be "space-between"', () => {
						it('when alignment = "top_left", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'wrap';
							container.alignment = 'top_left';
							container.gap_vertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.alignContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "top_center", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'wrap';
							container.alignment = 'top_center';
							container.gap_vertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.alignContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "top_right", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'wrap';
							container.alignment = 'top_right';
							container.gap_vertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.alignContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "left", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'wrap';
							container.alignment = 'left';
							container.gap_vertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.alignContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "center", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'wrap';
							container.alignment = 'center';
							container.gap_vertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.alignContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "right", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'wrap';
							container.alignment = 'right';
							container.gap_vertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.alignContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_left", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'wrap';
							container.alignment = 'bottom_left';
							container.gap_vertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.alignContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_center", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'wrap';
							container.alignment = 'bottom_center';
							container.gap_vertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.alignContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_right", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'wrap';
							container.alignment = 'bottom_right';
							container.gap_vertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.alignContent).toBe('space-between');
							container.remove();
						});
					});
				});
				describe('given auto_layout = "vertical"', () => {
					it('when alignment = "top_left", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'vertical';
						container.alignment = 'top_left';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-start');
						expect(container.style.alignItems).toBe('flex-start');
						container.remove();
					});
					it('when alignment = "top_center", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'vertical';
						container.alignment = 'top_center';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-start');
						expect(container.style.alignItems).toBe('center');
						container.remove();
					});
					it('when alignment = "top_right", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'vertical';
						container.alignment = 'top_right';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-start');
						expect(container.style.alignItems).toBe('flex-end');
						container.remove();
					});
					it('when alignment = "left", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'vertical';
						container.alignment = 'left';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('center');
						expect(container.style.alignItems).toBe('flex-start');
						container.remove();
					});
					it('when alignment = "center", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'vertical';
						container.alignment = 'center';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('center');
						expect(container.style.alignItems).toBe('center');
						container.remove();
					});
					it('when alignment = "right", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'vertical';
						container.alignment = 'right';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('center');
						expect(container.style.alignItems).toBe('flex-end');
						container.remove();
					});
					it('when alignment = "bottom_left", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'vertical';
						container.alignment = 'bottom_left';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-end');
						expect(container.style.alignItems).toBe('flex-start');
						container.remove();
					});
					it('when alignment = "bottom_center", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'vertical';
						container.alignment = 'bottom_center';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-end');
						expect(container.style.alignItems).toBe('center');
						container.remove();
					});
					it('when alignment = "bottom_right", styles should be correct', (): void => {
						const container = new Container();
						container.auto_layout = 'vertical';
						container.alignment = 'bottom_right';
						document.body.appendChild(container);
						expect(container.style.justifyContent).toBe('flex-end');
						expect(container.style.alignItems).toBe('flex-end');
						container.remove();
					});
					describe('given gap_vertical = "auto", style.justifyContent should be "space-between"', () => {
						it('when alignment = "top_left", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'vertical';
							container.alignment = 'top_left';
							container.gap_vertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "top_center", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'vertical';
							container.alignment = 'top_center';
							container.gap_vertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "top_right", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'vertical';
							container.alignment = 'top_right';
							container.gap_vertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "left", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'vertical';
							container.alignment = 'left';
							container.gap_vertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "center", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'vertical';
							container.alignment = 'center';
							container.gap_vertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "right", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'vertical';
							container.alignment = 'right';
							container.gap_vertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_left", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'vertical';
							container.alignment = 'bottom_left';
							container.gap_vertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_center", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'vertical';
							container.alignment = 'bottom_center';
							container.gap_vertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
						it('when alignment = "bottom_right", styles should be correct', (): void => {
							const container = new Container();
							container.auto_layout = 'vertical';
							container.alignment = 'bottom_right';
							container.gap_vertical = 'auto';
							document.body.appendChild(container);
							expect(container.style.justifyContent).toBe('space-between');
							container.remove();
						});
					});
				});
			});
		});
		describe('gap_vertical', () => {
			it('default gap_vertical should be 0', () => {
				const container = new Container();
				expect(container.gap_vertical).toBe(0);
			});
			it('when gap_vertical = 123, gap_vertical should be 123', () => {
				const container = new Container();
				container.gap_vertical = 123;
				expect(container.gap_vertical).toBe(123);
			});
			it('when gap_vertical = "auto", gap_vertical should be "auto"', () => {
				const container = new Container();
				container.gap_vertical = 'auto';
				expect(container.gap_vertical).toBe('auto');
			});
			it('when gap_vertical = 123, style.rowGap should be 123px', () => {
				const container = new Container();
				container.auto_layout = 'vertical';
				container.gap_vertical = 123;
				document.body.appendChild(container);
				expect(container.style.rowGap).toBe('123px');
				container.remove();
			});
			it('when gap_vertical = "auto", style.rowGap should be ""', () => {
				const container = new Container();
				container.gap_vertical = 'auto';
				document.body.appendChild(container);
				expect(container.style.rowGap).toBe('');
				container.remove();
			});
			describe('given auto_layout = "vertical"', () => {
				it('when gap_vertical = "auto", style.justifyContent should be "space-between"', () => {
					const container = new Container();
					container.auto_layout = 'vertical';
					container.gap_vertical = 'auto';
					document.body.appendChild(container);
					expect(container.style.justifyContent).toBe('space-between');
					container.remove();
				});
			});
			describe('given auto_layout = "horizontal"', () => {
				it('when gap_vertical !== "auto", style.rowGap should be ""', () => {
					const container = new Container();
					container.gap_vertical = 'auto';
					document.body.appendChild(container);
					expect(container.style.rowGap).toBe('');
					container.remove();
				});
			});
			describe('given auto_layout = "wrap"', () => {
				it('when gap_vertical !== "auto", style.rowGap should be ""', () => {
					const container = new Container();
					container.auto_layout = 'wrap';
					container.gap_vertical = 'auto';
					document.body.appendChild(container);
					expect(container.style.rowGap).toBe('');
					container.remove();
				});
				it('when gap_vertical = "auto", style.alignContent should be "space-between"', () => {
					const container = new Container();
					container.auto_layout = 'wrap';
					container.gap_vertical = 'auto';
					document.body.appendChild(container);
					expect(container.style.alignContent).toBe('space-between');
					container.remove();
				});
				it('when gap_vertical = 32, style.rowGap should be "32px"', () => {
					const container = new Container();
					container.auto_layout = 'wrap';
					container.gap_vertical = 32;
					document.body.appendChild(container);
					expect(container.style.rowGap).toBe('32px');
					container.remove();
				});
			});
			it('when gap_vertical = -1 it should throw a TypeError', () => {
				expect(() => {
					const container = new Container();
					container.gap_vertical = -1;
				}).toThrow(TypeError);
			});
		});
		describe('gap_horizontal', () => {
			it('default gap_horizontal should be 0', () => {
				const container = new Container();
				expect(container.gap_horizontal).toBe(0);
			});
			it('when gap_horizontal = 123, gap_horizontal should be 123', () => {
				const container = new Container();
				container.gap_horizontal = 123;
				expect(container.gap_horizontal).toBe(123);
			});
			it('when gap_horizontal = "auto", gap_horizontal should be "auto"', () => {
				const container = new Container();
				container.gap_horizontal = 'auto';
				expect(container.gap_horizontal).toBe('auto');
			});
			it('when gap_horizontal = 123, style.columnGap should be 123px', () => {
				const container = new Container();
				container.gap_horizontal = 123;
				document.body.appendChild(container);
				expect(container.style.columnGap).toBe('123px');
				container.remove();
			});
			it('when gap_horizontal = "auto", style.columnGap should be ""', () => {
				const container = new Container();
				container.gap_horizontal = 'auto';
				document.body.appendChild(container);
				expect(container.style.columnGap).toBe('');
				container.remove();
			});
			describe('given auto_layout = "horizontal"', () => {
				it('when gap_horizontal = "auto", style.justifyContent should be "space-between"', () => {
					const container = new Container();
					container.gap_horizontal = 'auto';
					document.body.appendChild(container);
					expect(container.style.justifyContent).toBe('space-between');
					container.remove();
				});
			});
			describe('given auto_layout = "vertical"', () => {
				it('when gap_horizontal !== "auto", style.columnGap should be ""', () => {
					const container = new Container();
					container.auto_layout = 'vertical';
					container.gap_horizontal = 123;
					document.body.appendChild(container);
					expect(container.style.columnGap).toBe('');
					container.remove();
				});
			});
			it('when gap_horizontal = -1 it should throw a TypeError', () => {
				expect(() => {
					const container = new Container();
					container.gap_horizontal = -1;
				}).toThrow(TypeError);
			});
		});
		describe('fill', () => {
			it('default style.background should be ""', () => {
				const container = new Container();
				expect(container.style.background).toBe('');
			});
			it('default fill should be null', () => {
				const container = new Container();
				expect(container.fill).toBe(null);
			});
			it('when fill = new Hex("#123456"), fill should be instance of Hex', () => {
				const container = new Container();
				container.fill = new Hex('#123456');
				expect(container.fill).toBeInstanceOf(Hex);
			});
			it('when fill = null, style.background should be ""', () => {
				const container = new Container();
				document.body.appendChild(container);
				container.fill = null;
				expect(container.style.background).toBe('');
				container.remove();
			});
			it('when fill = new Hex("#123456"), style.background should be "rgb(18, 52, 86)"', () => {
				const container = new Container();
				document.body.appendChild(container);
				container.fill = new Hex('#123456');
				expect(container.style.background).toBe('rgb(18, 52, 86)');
				container.remove();
			});
			describe('when fill = new LinearGradient([new StopColor(new Hex("#123456"))], 0)', () => {
				it('fill should be instance of LinearGradient', () => {
					const container = new Container();
					container.fill = new LinearGradient([new StopColor(new Hex('#123456'), 0)]);
					expect(container.fill).toBeInstanceOf(LinearGradient);
				});
			});
			it('when fill = "Hello", it should throw a TypeError', () => {
				expect(() => {
					const container = new Container();
					// @ts-expect-error we are testing invalid value
					container.fill = 'Hello';
				}).toThrow(TypeError);
			});
		});
		describe('corner_radius', () => {
			it('default corner_radius should be 0', () => {
				const container = new Container();
				expect(container.corner_radius).toBe(0);
			});
			it('when corner_radius = 16, corner_radius should be 16', () => {
				const container = new Container();
				container.corner_radius = 16;
				expect(container.corner_radius).toBe(16);
			});
			it('when corner_radius = 16, style.borderRadius should be "16px"', () => {
				const container = new Container();
				container.corner_radius = 16;
				document.body.appendChild(container);
				expect(container.style.borderRadius).toBe('16px');
				container.remove();
			});
		});
	});
	describe('methods', () => {
		describe('add_component()', () => {
			it('when an instance of a non Component, it should throw a TypeError', () => {
				const container = new Container();
				document.body.appendChild(container);
				expect(() => {
					const div = document.createElement('div');
					// @ts-expect-error we are testing invalid value
					container.add_component(div);
				}).toThrowError(TypeError);
				container.remove();
			});
			it('when a container is added, it should contain this container', () => {
				const parent = new Container();
				const child = new Container();
				document.body.appendChild(parent);
				parent.add_component(child);
				expect(parent.contains(child)).toBe(true);
				child.remove();
				parent.remove();
			});
			it('when an existing child is added, it should throw a TypeError', () => {
				expect(() => {
					const parent = new Container();
					const child = new Container();
					parent.add_component(child);
					parent.add_component(child);
				}).toThrow(TypeError);
			});
		});
	});
});
