import Application from '@figx-io/core/Application';
import ColorBox from './ColorBox';

export default class FigxIO extends Application {
	public constructor() {
		super();
		this.auto_layout = 'vertical';
		const red = new ColorBox('red', 200);
		// red.width = 'fill';
		red.height = 'fill';
		red.min_height = 300;
		this.add_component(red);
		const green = new ColorBox('green', 200);
		this.add_component(green);
		// green.width = 'fill';
		green.height = 'fill';
		green.min_height = 300;
		// const blue = new ColorBox('blue', 300);
		// blue.width = 'fill';
		// this.add_component(blue);
		this.addEventListener('click', () => {
			this.auto_layout = this.auto_layout === 'horizontal' ? 'vertical' : 'horizontal';
		});
		// this.add_component(container);
	}
}
customElements.define('figx-io', FigxIO);
