import Container from './Container';
import Hex from './Hex';
import LinearGradient from './LinearGradient';

export default class Application extends Container {
	#fill: Hex | LinearGradient | null;
	#fill_changed: boolean;
	#font_family: string;
	#font_family_changed: boolean;
	public constructor() {
		super();
		document.body.style.background = '';
		document.body.style.height = '100%';
		document.body.style.margin = '0px';
		document.body.style.minHeight = '100%';
		document.documentElement.style.height = '100%';
		document.documentElement.style.minHeight = '100%';
		this.style.display = 'flex';
		this.style.minHeight = '100%';
		this.#fill = null;
		this.#fill_changed = false;
		this.#font_family = '';
		this.#font_family_changed = false;
		this.auto_layout = 'vertical';
	}

	protected override commit_properties(): void {
		super.commit_properties();
		if (this.#fill_changed) {
			this.#commit_fill_changed();
		}
		if (this.#font_family_changed) {
			this.font_family_changed();
		}
	}

	#commit_fill_changed(): void {
		this.#fill_changed = false;
		if (this.fill === null) {
			document.body.style.background = '';
			return;
		}
		document.body.style.background = this.fill.to_style_string();
	}

	private font_family_changed(): void {
		this.#font_family_changed = false;
		document.body.style.fontFamily = this.font_family;
	}

	public override set fill(value: Hex | LinearGradient | null) {
		assert_is_valid_fill(value);
		this.#fill = value;
		this.#fill_changed = true;
		this.invalidate_properties();
	}

	public override get fill(): Hex | LinearGradient | null {
		return this.#fill;
	}

	public set font_family(value: string) {
		assert_is_string(value);
		this.#font_family = value;
		this.#font_family_changed = true;
		this.invalidate_properties();
	}

	public get font_family(): string {
		return this.#font_family;
	}
}
customElements.define('fx-application', Application);

function assert_is_string(value: unknown): asserts value is string {
	if (typeof value === 'string') {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be of type string`);
}

function assert_is_valid_fill(value: unknown): asserts value is Hex | LinearGradient | null {
	if (value instanceof Hex || value instanceof LinearGradient || value === null) {
		return;
	}
	throw new TypeError(`[${value}] is invalid, must be instance of Hex / LinearGradient or null`);
}
