import type IText from './IText';
import Component from './Component';

export default class Text extends Component implements IText {
	private _characters: string;

	public constructor() {
		super();
		this._characters = '';
	}

	public set characters(value: string) {
		this._characters = value;
		this.textContent = value;
	}

	public get characters(): string {
		return this._characters;
	}
}
customElements.define('fx-text', Text);
