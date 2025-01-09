import Component from './Component';

export default class Rectangle extends Component {
	#defs: SVGDefsElement;
	#linear_gradient: SVGLinearGradientElement;
	#linear_gradient_id: string;
	#rect: SVGRectElement;
	#svg: SVGSVGElement;
	public constructor() {
		super();
		this.#svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		this.#svg.style.overflow = 'visible';
		this.#svg.setAttribute('fill', 'none');
		this.#svg.setAttribute('width', '100%');
		this.#svg.setAttribute('height', '100%');
		this.#svg.setAttribute('preserveAspectRatio', 'none');
		this.#rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
		this.#rect.setAttribute('width', '100%');
		this.#rect.setAttribute('height', '100%');
		this.#rect.setAttribute('shape-rendering', 'geometricPrecision');
		const stop_1: SVGStopElement = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
		stop_1.setAttribute('offset', '0%');
		stop_1.setAttribute('stop-color', 'gold');
		const stop_2: SVGStopElement = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
		stop_2.setAttribute('offset', '100%');
		stop_2.setAttribute('stop-color', 'red');
		this.#linear_gradient_id = Math.random().toString();
		this.#linear_gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
		this.#linear_gradient.setAttribute('id', this.#linear_gradient_id);
		this.#linear_gradient.appendChild(stop_1);
		this.#linear_gradient.appendChild(stop_2);

		this.#rect.setAttribute('fill', `url(#${this.#linear_gradient_id})`);

		this.#defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
		this.#defs.appendChild(this.#linear_gradient);
		this.#svg.appendChild(this.#defs);
		this.#svg.appendChild(this.#rect);
		this.appendChild(this.#svg);
	}
}
customElements.define('fx-rectangle', Rectangle);
