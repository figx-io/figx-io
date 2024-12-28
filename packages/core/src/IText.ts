import type IComponent from './IComponent';

export default interface IText extends IComponent {
	characters: string;
	font_family: string;
	font_weight: number;
}
