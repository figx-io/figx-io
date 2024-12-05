import Application from '@figx-io/core/Application';
import ColorBox from './ColorBox';

export default class FigxIO extends Application {
	public constructor() {
		super();
		// const container = new Component();
		// this.auto_layout = 'wrap';
		this.auto_layout = 'horizontal';
		this.alignment = 'bottom_right';
		this.add_component(new ColorBox('red', 100));
		this.add_component(new ColorBox('green', 200));
		this.add_component(new ColorBox('blue', 300));
		// this.add_component(container);
	}
}
customElements.define('figx-io', FigxIO);
