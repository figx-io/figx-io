import Application from '@figx-io/core/Application';
import Container from '@figx-io/core/Container';
import Hex from '@figx-io/core/Hex';
import Stroke from '@figx-io/core/Stroke';
import ColorBox from './ColorBox';
import Data from './Data';

export default class FigxIO extends Application {
	public constructor() {
		super();
		this.alignment = 'center';
		const container = new Container();
		container.width = 500;
		container.height = 300;
		container.corner_radius = 20;
		container.fill = new Hex('#123456');
		container.stroke = new Stroke(new Hex('#FF0000', 0.5), 20, 'center', 'dash');
		this.add_component(container);
	}
}
customElements.define('figx-io', FigxIO);
