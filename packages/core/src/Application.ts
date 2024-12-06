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

	override set height(value: number | 'fill' | 'hug') {
		throw new RangeError('set height is not allowed on the Application component');
	}

	override get height(): number | 'fill' | 'hug' {
		throw new RangeError('get height is not allowed on the Application component');
	}

	override set width(value: number | 'fill' | 'hug') {
		throw new RangeError('set width is not allowed on the Application component');
	}

	override get width(): number | 'fill' | 'hug' {
		throw new RangeError('get width is not allowed on the Application component');
	}
}
customElements.define('fx-application', Application);
