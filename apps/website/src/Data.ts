export default class Data {
	#age: number;
	#first: string;
	#last: string;
	public constructor(first: string, last: string, age: number) {
		this.#age = age;
		this.#first = first;
		this.#last = last;
	}

	public get age(): number {
		return this.#age;
	}

	public get first(): string {
		return this.#first;
	}

	public get last(): string {
		return this.#last;
	}
}
