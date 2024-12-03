import type IText from '@figx-io/core/IText';
import Application from '@figx-io/core/Application';
import Text from '@figx-io/core/Text';
import Button from '@figx-io/ui/Button';

export default class FigxIO extends Application {
	public constructor() {
		super();
		this.appendChild(new Button());
		const text: IText = new Text();
		text.characters = 'Hello World';
		this.appendChild(text as unknown as Node);
	}
}
customElements.define('figx-io', FigxIO);
