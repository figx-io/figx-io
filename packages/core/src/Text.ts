import type IText from './IText';
import Component from './Component';

export default class Text extends Component implements IText {
	private _text: string;

	public constructor() {
		super();
		this._text = '';
		console.log('Text() 2');
	}

	public set text(value: string) {
		this.textContent = value;
	}

	public get text(): string {
		return this._text;
	}
}
customElements.define('fx-text', Text);
