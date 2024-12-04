import Component from '@figx-io/core/Component';

export default class ColorBox extends Component {
	public constructor(color = 'red', size = 300) {
		super();
		this.style.background = color;
		this.style.height = `${size}px`;
		this.style.width = `${size}px`;
	}
}
customElements.define('color-box', ColorBox);
