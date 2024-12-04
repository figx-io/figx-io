import type IApplication from './IApplication';
import Container from './Container';

export default class Application extends Container implements IApplication {
	public constructor() {
		super();
		document.body.style.margin = '0px';
		document.body.style.minHeight = '100%';
		document.body.style.height = '100%';
		document.documentElement.style.minHeight = '100%';
		document.documentElement.style.height = '100%';
		this.style.display = 'flex';
		this.style.flexDirection = 'column';
		this.style.minHeight = '100%';
	}

	public get fontFamily(): string {
		return document.body.style.fontFamily;
	}

	public set fontFamily(value: string) {
		document.body.style.fontFamily = value;
	}
}
customElements.define('fx-application', Application);
