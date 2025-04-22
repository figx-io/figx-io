import Application from '@figx-io/core/Application';
import Container from '@figx-io/core/Container';
import DropShadow from '@figx-io/core/DropShadow';
import Hex from '@figx-io/core/Hex';
import Stroke from '@figx-io/core/Stroke';
import Text from '@figx-io/core/Text';

export default class FigxIO extends Application {
	public constructor() {
		super();
		this.fill = new Hex('#F7FBFB');
		this.alignment = 'top_center';
		this.gap_vertical = 64;
		const container = new Container();
		container.padding_horizontal = 32;
		container.padding_vertical = 32;
		container.corner_radius = 24;
		container.fill = new Hex('#FFFFFF');
		const text = new Text();
		text.font_size = 128;
		text.font_family = 'Inter';
		text.characters = 'Hello World!';
		text.fill = new Hex('#0000FF');
		text.effects = [new DropShadow(5, 5, 0, new Hex('#000000'))];
		container.add_component(text);
		container.effects = [
			new DropShadow(-10, -10, 0, new Hex('#FF0000')),
			new DropShadow(10, 10, 0, new Hex('#000000')),
		];
		// this.add_component(container);
		const container2 = new Container();
		container2.width = 400;
		container2.height = 500;
		container2.fill = new Hex('#000000');
		container2.corner_radius = 16;
		container2.stroke = new Stroke(new Hex('#FF0000', 0.5), 10, 'inside');

		container2.style.transition = 'transform 2s';

		// container2.stroke = new Stroke(new Hex('#3259E8'), 2);
		container2.effects = [
			new DropShadow(0, 6, 12, new Hex('#000000', 0.1)),
		];
		this.add_component(container2);
		this.addEventListener('click', () => {
			container2.style.transform = 'translate(0px, 1000px)';
		});
	}
}
customElements.define('figx-io', FigxIO);
