import type Data from './Data';
import Container from '@figx-io/core/Container';
import Hex from '@figx-io/core/Hex';
import Text from '@figx-io/core/Text';

export default class ColorBox extends Container {
	public constructor(color: Hex, data: Data) {
		super();
		this.fill = color;
		this.width = 'fill';
		this.height = 40;
		// this.style.outline = 'dashed #FF0000 8px';
		// this.style.outlineOffset = '-8px';
		const text = new Text();
		text.fill = new Hex('#FFFFFF');
		text.characters = `${data.first} ${data.last} ${data.age}`;
		this.add_component(text);
	}
}
customElements.define('color-box', ColorBox);
