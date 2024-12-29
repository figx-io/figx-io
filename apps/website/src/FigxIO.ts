import Application from '@figx-io/core/Application';
import Text from '@figx-io/core/Text';

export default class FigxIO extends Application {
	public constructor() {
		super();
		this.alignment = 'center';
		const text = new Text();
		text.font_family = 'Inter';
		text.characters = '@figx-io';
		text.font_weight = 600;
		text.font_size = 64;
		this.add_component(text);
	}
}
customElements.define('figx-io', FigxIO);
