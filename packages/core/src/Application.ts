import type IApplication from './IApplication';
import Container from './Container';

export default class Application extends Container implements IApplication {
	public constructor() {
		super();
	}
}
customElements.define('fx-application', Application);
