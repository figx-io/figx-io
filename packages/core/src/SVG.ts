import Component from './Component';

export default class SVG extends Component {
	#svg: SVGSVGElement;
	public constructor() {
		super();
		this.#svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		this.#svg.style.overflow = 'visible';
		this.#svg.setAttribute('fill', 'none');
		this.#svg.setAttribute('width', '100%');
		this.#svg.setAttribute('height', '100%');
		this.#svg.setAttribute('preserveAspectRatio', 'none');
		this.appendChild(this.#svg);
	}
}
customElements.define('fx-svg', SVG);
