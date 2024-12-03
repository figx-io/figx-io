import Application from '@figx-io/core/Application';
import Text from '@figx-io/core/Text';
import Button from '@figx-io/ui/Button';

export default class FigxIO extends Application {
	public constructor() {
		super();
		this.appendChild(new Button());
		const text = new Text();
		text.width = 0;
		text.characters = 'Hello World';
		this.appendChild(text);
	}
}
customElements.define('figx-io', FigxIO);
